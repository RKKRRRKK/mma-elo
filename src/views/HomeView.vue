<template>
  <main class="wrapper-main">
    <TheLadder />
    <div class="lower-tables">
      <TheCountriesLadder />
      <ThePlacesLadder />
      <TheTeamLadder />
    </div>
  </main>
</template>

<script setup>
import TheLadder from '../components/TheLadder.vue'
import TheCountriesLadder from '../components/TheCountriesLadder.vue'
import TheTeamLadder from '../components/TheTeamLadder.vue'
import ThePlacesLadder from '../components/ThePlacesLadder.vue'
</script>

<style scoped>
.wrapper-main {
  height: 100vh;
  width: 100vw;
}

.lower-tables {
  margin-top: 10rem;
  gap: 2rem;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  height: 50rem;
  width: 100vw;
  margin-bottom: 15rem;
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .lower-tables {
    transform: scale(0.7);
    margin-top: -10rem;
    margin-left: -2rem;
  }
}
</style>
