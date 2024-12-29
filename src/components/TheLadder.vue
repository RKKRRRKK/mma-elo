<template>
  <div class="ladder-container">
    <div class="upper_part">
      <div class="title_wrap">
        <h2>G.O.A.T List</h2>
        <h3>(TOP 1000)</h3>
      </div>
      <div class="p-inputgroup search-bar">
        <span class="p-inputgroup-addon">
          <i class="pi pi-search"></i>
        </span>
        <InputText v-model="filters['global'].value" placeholder="Search" />
        <Dropdown
          class="dropdown"
          v-model="CalcType"
          :options="calcTypes"
          placeholder="Select Calculation"
        ></Dropdown>
      </div>
    </div>

    <DataTable
      class="table"
      :value="fighters"
      :sortField="sortField"
      :sortOrder="-1"
      :filters="filters"
      paginator
      :rows="10"
      responsiveLayout="scroll"
    >
      <Column
        v-for="col in columnsToShow"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :sortable="col.sortable"
        :headerStyle="{ color: 'white', '--p-datatable-sort-icon-color': 'white' }"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useFightersStore } from '@/stores/fighters'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import { FilterMatchMode } from '@primevue/core/api'

const fightersStore = useFightersStore()
const fighters = computed(() => fightersStore.fighters || [])
const referenceDate = new Date('2024-12-26') //when the days peak was initially calculated

onMounted(() => {
  const now = new Date()
  if (now <= referenceDate) return

  const diffTime = now - referenceDate
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  const jonJones = fighters.value.find((fighter) => fighter.name === 'Jon Jones')

  if (jonJones) {
    jonJones.days_peak = (jonJones.days_peak || 0) + diffDays
    jonJones.days_peak_dom = (jonJones.days_peak_dom || 0) + diffDays
  }
})

const CalcType = ref('normal calculation')
const sortField = ref('peak_elo')

const calcTypes = ['normal calculation', 'domination calculation']

watch(CalcType, (newVal) => {
  if (newVal === 'domination calculation') {
    sortField.value = 'peak_elo_dom'
  } else {
    sortField.value = 'peak_elo'
  }
})

const columnsToShow = computed(() => {
  if (CalcType.value === 'domination calculation') {
    return [
      { field: 'rank_elo_dom', header: 'Rank', sortable: false },
      { field: 'name', header: 'Name', sortable: false },
      { field: 'peak_elo_dom', header: 'Peak Elo', sortable: true },
      { field: 'current_elo_dom', header: 'Current Elo', sortable: true },
      { field: 'best_win_dom', header: 'Best Win', sortable: false },
      { field: 'days_peak_dom', header: 'Days at Peak', sortable: true },
      { field: 'weight_class', header: 'Weight Class', sortable: false },
      { field: 'nationality', header: 'Country/Region', sortable: false }
    ]
  } else {
    return [
      { field: 'rank_elo', header: 'Rank', sortable: false },
      { field: 'name', header: 'Name', sortable: false },
      { field: 'peak_elo', header: 'Peak Elo', sortable: true },
      { field: 'current_elo', header: 'Current Elo', sortable: true },
      { field: 'best_win', header: 'Best Win', sortable: false },
      { field: 'days_peak', header: 'Days at Peak', sortable: true },
      { field: 'weight_class', header: 'Weight Class', sortable: false },
      { field: 'nationality', header: 'Country/Region', sortable: false }
    ]
  }
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS }
})

const updateSortIcon = () => {
  const selectedSortIcon = document.querySelector('svg[sorted="true"] path')
  if (selectedSortIcon) {
    selectedSortIcon.setAttribute('fill', 'white')
  }
}

// Watch for changes in the sortField (which indicates a change in sorting)
watch(sortField, (newSort) => {
  setTimeout(() => {
    updateSortIcon() // Apply the white fill to the selected icon
  }, 0) // Wait for the DOM to update
})
///implement this text shadow for n.1 text-shadow: 0 0 5px #fff, 0 0 10px #ff0, 0 0 15px #ff0, 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00;

updateSortIcon()
</script>

<style scoped>
.ladder-container {
  max-width: 95rem;
  margin: 3rem auto 1rem;
  padding: 2rem;
}

.upper_part {
  background-color: rgba(185, 28, 28, 0.25);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  border: solid RGBA(255, 255, 255, 0.15) 0.2rem;
  border-bottom: none;
}
h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

h3 {
  padding-left: 0.5rem;
}

.search-bar {
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  flex-wrap: wrap;
}

.wrapper_options {
  display: flex;
  align-content: space-between;
}

.title_wrap {
  display: flex;
  justify-content: center;
}

.table {
  border: solid RGBA(255, 255, 255, 0.15) 0.2rem;
  border-bottom: none;
  border-top: none;
}

.dropdown {
  margin-left: 1.25rem;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.33rem;
}

@media (max-width: 768px) {
  .ladder-container {
    max-width: 100%;
    padding: 1rem;
    margin: 1rem auto;
    font-size: 0.6rem;
    transform: scale(0.9);
  }

  .p-inputtext {
    font-size: inherit;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>
