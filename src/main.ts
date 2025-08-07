import { createApp } from 'vue'
import './style.css'
import './siteStyles.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useApiDataStore } from './stores/apiData'

async function bootstrap() {
  const app = createApp(App)
  const pinia = createPinia()
  app.use(pinia)

  const apiStore = useApiDataStore()
  await apiStore.fetchData()
  await apiStore.fetchLogoLineData()

  app.mount('#app')
}

bootstrap()
