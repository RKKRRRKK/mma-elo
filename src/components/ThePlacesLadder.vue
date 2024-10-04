<template>
  <div>
    <h2 class="title">Top 10 Birthplaces</h2>
    <DataTable :value="birthplaces" tableStyle="min-width: 50rem">
      <Column field="birthplace" header="Birthplace"></Column>
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

const birthplaces = ref([
  {
    birthplace: 'Makhachkala, Dagestan',
    n_fighters: 163,
    avg_elo: 1348.0,
    top_fighter: 'Islam Makhachev (1853.24)'
  },
  {
    birthplace: 'Grozny, Chechnya',
    n_fighters: 249,
    avg_elo: 1310.0,
    top_fighter: 'Abdul-Aziz Abdulvakhabov (1677.17)'
  },
  {
    birthplace: 'Paris',
    n_fighters: 142,
    avg_elo: 1271.0,
    top_fighter: 'Francis Ngannou (1687.9)'
  },
  {
    birthplace: 'Brasilia, Federal District',
    n_fighters: 146,
    avg_elo: 1264.0,
    top_fighter: 'Renato Carneiro (1636.72)'
  },
  {
    birthplace: 'Dagestan',
    n_fighters: 146,
    avg_elo: 1260.0,
    top_fighter: 'Magomedrasul Khasbulaev (1720.6)'
  },
  {
    birthplace: 'Seoul',
    n_fighters: 101,
    avg_elo: 1258.0,
    top_fighter: 'Soo Chul Kim (1546.62)'
  },
  {
    birthplace: 'Porto Alegre, Rio Grande do Sul',
    n_fighters: 119,
    avg_elo: 1254.0,
    top_fighter: 'Fabricio Werdum (1589.64)'
  },
  {
    birthplace: 'Rio de Janeiro, Rio de Janeiro',
    n_fighters: 395,
    avg_elo: 1254.0,
    top_fighter: 'Rafael dos Anjos (1579.28)'
  },
  {
    birthplace: 'Moscow',
    n_fighters: 349,
    avg_elo: 1251.0,
    top_fighter: 'Eduard Vartanyan (1735.23)'
  },
  {
    birthplace: 'Natal, Rio Grande do Norte',
    n_fighters: 217,
    avg_elo: 1249.0,
    top_fighter: 'Patricio Freire (1748.2)'
  }
])
</script>

<style scoped>
.guide {
  width: 100%;

  background-color: green;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
