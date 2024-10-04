<template>
  <div>
    <h2 class="title">Top 10 Nationalities</h2>
    <DataTable :value="nationalities" tableStyle="min-width: 50rem">
      <Column field="nationality" header="Nationality"></Column>
      <Column field="n_fighters" header="Number of Fighters"></Column>
      <Column field="avg_elo" header="Average Elo"></Column>
      <Column field="top_fighter" header="Top Fighter"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const nationalities = ref([
  {
    nationality: 'Russia',
    n_fighters: 5393,
    avg_elo: 1245.0,
    top_fighter: 'Islam Makhachev (1853.24)'
  },
  {
    nationality: 'Poland',
    n_fighters: 1894,
    avg_elo: 1232.0,
    top_fighter: 'Mateusz Gamrot (1690.1)'
  },
  {
    nationality: 'Brazil',
    n_fighters: 12790,
    avg_elo: 1229.0,
    top_fighter: 'Charles Oliveira (1758.59)'
  },
  {
    nationality: 'Canada',
    n_fighters: 2633,
    avg_elo: 1229.0,
    top_fighter: 'Georges St. Pierre (1854.69)'
  },
  {
    nationality: 'South Korea',
    n_fighters: 671,
    avg_elo: 1228.0,
    top_fighter: 'Dong Hyun Kim (1603.04)'
  },
  {
    nationality: 'Peru',
    n_fighters: 890,
    avg_elo: 1226.0,
    top_fighter: 'Daniel Marcos (1578.39)'
  },
  {
    nationality: 'Australia',
    n_fighters: 1627,
    avg_elo: 1226.0,
    top_fighter: 'Alexander Volkanovski (1724.92)'
  },
  {
    nationality: 'England',
    n_fighters: 4158,
    avg_elo: 1225.0,
    top_fighter: 'Leon Edwards (1743.55)'
  },
  {
    nationality: 'France',
    n_fighters: 1261,
    avg_elo: 1225.0,
    top_fighter: 'Francis Ngannou (1687.9)'
  },
  {
    nationality: 'Germany',
    n_fighters: 1470,
    avg_elo: 1224.0,
    top_fighter: 'Roberto Soldic (1605.4)'
  }
])
</script>

<style scoped>
.guide {
  width: 100%;
  background-color: gray;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
