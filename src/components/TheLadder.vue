<template>
  <div class="ladder-container">
    <h2>Fighters List</h2>
    <div class="p-inputgroup search-bar">
      <span class="p-inputgroup-addon">
        <i class="pi pi-search"></i>
      </span>
      <InputText v-model="filters['global'].value" placeholder="Search..." />
    </div>

    <DataTable
      :value="fighters"
      :sortField="'peak_elo'"
      :sortOrder="-1"
      :filters="filters"
      :globalFilterFields="['name', 'best_win', 'worst_loss']"
      paginator
      :rows="10"
      responsiveLayout="scroll"
    >
      <Column field="name" header="Name" sortable></Column>
      <Column field="elo" header="Current ELO" sortable></Column>
      <Column field="peak_elo" header="Peak ELO" sortable></Column>
      <Column field="best_win" header="Best Win" sortable></Column>
      <Column field="worst_loss" header="Worst Loss" sortable></Column>
      <Column field="days_peak" header="Days at Peak" sortable></Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFightersStore } from '@/stores/fighters'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'

const fightersStore = useFightersStore()

const fighters = computed(() => fightersStore.fighters)

const filters = ref({
  global: { value: null, matchMode: 'contains' }
})
</script>

<style scoped>
.ladder-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.search-bar {
  margin-bottom: 1rem;
}
</style>
