<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { useFightersStore } from '@/stores/fighters'
const fightersStore = useFightersStore()
const lastUpdate = computed(() => fightersStore.date || 'Date not available')
</script>

<template>
  <header class="header">
    <div class="title">MMA ELO</div>
    <p class="last-update">
      Last Updated On: <em>{{ lastUpdate }}</em>
    </p>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-link">Main List</RouterLink>
      <RouterLink to="/ufc-rankings" class="nav-link">UFC Rankings</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
  </header>
  <main class="main-content">
    <RouterView />
  </main>
  <footer class="footer"></footer>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e1e1e;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: RGB(185, 28, 28);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: #e0e0e0;
  text-decoration: none;
  gap: 1rem;
}

.nav-link:hover {
  color: RGB(239, 68, 68);
}

.last-update {
  position: absolute;
  top: 1.5rem;
  left: 15rem;
  color: #b9b9b9;
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 1rem;
  }

  .nav_link,
  .nav-links {
    font-size: 0.7rem;
    gap: 0.5rem;
  }
  .last-update {
    display: none;
  }
}
</style>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
.footer {
  height: 10rem;
}
</style>
