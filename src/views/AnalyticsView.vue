<template>
  <div class="analytics">
    <h1 class="title">Soon...</h1>
    <p>
      Most active fighter per last 12 months (in top 1000). Running graph of fastest growing ELO.
      Dashboard graphs: donut distribution of KO/sub/decision, stacked bar over time normalized
      decision vs finish, stacked bar over time normalized sub vs KO, line charts filterable over
      time (ELO per fighter), most active over last 12 months table, promotions comparison years of
      inactivity, and a lot more...
    </p>
  </div>
</template>

<style scoped>
.analytics {
  padding: 1rem;
  color: gray;
  text-align: center; /* optional */
}

.title {
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: bold;
}

p {
  text-align: center;
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
