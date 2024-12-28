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

async function fetchCountriesLadder() {
  const { data, error } = await supabase.rpc('fetch_countries_ladder')
  if (error) {
    console.error('Error fetching countries ladder:', error)
    process.exit(1)
  }
  return data
}

async function fetchPlacesLadder() {
  const { data, error } = await supabase.rpc('fetch_places_ladder')
  if (error) {
    console.error('Error fetching places ladder:', error)
    process.exit(1)
  }
  return data
}

async function fetchTeamsLadder() {
  const { data, error } = await supabase.rpc('fetch_team_ladder')
  if (error) {
    console.error('Error fetching team ladder:', error)
    process.exit(1)
  }
  return data
}

async function fetchAndUpdateLadders() {
  const countriesLadder = await fetchCountriesLadder()
  const placesLadder = await fetchPlacesLadder()
  const teamsLadder = await fetchTeamsLadder()

  writeComponent(
    'src/components/TheCountriesLadder.vue',
    'nationalities',
    countriesLadder,
    'Nationality',
    'Nationalities'
  )
  writeComponent(
    'src/components/ThePlacesLadder.vue',
    'birthplaces',
    placesLadder,
    'Birthplace',
    'Birthplaces'
  )
  writeComponent(
    'src/components/TheTeamLadder.vue',
    'associations',
    teamsLadder,
    'Association',
    'Associations'
  )

  console.log('Ladder components updated successfully.')
}

function writeComponent(filePath, variableName, data, primaryField, secondaryField) {
  const formattedData = JSON.stringify(data, null, 2)
  const componentCode = `
<template>
  <div>
    <h2 class="title">Top 10 ${secondaryField}</h2>
    <DataTable class="table" :value="${variableName}" tableStyle="min-width: 50rem">
      <Column field="${primaryField.toLowerCase()}" header="${primaryField}"></Column>
      <Column field="n_fighters" header="Number of Fighters"></Column>
      <Column field="avg_elo" header="Average Elo"></Column>
      <!-- Adjust the column name if your function returns "best_fighter" instead of "top_fighter" -->
      <Column field="best_fighter" header="Top Fighter"></Column>
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

// 7. Run everything
;(async function () {
  await fetchFighters()
  await fetchAndUpdateLadders()
})()
