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
        <Column field="rank" header="Elo Rank (difference)" sortable>
          <template #body="slotProps">
            {{ slotProps.data.rank }}
            <span v-if="slotProps.data.rankDifference !== null">
              <span v-if="slotProps.data.rankDifference > 0" class="rank-up">
                (▲ {{ slotProps.data.rankDifference }})
              </span>
              <span v-else-if="slotProps.data.rankDifference < 0" class="rank-down">
                (▼ {{ Math.abs(slotProps.data.rankDifference) }})
              </span>
            </span>
          </template>
        </Column>
        <Column field="ufc_position" header="UFC Rank" sortable></Column>
        <Column field="name" header="Name"></Column>
        <Column field="current_elo" header="Current Elo"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFightersStore } from '@/stores/fighters'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const fightersStore = useFightersStore()

const weightClasses = [
  'flyweight',
  'bantamweight',
  'featherweight',
  'lightweight',
  'welterweight',
  'middleweight',
  'light heavyweight',
  'heavyweight'
]

const filteredFighters = computed(() => {
  const rankedFighters = {}

  weightClasses.forEach((weightClass) => {
    const fightersInClass = fightersStore.fighters
      .filter((fighter) => fighter.ufc_class === weightClass)
      .sort((a, b) => b.current_elo - a.current_elo)
      .map((fighter, index) => {
        const rank = index
        const ufcPosition = Number(fighter.ufc_position)
        const difference = !isNaN(ufcPosition) ? ufcPosition - rank : null
        return {
          ...fighter,
          rank,
          rankDifference: difference
        }
      })

    rankedFighters[weightClass] = fightersInClass
  })

  return rankedFighters
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

.rank-up {
  color: green;
}

.rank-down {
  color: red;
}
</style>
