import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WeightsView from '../views/WeightsView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import { useStateStore } from '@/stores/state'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ufc-rankings',
      name: 'ufc-rankings',
      component: WeightsView
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const stateStore = useStateStore()
  stateStore.setPageLoaded(false)
  next()
})

export default router
