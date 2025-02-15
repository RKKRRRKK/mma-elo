<template>
  <v-chart :option="chartOption" theme="dark" style="width: 50px; height: 400px" />
</template>

<script setup>
import { ref } from 'vue'
import ECharts from 'vue-echarts'
import 'echarts'

const submissionTypes = {
  Armbar: 20,
  ArmTriangleChoke: 10,
  GuillotineCoke: 20,
  RearNakedChoke: 35,
  TriangleChoke: 15
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
      name: 'Armbar',
      type: 'bar',
      stack: 'total',
      barWidth: 20, // control thickness
      data: [submissionTypes.Armbar]
    },
    {
      name: 'ArmTriangleChoke',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [submissionTypes.ArmTriangleChoke]
    },
    {
      name: 'GuillotineChoke',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [submissionTypes.GuillotineChoke]
    },
    {
      name: 'RearNakedChoke',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [submissionTypes.RearNakedChoke]
    },
    {
      name: 'TriangleChoke',
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [submissionTypes.TriangleChoke]
    }
  ]
})
</script>
