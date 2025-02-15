<template>
  <!-- Note: Make sure you have registered ECharts (vue-echarts) properly -->
  <v-chart :option="chartOption" theme="dark" style="width: 600px; height: 400px" />
</template>

<script setup>
import { ref } from 'vue'

// Your original data
const chartData = [
  {
    submission: 'Guillotine Choke',
    year: 2024,
    submission_count: '965',
    submission_ratio: 12
  },
  {
    submission: 'Rear Naked Choke',
    year: 2021,
    submission_count: '1929',
    submission_ratio: 36
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2003,
    submission_count: '24',
    submission_ratio: 1
  },
  {
    submission: 'Triangle Choke',
    year: 2009,
    submission_count: '521',
    submission_ratio: 9
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 1996,
    submission_count: '5',
    submission_ratio: 2
  },
  {
    submission: 'Other',
    year: 2019,
    submission_count: '1835',
    submission_ratio: 19
  },
  {
    submission: 'Rear Naked Choke',
    year: 1997,
    submission_count: '78',
    submission_ratio: 18
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2024,
    submission_count: '512',
    submission_ratio: 6
  },
  {
    submission: 'Guillotine Choke',
    year: 2004,
    submission_count: '213',
    submission_ratio: 10
  },
  {
    submission: 'Armbar',
    year: 2003,
    submission_count: '428',
    submission_ratio: 20
  },
  {
    submission: 'Guillotine Choke',
    year: 2019,
    submission_count: '932',
    submission_ratio: 13
  },
  {
    submission: 'Rear Naked Choke',
    year: 2019,
    submission_count: '2474',
    submission_ratio: 35
  },
  {
    submission: 'Guillotine Choke',
    year: 1999,
    submission_count: '78',
    submission_ratio: 8
  },
  {
    submission: 'Rear Naked Choke',
    year: 1996,
    submission_count: '77',
    submission_ratio: 25
  },
  {
    submission: 'Armbar',
    year: 2002,
    submission_count: '310',
    submission_ratio: 21
  },
  {
    submission: 'Armbar',
    year: 2025,
    submission_count: '28',
    submission_ratio: 20
  },
  {
    submission: 'Guillotine Choke',
    year: 2023,
    submission_count: '1055',
    submission_ratio: 13
  },
  {
    submission: 'Triangle Choke',
    year: 2020,
    submission_count: '215',
    submission_ratio: 7
  },
  {
    submission: 'Rear Naked Choke',
    year: 2002,
    submission_count: '305',
    submission_ratio: 20
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2005,
    submission_count: '53',
    submission_ratio: 2
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2016,
    submission_count: '251',
    submission_ratio: 4
  },
  {
    submission: 'Other',
    year: 2023,
    submission_count: '1943',
    submission_ratio: 18
  },
  {
    submission: 'Other',
    year: 2000,
    submission_count: '558',
    submission_ratio: 43
  },
  {
    submission: 'Other',
    year: 2015,
    submission_count: '1470',
    submission_ratio: 18
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2013,
    submission_count: '313',
    submission_ratio: 4
  },
  {
    submission: 'Armbar',
    year: 2013,
    submission_count: '1487',
    submission_ratio: 20
  },
  {
    submission: 'Guillotine Choke',
    year: 2010,
    submission_count: '950',
    submission_ratio: 14
  },
  {
    submission: 'Triangle Choke',
    year: 2025,
    submission_count: '13',
    submission_ratio: 9
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2014,
    submission_count: '292',
    submission_ratio: 4
  },
  {
    submission: 'Other',
    year: 2005,
    submission_count: '943',
    submission_ratio: 33
  },
  {
    submission: 'Rear Naked Choke',
    year: 2016,
    submission_count: '2454',
    submission_ratio: 35
  },
  {
    submission: 'Guillotine Choke',
    year: 2012,
    submission_count: '1044',
    submission_ratio: 14
  },
  {
    submission: 'Other',
    year: 1998,
    submission_count: '285',
    submission_ratio: 40
  },
  {
    submission: 'Rear Naked Choke',
    year: 2011,
    submission_count: '2097',
    submission_ratio: 32
  },
  {
    submission: 'Triangle Choke',
    year: 2005,
    submission_count: '222',
    submission_ratio: 8
  },
  {
    submission: 'Guillotine Choke',
    year: 2007,
    submission_count: '544',
    submission_ratio: 11
  },
  {
    submission: 'Guillotine Choke',
    year: 2021,
    submission_count: '636',
    submission_ratio: 12
  },
  {
    submission: 'Other',
    year: 2017,
    submission_count: '1546',
    submission_ratio: 17
  },
  {
    submission: 'Triangle Choke',
    year: 2018,
    submission_count: '491',
    submission_ratio: 7
  },
  {
    submission: 'Other',
    year: 2024,
    submission_count: '1903',
    submission_ratio: 22
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2022,
    submission_count: '294',
    submission_ratio: 4
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2004,
    submission_count: '47',
    submission_ratio: 2
  },
  {
    submission: 'Armbar',
    year: 2021,
    submission_count: '690',
    submission_ratio: 13
  },
  {
    submission: 'Triangle Choke',
    year: 2008,
    submission_count: '407',
    submission_ratio: 8
  },
  {
    submission: 'Guillotine Choke',
    year: 1996,
    submission_count: '26',
    submission_ratio: 8
  },
  {
    submission: 'Other',
    year: 2006,
    submission_count: '1335',
    submission_ratio: 29
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2019,
    submission_count: '219',
    submission_ratio: 3
  },
  {
    submission: 'Rear Naked Choke',
    year: 2022,
    submission_count: '2650',
    submission_ratio: 39
  },
  {
    submission: 'Guillotine Choke',
    year: 1995,
    submission_count: '17',
    submission_ratio: 8
  },
  {
    submission: 'Triangle Choke',
    year: 1997,
    submission_count: '28',
    submission_ratio: 6
  },
  {
    submission: 'Armbar',
    year: 2015,
    submission_count: '1352',
    submission_ratio: 19
  },
  {
    submission: 'Triangle Choke',
    year: 1999,
    submission_count: '48',
    submission_ratio: 5
  },
  {
    submission: 'Armbar',
    year: 2010,
    submission_count: '1200',
    submission_ratio: 18
  },
  {
    submission: 'Armbar',
    year: 2012,
    submission_count: '1435',
    submission_ratio: 19
  },
  {
    submission: 'Rear Naked Choke',
    year: 2023,
    submission_count: '3242',
    submission_ratio: 39
  },
  {
    submission: 'Armbar',
    year: 1996,
    submission_count: '39',
    submission_ratio: 13
  },
  {
    submission: 'Triangle Choke',
    year: 2011,
    submission_count: '602',
    submission_ratio: 9
  },
  {
    submission: 'Armbar',
    year: 1997,
    submission_count: '54',
    submission_ratio: 12
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 1995,
    submission_count: '5',
    submission_ratio: 2
  },
  {
    submission: 'Triangle Choke',
    year: 2019,
    submission_count: '512',
    submission_ratio: 7
  },
  {
    submission: 'Other',
    year: 2011,
    submission_count: '1563',
    submission_ratio: 21
  },
  {
    submission: 'Rear Naked Choke',
    year: 2024,
    submission_count: '3098',
    submission_ratio: 38
  },
  {
    submission: 'Guillotine Choke',
    year: 2005,
    submission_count: '240',
    submission_ratio: 9
  },
  {
    submission: 'Armbar',
    year: 2016,
    submission_count: '1268',
    submission_ratio: 18
  },
  {
    submission: 'Armbar',
    year: 1999,
    submission_count: '203',
    submission_ratio: 21
  },
  {
    submission: 'Other',
    year: 1999,
    submission_count: '470',
    submission_ratio: 45
  },
  {
    submission: 'Other',
    year: 2014,
    submission_count: '1480',
    submission_ratio: 18
  },
  {
    submission: 'Rear Naked Choke',
    year: 2001,
    submission_count: '197',
    submission_ratio: 15
  },
  {
    submission: 'Armbar',
    year: 1995,
    submission_count: '35',
    submission_ratio: 16
  },
  {
    submission: 'Guillotine Choke',
    year: 2009,
    submission_count: '800',
    submission_ratio: 14
  },
  {
    submission: 'Other',
    year: 2001,
    submission_count: '610',
    submission_ratio: 44
  },
  {
    submission: 'Triangle Choke',
    year: 2001,
    submission_count: '79',
    submission_ratio: 6
  },
  {
    submission: 'Guillotine Choke',
    year: 2015,
    submission_count: '982',
    submission_ratio: 14
  },
  {
    submission: 'Armbar',
    year: 2008,
    submission_count: '907',
    submission_ratio: 19
  },
  {
    submission: 'Guillotine Choke',
    year: 2017,
    submission_count: '969',
    submission_ratio: 14
  },
  {
    submission: 'Armbar',
    year: 2005,
    submission_count: '525',
    submission_ratio: 20
  },
  {
    submission: 'Triangle Choke',
    year: 2010,
    submission_count: '624',
    submission_ratio: 9
  },
  {
    submission: 'Armbar',
    year: 2023,
    submission_count: '1018',
    submission_ratio: 12
  },
  {
    submission: 'Guillotine Choke',
    year: 2016,
    submission_count: '1003',
    submission_ratio: 15
  },
  {
    submission: 'Armbar',
    year: 2011,
    submission_count: '1230',
    submission_ratio: 18
  },
  {
    submission: 'Triangle Choke',
    year: 2017,
    submission_count: '582',
    submission_ratio: 8
  },
  {
    submission: 'Armbar',
    year: 2007,
    submission_count: '928',
    submission_ratio: 19
  },
  {
    submission: 'Triangle Choke',
    year: 2014,
    submission_count: '635',
    submission_ratio: 9
  },
  {
    submission: 'Triangle Choke',
    year: 2012,
    submission_count: '660',
    submission_ratio: 9
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2025,
    submission_count: '8',
    submission_ratio: 6
  },
  {
    submission: 'Other',
    year: 2010,
    submission_count: '1543',
    submission_ratio: 19
  },
  {
    submission: 'Rear Naked Choke',
    year: 2014,
    submission_count: '2242',
    submission_ratio: 32
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2011,
    submission_count: '240',
    submission_ratio: 4
  },
  {
    submission: 'Guillotine Choke',
    year: 2002,
    submission_count: '142',
    submission_ratio: 9
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2012,
    submission_count: '308',
    submission_ratio: 4
  },
  {
    submission: 'Other',
    year: 1996,
    submission_count: '154',
    submission_ratio: 47
  },
  {
    submission: 'Rear Naked Choke',
    year: 2012,
    submission_count: '2336',
    submission_ratio: 32
  },
  {
    submission: 'Rear Naked Choke',
    year: 2020,
    submission_count: '977',
    submission_ratio: 34
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2006,
    submission_count: '71',
    submission_ratio: 2
  },
  {
    submission: 'Armbar',
    year: 2022,
    submission_count: '807',
    submission_ratio: 12
  },
  {
    submission: 'Guillotine Choke',
    year: 2014,
    submission_count: '964',
    submission_ratio: 14
  },
  {
    submission: 'Triangle Choke',
    year: 2013,
    submission_count: '641',
    submission_ratio: 8
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2007,
    submission_count: '114',
    submission_ratio: 2
  },
  {
    submission: 'Guillotine Choke',
    year: 2013,
    submission_count: '993',
    submission_ratio: 13
  },
  {
    submission: 'Rear Naked Choke',
    year: 2013,
    submission_count: '2466',
    submission_ratio: 32
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2020,
    submission_count: '113',
    submission_ratio: 4
  },
  {
    submission: 'Rear Naked Choke',
    year: 2007,
    submission_count: '1316',
    submission_ratio: 28
  },
  {
    submission: 'Triangle Choke',
    year: 2007,
    submission_count: '421',
    submission_ratio: 9
  },
  {
    submission: 'Rear Naked Choke',
    year: 2010,
    submission_count: '2192',
    submission_ratio: 32
  },
  {
    submission: 'Armbar',
    year: 2004,
    submission_count: '426',
    submission_ratio: 20
  },
  {
    submission: 'Other',
    year: 1995,
    submission_count: '108',
    submission_ratio: 42
  },
  {
    submission: 'Rear Naked Choke',
    year: 1999,
    submission_count: '160',
    submission_ratio: 16
  },
  {
    submission: 'Armbar',
    year: 2006,
    submission_count: '764',
    submission_ratio: 20
  },
  {
    submission: 'Other',
    year: 2002,
    submission_count: '631',
    submission_ratio: 37
  },
  {
    submission: 'Other',
    year: 1997,
    submission_count: '240',
    submission_ratio: 48
  },
  {
    submission: 'Rear Naked Choke',
    year: 2017,
    submission_count: '2474',
    submission_ratio: 35
  },
  {
    submission: 'Armbar',
    year: 2001,
    submission_count: '257',
    submission_ratio: 20
  },
  {
    submission: 'Rear Naked Choke',
    year: 1995,
    submission_count: '47',
    submission_ratio: 21
  },
  {
    submission: 'Guillotine Choke',
    year: 2000,
    submission_count: '82',
    submission_ratio: 7
  },
  {
    submission: 'Other',
    year: 2008,
    submission_count: '1481',
    submission_ratio: 28
  },
  {
    submission: 'Other',
    year: 2004,
    submission_count: '801',
    submission_ratio: 33
  },
  {
    submission: 'Other',
    year: 2016,
    submission_count: '1385',
    submission_ratio: 16
  },
  {
    submission: 'Other',
    year: 2012,
    submission_count: '1635',
    submission_ratio: 18
  },
  {
    submission: 'Other',
    year: 2007,
    submission_count: '1502',
    submission_ratio: 27
  },
  {
    submission: 'Rear Naked Choke',
    year: 2004,
    submission_count: '430',
    submission_ratio: 20
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 1999,
    submission_count: '13',
    submission_ratio: 1
  },
  {
    submission: 'Other',
    year: 2020,
    submission_count: '812',
    submission_ratio: 22
  },
  {
    submission: 'Guillotine Choke',
    year: 1997,
    submission_count: '27',
    submission_ratio: 6
  },
  {
    submission: 'Other',
    year: 2021,
    submission_count: '1478',
    submission_ratio: 24
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2002,
    submission_count: '22',
    submission_ratio: 1
  },
  {
    submission: 'Guillotine Choke',
    year: 2001,
    submission_count: '104',
    submission_ratio: 8
  },
  {
    submission: 'Triangle Choke',
    year: 2023,
    submission_count: '506',
    submission_ratio: 6
  },
  {
    submission: 'Armbar',
    year: 2017,
    submission_count: '1241',
    submission_ratio: 18
  },
  {
    submission: 'Guillotine Choke',
    year: 2008,
    submission_count: '592',
    submission_ratio: 12
  },
  {
    submission: 'Triangle Choke',
    year: 2015,
    submission_count: '624',
    submission_ratio: 9
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2015,
    submission_count: '274',
    submission_ratio: 4
  },
  {
    submission: 'Armbar',
    year: 2019,
    submission_count: '1086',
    submission_ratio: 15
  },
  {
    submission: 'Triangle Choke',
    year: 2002,
    submission_count: '102',
    submission_ratio: 7
  },
  {
    submission: 'Triangle Choke',
    year: 2006,
    submission_count: '314',
    submission_ratio: 8
  },
  {
    submission: 'Rear Naked Choke',
    year: 2008,
    submission_count: '1354',
    submission_ratio: 28
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 1997,
    submission_count: '5',
    submission_ratio: 1
  },
  {
    submission: 'Rear Naked Choke',
    year: 2005,
    submission_count: '631',
    submission_ratio: 24
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2001,
    submission_count: '21',
    submission_ratio: 2
  },
  {
    submission: 'Rear Naked Choke',
    year: 2000,
    submission_count: '173',
    submission_ratio: 15
  },
  {
    submission: 'Other',
    year: 2022,
    submission_count: '1742',
    submission_ratio: 22
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2023,
    submission_count: '477',
    submission_ratio: 6
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 1998,
    submission_count: '13',
    submission_ratio: 2
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2009,
    submission_count: '197',
    submission_ratio: 3
  },
  {
    submission: 'Triangle Choke',
    year: 1996,
    submission_count: '7',
    submission_ratio: 2
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2017,
    submission_count: '255',
    submission_ratio: 4
  },
  {
    submission: 'Triangle Choke',
    year: 2022,
    submission_count: '456',
    submission_ratio: 7
  },
  {
    submission: 'Armbar',
    year: 2018,
    submission_count: '1054',
    submission_ratio: 16
  },
  {
    submission: 'Armbar',
    year: 2020,
    submission_count: '391',
    submission_ratio: 14
  },
  {
    submission: 'Other',
    year: 2009,
    submission_count: '1423',
    submission_ratio: 22
  },
  {
    submission: 'Triangle Choke',
    year: 2000,
    submission_count: '59',
    submission_ratio: 5
  },
  {
    submission: 'Triangle Choke',
    year: 2003,
    submission_count: '143',
    submission_ratio: 7
  },
  {
    submission: 'Guillotine Choke',
    year: 2022,
    submission_count: '832',
    submission_ratio: 12
  },
  {
    submission: 'Other',
    year: 2025,
    submission_count: '28',
    submission_ratio: 21
  },
  {
    submission: 'Guillotine Choke',
    year: 2020,
    submission_count: '375',
    submission_ratio: 13
  },
  {
    submission: 'Armbar',
    year: 2014,
    submission_count: '1264',
    submission_ratio: 18
  },
  {
    submission: 'Rear Naked Choke',
    year: 2015,
    submission_count: '2376',
    submission_ratio: 33
  },
  {
    submission: 'Guillotine Choke',
    year: 1998,
    submission_count: '46',
    submission_ratio: 7
  },
  {
    submission: 'Triangle Choke',
    year: 2021,
    submission_count: '360',
    submission_ratio: 7
  },
  {
    submission: 'Rear Naked Choke',
    year: 1998,
    submission_count: '129',
    submission_ratio: 20
  },
  {
    submission: 'Guillotine Choke',
    year: 2018,
    submission_count: '931',
    submission_ratio: 14
  },
  {
    submission: 'Triangle Choke',
    year: 2016,
    submission_count: '555',
    submission_ratio: 8
  },
  {
    submission: 'Guillotine Choke',
    year: 2003,
    submission_count: '165',
    submission_ratio: 8
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2010,
    submission_count: '240',
    submission_ratio: 4
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2000,
    submission_count: '13',
    submission_ratio: 1
  },
  {
    submission: 'Triangle Choke',
    year: 2024,
    submission_count: '546',
    submission_ratio: 7
  },
  {
    submission: 'Guillotine Choke',
    year: 2006,
    submission_count: '404',
    submission_ratio: 10
  },
  {
    submission: 'Rear Naked Choke',
    year: 2018,
    submission_count: '2262',
    submission_ratio: 34
  },
  {
    submission: 'Guillotine Choke',
    year: 2025,
    submission_count: '15',
    submission_ratio: 10
  },
  {
    submission: 'Rear Naked Choke',
    year: 2003,
    submission_count: '360',
    submission_ratio: 17
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2008,
    submission_count: '103',
    submission_ratio: 2
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2018,
    submission_count: '231',
    submission_ratio: 3
  },
  {
    submission: 'Triangle Choke',
    year: 1998,
    submission_count: '26',
    submission_ratio: 4
  },
  {
    submission: 'Rear Naked Choke',
    year: 2025,
    submission_count: '51',
    submission_ratio: 36
  },
  {
    submission: 'Armbar',
    year: 1998,
    submission_count: '147',
    submission_ratio: 23
  },
  {
    submission: 'Other',
    year: 2003,
    submission_count: '984',
    submission_ratio: 45
  },
  {
    submission: 'Guillotine Choke',
    year: 2011,
    submission_count: '937',
    submission_ratio: 14
  },
  {
    submission: 'Other',
    year: 2013,
    submission_count: '1713',
    submission_ratio: 19
  },
  {
    submission: 'Rear Naked Choke',
    year: 2009,
    submission_count: '1872',
    submission_ratio: 32
  },
  {
    submission: 'Armbar',
    year: 2009,
    submission_count: '1094',
    submission_ratio: 19
  },
  {
    submission: 'Other',
    year: 2018,
    submission_count: '1701',
    submission_ratio: 18
  },
  {
    submission: 'Arm-Triangle Choke',
    year: 2021,
    submission_count: '240',
    submission_ratio: 5
  },
  {
    submission: 'Triangle Choke',
    year: 1995,
    submission_count: '4',
    submission_ratio: 2
  },
  {
    submission: 'Triangle Choke',
    year: 2004,
    submission_count: '186',
    submission_ratio: 9
  },
  {
    submission: 'Armbar',
    year: 2000,
    submission_count: '229',
    submission_ratio: 21
  },
  {
    submission: 'Rear Naked Choke',
    year: 2006,
    submission_count: '1009',
    submission_ratio: 26
  },
  {
    submission: 'Armbar',
    year: 2024,
    submission_count: '1169',
    submission_ratio: 14
  }
]

// 1) Extract unique years for the x-axis
const years = Array.from(new Set(chartData.map((d) => d.year))).sort()

// 2) Extract unique submissions to create separate lines
const submissionNames = Array.from(new Set(chartData.map((d) => d.submission)))

// 3) Build series: for each submission, get its submission_ratio in the order of years
const seriesData = submissionNames.map((sub) => {
  // Create a mapping from year -> ratio for this submission
  const ratioByYear = {}
  chartData
    .filter((item) => item.submission === sub)
    .forEach((item) => {
      ratioByYear[item.year] = item.submission_ratio
    })

  return {
    name: sub,
    type: 'line',
    data: years.map((y) => ratioByYear[y] ?? 0) // 0 (or null) if data doesn't exist for that year
  }
})

const chartOption = ref({
  tooltip: {
    trigger: 'axis',
    formatter: (params) => {
      // Each `params` element is for one line at the current X (year)
      // You can customize the tooltip text as you like
      let tooltipText = `Year: ${params[0].name}<br/>`
      params.forEach((param) => {
        tooltipText += `
            <strong>${param.seriesName}</strong>: ${param.value}%
            <br/>
          `
      })
      return tooltipText
    }
  },
  legend: {
    data: submissionNames
  },
  xAxis: {
    type: 'category',
    data: years
  },
  yAxis: {
    type: 'value',
    name: 'Submission Ratio (%)'
  },
  series: seriesData
})
</script>
