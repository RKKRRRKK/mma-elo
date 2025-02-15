<template>
  <h1 class="analytics">Dashboard</h1>
  <!-- <div class="analytics">
    <h1 class="title">In Progress...</h1>
    <p>
      Most active fighter per last 12 months (in top 1000). Running graph of fastest growing ELO.
      Dashboard graphs: donut distribution of KO/sub/decision, stacked bar over time normalized
      decision vs finish, stacked bar over time normalized sub vs KO, line charts filterable over
      time (ELO per fighter), most active over last 12 months table, promotions comparison years of
      inactivity, and a lot more...
    </p>
  </div> -->
  <div class="wrapper">
    <div class="one-column">
      <div class="finish">
        <FinishRatiosTime></FinishRatiosTime>
        <TheFinishRatios></TheFinishRatios>
      </div>
      <div class="subs">
        <SubmissionTypeTime></SubmissionTypeTime>
        <SubmissionType></SubmissionType>
      </div>
    </div>
    <div class="one-column">
      <PromotionsComparison></PromotionsComparison>
      <AnalyticTables class="tables"></AnalyticTables>
    </div>
  </div>
</template>

<script setup>
import FinishRatiosTime from '../components/Analytics/FinishRatiosTime.vue'
import TheFinishRatios from '../components/Analytics/FinishRatios.vue'
import SubmissionTypeTime from '@/components/Analytics/SubmissionTypeTime.vue'
import SubmissionType from '@/components/Analytics/SubmissionType.vue'
import PromotionsComparison from '@/components/Analytics/PromotionsComparison.vue'
import AnalyticTables from '@/components/Analytics/AnalyticTables.vue'
</script>

<style scoped>
.finish,
.subs {
  display: flex;
}
.analytics {
  padding: 1rem;
  color: gray;
  text-align: center; /* optional */
}

h1 {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
}

p {
  text-align: center;
}

.one-column {
  display: flex;
  flex-direction: column;
}

.wrapper {
  display: flex;
}

.tables {
  padding: 2rem;
}

@media (min-width: 768px) {
  .analytics {
    padding: 2rem;
  }
  p {
    text-align: left;
    padding: 25rem;
    padding-top: 2.5rem;
  }
  .title {
    font-size: 5rem;
    font-weight: bold;
  }
}

@media (min-width: 1024px) {
  .analytics {
    padding: 4rem;
  }
  p {
    text-align: left;
    padding: 25rem;
    padding-top: 2.5rem;
  }
  .title {
    font-size: 5rem;
    font-weight: bold;
  }
}
</style>
