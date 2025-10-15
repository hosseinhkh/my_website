import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import '@/assets/scss/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createBootstrap } from 'bootstrap-vue-next'
import VueGtag from 'vue-gtag-next'     // ✅ GA4 plugin for Vue 3

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(createBootstrap())

// --- Google Analytics (GA4) via vue-gtag-next ---
app.use(VueGtag, {
  property: {
    id: 'G-3LJHQ6JQBP',  // ← replace with your GA4 Measurement ID
  },
  appName: 'HosseinAI',              // optional: helps identify source in GA DebugView
  pageTrackerScreenviewEnabled: true // auto-track SPA route changes
}, router)
// -------------------------------------------------

app.mount('#app')
