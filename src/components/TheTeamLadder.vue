<template>
  <div>
    <h2 class="title">Top 10 Teams</h2>

    <DataTable class="table" :value="associations" tableStyle="min-width: 50rem">
      <Column field="association" header="Association"></Column>
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

const associations = ref([
  {
    association: 'Kill Cliff FC',
    n_fighters: 69,
    avg_elo: 1447.0,
    top_fighter: 'Anthony Johnson (1711.58)'
  },
  {
    association: 'American Top Team',
    n_fighters: 232,
    avg_elo: 1368.0,
    top_fighter: 'Dustin Poirier (1731.01)'
  },
  {
    association: 'Fight Club Akhmat',
    n_fighters: 135,
    avg_elo: 1341.0,
    top_fighter: 'Magomedrasul Khasbulaev (1720.6)'
  },
  {
    association: 'Tristar Gym',
    n_fighters: 66,
    avg_elo: 1339.0,
    top_fighter: 'Georges St. Pierre (1854.69)'
  },
  {
    association: 'Team Alpha Male',
    n_fighters: 95,
    avg_elo: 1328.0,
    top_fighter: 'Josh Emmett (1604.2)'
  },
  {
    association: 'Factory X',
    n_fighters: 58,
    avg_elo: 1327.0,
    top_fighter: 'Zak Cummings (1583.24)'
  },
  {
    association: 'Xtreme Couture',
    n_fighters: 131,
    avg_elo: 1324.0,
    top_fighter: 'Francis Ngannou (1687.9)'
  },
  {
    association: 'Astra Fight Team',
    n_fighters: 88,
    avg_elo: 1322.0,
    top_fighter: 'Julio Cesar Neves Jr. (1597.52)'
  },
  {
    association: 'American Kickboxing Academy',
    n_fighters: 98,
    avg_elo: 1322.0,
    top_fighter: 'Daniel Cormier (1737.8)'
  },
  {
    association: 'Jackson-Wink MMA',
    n_fighters: 131,
    avg_elo: 1320.0,
    top_fighter: 'Jon Jones (1862.11)'
  }
])
</script>

<style scoped>
.guide {
  width: 100%;

  background-color: red;
}

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
  border: solid RGBA(255, 255, 255, 0.15) 0.2rem;
}
</style>
