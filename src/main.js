import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Nora from '@primevue/themes/nora'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{red.50}',
      100: '{red.100}',
      200: '{red.200}',
      300: '{red.300}',
      400: 'rgb(90, 40, 40)', // Custom color for primary theme
      500: 'rgb(70, 30, 30)', // Custom dark red color for primary
      600: '{red.600}',
      700: '{red.700}',
      800: '{red.800}',
      900: '{red.900}',
      950: '{red.950}'
    }
  },
  components: {
    datatable: {
      sortIconColor: '{red.50}' // Inactive sort icon color
    }
  }
})

const app = createApp(App)
app.use(PrimeVue, {
  // Use the custom theme configuration with MyPreset
  theme: {
    preset: MyPreset,
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
