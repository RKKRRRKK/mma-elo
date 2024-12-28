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
    nationality,
    COUNT(*) AS n_fighters,
    AVG(current_elo) AS avg_elo,
    MAX(current_elo) AS top_elo,
    (SELECT name FROM fighters_enriched_new WHERE fighters_enriched_new.nationality = fighters_enriched_new.nationality ORDER BY current_elo DESC LIMIT 1) AS top_fighter
  `)

  const placesLadder = await fetchLadderData(`
    birthplace,
    COUNT(*) AS n_fighters,
    AVG(current_elo) AS avg_elo,
    MAX(current_elo) AS top_elo,
    (SELECT name FROM fighters_enriched_new WHERE fighters_enriched_new.birthplace = fighters_enriched_new.birthplace ORDER BY current_elo DESC LIMIT 1) AS top_fighter
  `)

  const teamsLadder = await fetchLadderData(`
    association,
    COUNT(*) AS n_fighters,
    AVG(current_elo) AS avg_elo,
    MAX(current_elo) AS top_elo,
    (SELECT name FROM fighters_enriched_new WHERE fighters_enriched_new.association = fighters_enriched_new.association ORDER BY current_elo DESC LIMIT 1) AS top_fighter
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
