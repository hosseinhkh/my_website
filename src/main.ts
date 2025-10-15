import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import VueGtag from 'vue-gtag-next'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())

// --- Google Analytics (GA4) via vue-gtag-next ---
app.use(VueGtag, {
  property: {
    id: 'G-3LJHQ6JQBP',              // ← your GA4 Measurement ID
  },
  appName: 'HosseinAI',              // optional: appears in GA DebugView
  pageTrackerScreenviewEnabled: true, // auto-track SPA route changes
  router,                             // ✅ include router INSIDE the config
})
// -------------------------------------------------

app.mount('#app')
