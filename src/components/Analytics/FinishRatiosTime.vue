<template>
  <v-chart :option="chartOption" theme="dark" style="width: 600px; height: 400px" />
</template>

<script setup>
import { ref } from 'vue'
import ECharts from 'vue-echarts'
import 'echarts'

const chartData = [
  {
    year: 1990,
    submissions: 13,
    knockouts: 6,
    ratio_sub: 68,
    ratio_ko: 32,
    ratio_finish: 79
  },
  {
    year: 1991,
    submissions: 14,
    knockouts: 5,
    ratio_sub: 74,
    ratio_ko: 26,
    ratio_finish: 63
  },
  {
    year: 1992,
    submissions: 18,
    knockouts: 5,
    ratio_sub: 78,
    ratio_ko: 22,
    ratio_finish: 82
  },
  {
    year: 1993,
    submissions: 31,
    knockouts: 17,
    ratio_sub: 65,
    ratio_ko: 35,
    ratio_finish: 89
  },
  {
    year: 1994,
    submissions: 74,
    knockouts: 24,
    ratio_sub: 76,
    ratio_ko: 24,
    ratio_finish: 89
  },
  {
    year: 1995,
    submissions: 178,
    knockouts: 87,
    ratio_sub: 67,
    ratio_ko: 33,
    ratio_finish: 89
  },
  {
    year: 1996,
    submissions: 253,
    knockouts: 194,
    ratio_sub: 57,
    ratio_ko: 43,
    ratio_finish: 81
  },
  {
    year: 1997,
    submissions: 342,
    knockouts: 256,
    ratio_sub: 57,
    ratio_ko: 43,
    ratio_finish: 77
  },
  {
    year: 1998,
    submissions: 570,
    knockouts: 308,
    ratio_sub: 65,
    ratio_ko: 35,
    ratio_finish: 78
  },
  {
    year: 1999,
    submissions: 851,
    knockouts: 488,
    ratio_sub: 64,
    ratio_ko: 36,
    ratio_finish: 78
  },
  {
    year: 2000,
    submissions: 999,
    knockouts: 624,
    ratio_sub: 62,
    ratio_ko: 38,
    ratio_finish: 75
  },
  {
    year: 2001,
    submissions: 1134,
    knockouts: 838,
    ratio_sub: 58,
    ratio_ko: 42,
    ratio_finish: 78
  },
  {
    year: 2002,
    submissions: 1379,
    knockouts: 1098,
    ratio_sub: 56,
    ratio_ko: 44,
    ratio_finish: 76
  },
  {
    year: 2003,
    submissions: 1965,
    knockouts: 1525,
    ratio_sub: 56,
    ratio_ko: 44,
    ratio_finish: 79
  },
  {
    year: 2004,
    submissions: 1963,
    knockouts: 1771,
    ratio_sub: 53,
    ratio_ko: 47,
    ratio_finish: 78
  },
  {
    year: 2005,
    submissions: 2458,
    knockouts: 2234,
    ratio_sub: 52,
    ratio_ko: 48,
    ratio_finish: 81
  },
  {
    year: 2006,
    submissions: 3759,
    knockouts: 3209,
    ratio_sub: 54,
    ratio_ko: 46,
    ratio_finish: 80
  },
  {
    year: 2007,
    submissions: 4659,
    knockouts: 4110,
    ratio_sub: 53,
    ratio_ko: 47,
    ratio_finish: 81
  },
  {
    year: 2008,
    submissions: 4754,
    knockouts: 4086,
    ratio_sub: 54,
    ratio_ko: 46,
    ratio_finish: 80
  },
  {
    year: 2009,
    submissions: 5810,
    knockouts: 4973,
    ratio_sub: 54,
    ratio_ko: 46,
    ratio_finish: 79
  },
  {
    year: 2010,
    submissions: 6643,
    knockouts: 5249,
    ratio_sub: 56,
    ratio_ko: 44,
    ratio_finish: 77
  },
  {
    year: 2011,
    submissions: 6566,
    knockouts: 5428,
    ratio_sub: 55,
    ratio_ko: 45,
    ratio_finish: 75
  },
  {
    year: 2012,
    submissions: 7363,
    knockouts: 6409,
    ratio_sub: 53,
    ratio_ko: 47,
    ratio_finish: 75
  },
  {
    year: 2013,
    submissions: 7557,
    knockouts: 6764,
    ratio_sub: 53,
    ratio_ko: 47,
    ratio_finish: 74
  },
  {
    year: 2014,
    submissions: 6793,
    knockouts: 6503,
    ratio_sub: 51,
    ratio_ko: 49,
    ratio_finish: 73
  },
  {
    year: 2015,
    submissions: 6996,
    knockouts: 7199,
    ratio_sub: 49,
    ratio_ko: 51,
    ratio_finish: 74
  },
  {
    year: 2016,
    submissions: 6791,
    knockouts: 7330,
    ratio_sub: 48,
    ratio_ko: 52,
    ratio_finish: 72
  },
  {
    year: 2017,
    submissions: 6936,
    knockouts: 7727,
    ratio_sub: 47,
    ratio_ko: 53,
    ratio_finish: 71
  },
  {
    year: 2018,
    submissions: 6558,
    knockouts: 7687,
    ratio_sub: 46,
    ratio_ko: 54,
    ratio_finish: 69
  },
  {
    year: 2019,
    submissions: 6983,
    knockouts: 8505,
    ratio_sub: 45,
    ratio_ko: 55,
    ratio_finish: 68
  },
  {
    year: 2020,
    submissions: 2849,
    knockouts: 3594,
    ratio_sub: 44,
    ratio_ko: 56,
    ratio_finish: 70
  },
  {
    year: 2021,
    submissions: 5274,
    knockouts: 6854,
    ratio_sub: 43,
    ratio_ko: 57,
    ratio_finish: 68
  },
  {
    year: 2022,
    submissions: 6704,
    knockouts: 8906,
    ratio_sub: 43,
    ratio_ko: 57,
    ratio_finish: 67
  },
  {
    year: 2023,
    submissions: 8160,
    knockouts: 9623,
    ratio_sub: 46,
    ratio_ko: 54,
    ratio_finish: 66
  },
  {
    year: 2024,
    submissions: 8115,
    knockouts: 9330,
    ratio_sub: 47,
    ratio_ko: 53,
    ratio_finish: 63
  },
  {
    year: 2025,
    submissions: 142,
    knockouts: 105,
    ratio_sub: 57,
    ratio_ko: 43,
    ratio_finish: 56
  }
]

const chartOption = ref({
  //   title: {
  //     text: 'MMA Finishes Over Time'
  //   },
  tooltip: {
    trigger: 'axis',
    /* 
        We use a custom formatter to display:
          - Year
          - ratio_sub% + (submissions)
          - ratio_ko% + (knockouts)
          - ratio_finish%
      */
    formatter: (params) => {
      // params is an array, each element corresponds to one series in 'trigger: axis' mode
      // We can read axisValue (the 'year') from the first data point
      const year = params[0].axisValue
      // The dataIndex gives us the index in chartData
      const dataIndex = params[0].dataIndex
      const pointData = chartData[dataIndex]

      return `
          <div>
            <strong>Year: ${year}</strong><br/>
            Submission Ratio: ${pointData.ratio_sub}% (${pointData.submissions} Submissions)<br/>
            Knockout Ratio: ${pointData.ratio_ko}% (${pointData.knockouts} Knockouts)<br/>
            Finish Ratio: ${pointData.ratio_finish}%
          </div>
        `
    }
  },
  legend: {
    data: ['Submission Ratio', 'Knockout Ratio', 'Finish Ratio']
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: chartData.map((item) => item.year)
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Submission Ratio',
      type: 'line',
      data: chartData.map((item) => item.ratio_sub)
    },
    {
      name: 'Knockout Ratio',
      type: 'line',
      data: chartData.map((item) => item.ratio_ko)
    },
    {
      name: 'Finish Ratio',
      type: 'line',
      data: chartData.map((item) => item.ratio_finish)
    }
  ]
})
</script>
