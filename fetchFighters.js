import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

async function fetchFighters() {
  const { data, error } = await supabase
    .from('fighters_enriched_new')
    .select('*')
    .order('peak_elo', { ascending: false })
    .limit(1000)

  if (error) {
    console.error('Error fetching fighters:', error)
    process.exit(1)
  }

  const storeCode = `import { defineStore } from 'pinia';

export const useFightersStore = defineStore('fighters', {
  state: () => ({
    fighters: ${JSON.stringify(data, null, 2)}
  })
});
`

  fs.writeFileSync('src/stores/fighters.js', storeCode)
  console.log('Fighters store updated successfully.')
}

async function fetchLadderData(queryParams) {
  const { data, error } = await supabase.from('fighters_enriched_new').select(queryParams)

  if (error) {
    console.error('Error fetching ladder data:', error)
    process.exit(1)
  }

  return data
}

async function fetchAndUpdateLadders() {
  const countriesLadder = await fetchLadderData(`
WITH CTE1 AS (SELECT nationality, AVG(current_elo) as avg_elo, count(*) as n_fighters
FROM fighters_enriched_new
WHERE nationality != ''
GROUP BY nationality
ORDER BY n_fighters DESC
LIMIT 10
)
,
 
CTE2 AS (SELECT name, nationality, current_elo,  ROW_NUMBER() OVER (PARTITION BY nationality ORDER BY current_elo DESC) AS rank FROM fighters_enriched_new
)

SELECT CTE1.nationality,  CTE1.n_fighters, CTE1.avg_elo, CONCAT(CTE2.name, ' (', current_elo, ')') as best_fighter FROM CTE1
LEFT JOIN CTE2  USING(nationality)
WHERE CTE2.rank = 1
ORDER BY avg_elo DESC;
  `)

  const placesLadder = await fetchLadderData(`
WITH CTE1 AS (SELECT birthplace, AVG(current_elo) as avg_elo, count(*) as n_fighters
FROM fighters_enriched_new
WHERE birthplace != ''
GROUP BY birthplace
HAVING count(*) > 100

)
,
 
CTE2 AS (SELECT name, birthplace, current_elo,  ROW_NUMBER() OVER (PARTITION BY birthplace ORDER BY current_elo DESC) AS rank FROM fighters_enriched_new
)

SELECT CTE1.birthplace,  CTE1.n_fighters, CTE1.avg_elo, CONCAT(CTE2.name, ' (', current_elo, ')') as best_fighter FROM CTE1
LEFT JOIN CTE2  USING(birthplace)
WHERE CTE2.rank = 1
ORDER BY avg_elo DESC
LIMIT 10
;
  `)

  const teamsLadder = await fetchLadderData(`
WITH CTE1 AS (SELECT association, AVG(current_elo) as avg_elo, count(*) as n_fighters
FROM fighters_enriched_new
WHERE association != ''
AND association NOT IN ('Freelance', 'Independent')
GROUP BY association
HAVING  count(*) > 50
)

SELECT association,  n_fighters, avg_elo FROM CTE1
ORDER BY avg_elo DESC
LIMIT 10; 
  `)

  writeComponent(
    'src/components/TheCountriesLadder.vue',
    'nationalities',
    countriesLadder,
    'Nationality'
  )
  writeComponent('src/components/ThePlacesLadder.vue', 'birthplaces', placesLadder, 'Birthplace')
  writeComponent('src/components/TheTeamLadder.vue', 'associations', teamsLadder, 'Association')

  console.log('Ladder components updated successfully.')
}

function writeComponent(filePath, variableName, data, primaryField) {
  const formattedData = JSON.stringify(data, null, 2)
  const componentCode = `
<template>
  <div>
    <h2 class="title">Top 10 ${primaryField}s</h2>
    <DataTable class="table" :value="${variableName}" tableStyle="min-width: 50rem">
      <Column field="${primaryField.toLowerCase()}" header="${primaryField}"></Column>
      <Column field="n_fighters" header="Number of Fighters"></Column>
      <Column field="avg_elo" header="Average Elo"></Column>
      <Column field="top_fighter" header="Top Fighter"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const ${variableName} = ref(${formattedData});
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  border: solid rgba(255, 255, 255, 0.15) 0.2rem;
  border-bottom: none;
  background-color: rgba(185, 28, 28, 0.25);
  margin-bottom: 0;
  padding: 1rem;
}

.table {
  border: solid rgba(255, 255, 255, 0.15) 0.2rem;
}
</style>
`
  fs.writeFileSync(filePath, componentCode)
  console.log(`Updated component: ${filePath}`)
}

;(async function () {
  await fetchFighters()
  await fetchAndUpdateLadders()
})()
