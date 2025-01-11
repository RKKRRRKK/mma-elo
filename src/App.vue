<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed } from 'vue'
import { useFightersStore } from '@/stores/fighters'

const fightersStore = useFightersStore()

const formattedDate = computed(() => {
  if (fightersStore.date && fightersStore.date.length > 0) {
    const { month, day, year, name } = fightersStore.date[0]
    return `${month} ${day} ${year} (Event: ${name})`
  }
  return 'Date not available'
})

const formattedStatus = computed(() => {
  if (fightersStore.status && fightersStore.status.length > 0) {
    const { count_to_come, count_empty, count_new } = fightersStore.status[0]
    return `(Empty Pages ${count_empty} | Unannounced ${count_to_come} | New Fighters ${count_new})`
  }
  return '(Status not available)'
})

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const startX = ref(0)
const handleTouchStart = (e) => {
  if (e.touches.length > 0) {
    startX.value = e.touches[0].clientX
  }
}
const handleTouchMove = (e) => {}
const handleTouchEnd = (e) => {
  if (e.changedTouches.length > 0) {
    const endX = e.changedTouches[0].clientX
    const diffX = endX - startX.value
    if (diffX > 50) {
      isMenuOpen.value = false
    }
  }
}

const closeMenuOutside = () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}
</script>

<template>
  <header class="header">
    <div class="title">MMA ELO</div>
    <button class="menu-toggle" :class="{ 'is-open': isMenuOpen }" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <div class="update-status">
      <p class="last-update">
        Last Updated On: <em>{{ formattedDate }}</em>
      </p>
      <p class="status">{{ formattedStatus }}</p>
    </div>
    <nav
      :class="['nav-links', { 'is-open': isMenuOpen }]"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <RouterLink to="/" class="nav-link">Main List</RouterLink>
      <RouterLink to="/ufc-rankings" class="nav-link">UFC Leaderboards</RouterLink>
      <RouterLink to="/analytics" class="nav-link-analytics">Analytics</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
  </header>
  <div :class="{ 'wrap-blur': isMenuOpen }" @click="closeMenuOutside">
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer"></footer>
  </div>
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
  font-size: 2.75rem;
  font-weight: bold;
  color: RGB(185, 28, 28);
  text-shadow:
    0.5px 0 0 rgb(217, 161, 161),
    0 1px 0 rgb(217, 161, 161),
    -1px 0 0 rgb(217, 161, 161),
    0 -1px 0 rgb(217, 161, 161);
}

.nav-links {
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
}

.nav-link,
.nav-link-analytics {
  color: #e0e0e0;
  text-decoration: none;
}

.nav-link-analytics {
  color: #aaaaaa97;
}

.nav-link:hover {
  color: RGB(239, 68, 68);
  font-weight: bold;
}

.nav-link:focus {
  color: RGB(239, 68, 68);
  font-weight: bold;
}

.update-status {
  position: absolute;
  top: 1.5rem;
  left: 15rem;
  color: #b9b9b9;
}

.last-update {
  margin: 0;
}

.status {
  margin: 0;
}

.wrap-blur {
  filter: blur(8px);
  transition: all 0.33s ease-in-out;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 25px;
  height: 25px;
}

.menu-toggle .bar {
  display: block;
  position: absolute;
  width: 140%;
  height: 4px;
  margin: -0.1rem auto;
  background-color: #dcd6d6;
  transition: all 0.3s ease-in-out;
}

.menu-toggle .bar:nth-child(1) {
  top: 0px;
}
.menu-toggle .bar:nth-child(2) {
  top: 10px;
}
.menu-toggle .bar:nth-child(3) {
  top: 20px;
}

.menu-toggle.is-open .bar:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
  z-index: 99999;
}
.menu-toggle.is-open .bar:nth-child(2) {
  opacity: 0;
  z-index: 99999;
}
.menu-toggle.is-open .bar:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
  z-index: 99999;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .last-update,
  .status {
    display: none;
  }

  .menu-toggle {
    display: inline-block;
  }

  .nav-links {
    display: none;
  }

  .nav-links.is-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-color: #000000;
    opacity: 0.6;
    z-index: 999;
    padding: 0.75rem;
    margin-top: 0;
    padding-top: 4rem;
    gap: 1.5rem;
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
