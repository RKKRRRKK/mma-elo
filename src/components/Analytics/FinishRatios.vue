<template>
  <v-chart :option="chartOption" theme="dark" style="width: 50px; height: 400px" />
</template>

<script setup>
import { ref } from 'vue'
import ECharts from 'vue-echarts'
import 'echarts'

const fightFinishes = {
  submissions: 142,
  knockouts: 105,
  decisions: 100
}

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: (params) => {
      // Show each segment of the stack
      let tooltipText = ''
      params.forEach((item) => {
        tooltipText += `${item.marker} ${item.seriesName}: ${item.value}<br/>`
      })
      return tooltipText
    }
  },

  // Hide the legend
  legend: {
    show: false
  },

  // Hide both axes entirely
  xAxis: {
    type: 'category',
    data: ['All Fights'],
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },

  // Adjust grid so the thin bar is centered
  grid: {
    left: '0%',
    right: '0%',
    top: '10%',
    bottom: '18%'
  },

  series: [
    {
      name: 'Submissions',
      type: 'bar',
      stack: 'total',
      barWidth: 20, // control thickness
      data: [fightFinishes.submissions]
    },
    {
      name: 'Knockouts',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [fightFinishes.knockouts]
    },
    {
      name: 'Decisions',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [fightFinishes.decisions]
    }
  ]
})
</script>
