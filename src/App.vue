<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <div class="title">MMA ELO</div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
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
  color: #ffffff;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1rem;
}

.nav-link:hover {
  color: #bb86fc;
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
