<template>
  <h1 class="title">UFC Ranking Comparison vs current Elo (top 1000)</h1>
  <p class="notice">
    *If a fighter is marked <strong style="color: green">green</strong>, it means their UFC rank is
    <strong>4</strong> or more positions lower than it should be (underrated).
  </p>
  <p class="notice">
    If a fighter is marked <strong style="color: red">red</strong>, it means their UFC rank is
    <strong>4</strong> or more positions higher than it should be (overrated).
  </p>
  <div class="rankings-grid">
    <div
      v-for="(fighters, weightClass) in filteredFighters"
      :key="weightClass"
      class="table-wrapper"
    >
      <h3 class="subtitle">{{ weightClass }}</h3>

      <DataTable :value="fighters" tableStyle="min-width: 50rem" :rowClass="rowClassName">
        <Column field="rank_elo" header="Elo Rank" sortable>
          <template #body="slotProps">
            {{ slotProps.data.rank_elo === 0 ? '(champion)' : slotProps.data.rank_elo }}
          </template>
        </Column>

        <Column field="ufc_rank" header="UFC Rank" sortable>
          <template #body="slotProps">
            {{ slotProps.data.ufc_rank === 0 ? '0 (champion)' : slotProps.data.ufc_rank }}
          </template>
        </Column>
        <Column field="name" header="Name" sortable>
          <template #body="slotProps">
            {{ slotProps.data.name }}
          </template>
        </Column>
        <Column field="current_elo" header="Current Elo" sortable>
          <template #body="slotProps">
            {{ slotProps.data.current_elo }}
          </template>
        </Column>
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
    grouped[wc] = ufcStore.fighters.filter((f) => f.weightclass === wc)
  })
  return grouped
})

const rowClassName = (rowData) => {
  let diff = rowData.rank_elo - rowData.ufc_rank
  if (diff >= 4) {
    return 'highlight-red'
  } else if (diff <= -4) {
    return 'highlight-green'
  } else {
    return ''
  }
}
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

:deep .highlight-red {
  background-color: rgba(179, 9, 9, 0.343) !important;
}

:deep .highlight-green {
  background-color: rgba(3, 120, 24, 0.471) !important;
}

.notice {
  padding-left: 10rem;
  color: gray;
}
</style>
