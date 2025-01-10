<template>
  <h1 class="title">UFC Ranking Comparison (vs current Elo)</h1>
  <div class="rankings-grid">
    <div
      v-for="(fighters, weightClass) in filteredFighters"
      :key="weightClass"
      class="table-wrapper"
    >
      <h3 class="subtitle">{{ weightClass }}</h3>
      <DataTable :value="fighters" tableStyle="min-width: 50rem">
        <Column field="rank_elo" header="Elo Rank" sortable />
        <Column field="ufc_rank" header="UFC Rank" sortable />
        <Column field="name" header="Name" sortable />
        <Column field="current_elo" header="Current Elo" sortable />
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUFCStore } from '@/stores/ufc_store'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const ufcStore = useUFCStore()

const weightClasses = [
  'Flyweight',
  'Bantamweight',
  'Featherweight',
  'Lightweight',
  'Welterweight',
  'Middleweight',
  'Light Heavyweight',
  'Heavyweight'
]

const filteredFighters = computed(() => {
  const grouped = {}

  weightClasses.forEach((wc) => {
    grouped[wc] = ufcStore.fighters.filter((fighter) => fighter.weightclass === wc)
  })

  return grouped
})
</script>

<style scoped>
.rankings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 4rem;
  padding-top: 0rem;
}

.table-wrapper {
  border: solid RGBA(255, 255, 255, 0.15) 0.2rem;
  border-radius: 1.5rem;
  transform: scale(0.9);
}

.subtitle {
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
  padding: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  border-bottom: solid rgba(255, 255, 255, 0.15) 0.2rem;
  background-color: rgba(185, 28, 28, 0.25);
}

.title {
  padding-top: 2rem;
  text-align: center;
}
</style>
