<template>
  <div>
    <div class="year">
      <label for="yearSelect">Select Year:</label>
      <select id="yearSelect" v-model="selectedYear">
        <option v-for="year in availableYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <v-chart :option="chartOption" theme="dark" style="width: 800px; height: 400px" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePromoStore } from '@/stores/analytics/promotions.js'
import ECharts from 'vue-echarts'
import 'echarts'

const promoStore = usePromoStore()
const availableYears = computed(() => {
  const years = [...new Set(promoStore.promos.map((p) => p.event_year))]
  return years.sort((a, b) => a - b)
})

const selectedYear = ref(availableYears.value[0] || new Date().getFullYear())

const sortedPromos = computed(() => {
  return promoStore.promos
    .filter((p) => p.event_year === selectedYear.value)
    .slice()
    .sort((a, b) => b.total_elo - a.total_elo)
})

const xAxisLabels = computed(() => sortedPromos.value.map((p) => `${p.promotion}`))

const totalEloData = computed(() => sortedPromos.value.map((p) => Math.round(p.total_elo / 10)))

const finishRateData = computed(() => sortedPromos.value.map((p) => Math.round(p.finish_rate)))

const wLEloData = computed(() => sortedPromos.value.map((p) => Math.round(p.w_l_elo_discrepency)))

const chartOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    formatter: (params) => {
      let tooltipText = ''
      params.forEach((item) => {
        tooltipText += `${item.marker} ${item.seriesName}: ${item.value}<br/>`
      })
      return tooltipText
    }
  },
  legend: {
    data: ['Total ELO (divided by 10)', 'Finish Rate %', 'W/L ELO Discrepency']
  },
  xAxis: {
    type: 'category',
    data: xAxisLabels.value,
    axisTick: { alignWithLabel: true },
    axisLabel: {
      interval: 0,
      rotate: 0
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Total ELO (divided by 10)',
      type: 'bar',
      data: totalEloData.value,
      barGap: 0
    },
    {
      name: 'Finish Rate %',
      type: 'bar',
      data: finishRateData.value,
      barGap: 0
    },
    {
      name: 'W/L ELO Discrepency',
      type: 'bar',
      data: wLEloData.value,
      barGap: 0
    }
  ]
}))
</script>

<style scoped>
.year {
  position: absolute;
  transform: translate(1rem, 0.5rem);
  z-index: 999;
}
</style>
