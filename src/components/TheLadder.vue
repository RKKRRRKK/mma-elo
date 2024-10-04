<template>
  <div class="ladder-container">
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
      ></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useFightersStore } from '@/stores/fighters'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import { FilterMatchMode } from '@primevue/core/api'

const fightersStore = useFightersStore()
const fighters = computed(() => fightersStore.fighters || [])

const CalcType = ref('normal calculation')
const sortField = ref('peak_elo')

const calcTypes = ['normal calculation', 'domination calculation', 'pico_elbows calculation']

watch(CalcType, (newVal) => {
  if (newVal === 'domination calculation') {
    sortField.value = 'peak_elo_dom'
  } else if (newVal === 'pico_elbows calculation') {
    sortField.value = 'peak_elo_dom_pico_elbows'
  } else {
    sortField.value = 'peak_elo'
  }
})

const columnsToShow = computed(() => {
  if (CalcType.value === 'domination calculation') {
    return [
      { field: 'name', header: 'Name', sortable: false },
      { field: 'peak_elo_dom', header: 'Peak Elo', sortable: true },
      { field: 'current_elo_dom', header: 'Current Elo', sortable: true },
      { field: 'best_win_dom', header: 'Best Win', sortable: false },
      { field: 'days_peak_dom', header: 'Days at Peak', sortable: true },
      { field: 'weight_class', header: 'Weight Class', sortable: false },
      { field: 'nationality', header: 'Country/Region', sortable: false }
    ]
  } else if (CalcType.value === 'pico_elbows calculation') {
    return [
      { field: 'name', header: 'Name', sortable: false },
      { field: 'peak_elo_dom_pico_elbows', header: 'Peak Elo', sortable: true },
      { field: 'current_elo_pico_elbows', header: 'Current Elo', sortable: true },
      { field: 'best_win_dom_pico_elbows', header: 'Best Win', sortable: false },
      { field: 'days_peak_dom_pico_elbows', header: 'Days at Peak', sortable: true },
      { field: 'weight_class', header: 'Weight Class', sortable: false },
      { field: 'nationality', header: 'Country/Region', sortable: false }
    ]
  } else {
    return [
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
</script>

<style scoped>
.ladder-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.search-bar {
  margin-bottom: 1rem;
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
}
.dropdown {
  margin-left: 2rem;
}
</style>
