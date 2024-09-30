import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue, {
  // Default theme configuration
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: '.my-app-dark',
      cssLayer: false
    }
  }
})
app.use(createPinia())
app.use(router)

app.mount('#app')
