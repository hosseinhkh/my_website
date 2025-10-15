<template>
  <NavBar />

  <!-- Fallback class toggles ONLY when we decide to hide video -->
  <div class="main-hero-area5 parallaxie" :class="{ 'no-video': fallback }">
    <video ref="bgVideo" class="body-overlay" muted autoplay loop>
      <source src="/video5.mp4" type="video/mp4" />
    </video>

    <BContainer>
      <BRow>
        <BCol lg="4"><ContactBox /></BCol>
        <BCol lg="8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <Hero />
            <div class="space50" />
            <About />
            <Service />
            <div class="space50" />
            <Skills />
            <div class="space30" />
            <Portfolio />
            <div class="space30" />
            <Blogs />
            <div class="space60" />
            <Contact />
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>

  <BackToTop />
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
import ContactBox from '@/sections/ContactBox.vue'
import Hero from '@/sections/Hero.vue'
import About from '@/sections/About.vue'
import Service from '@/sections/Service.vue'
import Skills from '@/sections/Skills.vue'
import Portfolio from '@/sections/Portfolio.vue'
import Blogs from '@/sections/Blogs.vue'
import Contact from '@/sections/Contact.vue'
import BackToTop from '@/components/BackToTop.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

const route = useRoute()
const bgVideo = ref<HTMLVideoElement | null>(null)
const fallback = ref(false)

/* --- Helpers --- */
const igfix = computed(() => {
  // supports ?igfix, ?igfix=1, ?igfix=true
  const q = route.query.igfix
  return q === '' || q === '1' || q === 'true'
})
function ua() { return navigator.userAgent || '' }
function isMobile() { return /Mobi|Android|iPhone|iPad|iPod/i.test(ua()) }
function isKnownMobileBrowser() {
  const s = ua()
  const iOSChrome  = /CriOS/i.test(s)
  const iOSFirefox = /FxiOS/i.test(s)
  const iOSEdge    = /EdgiOS/i.test(s)
  const iOSOpera   = /OPiOS/i.test(s)
  const iOSSafari  = /Safari/i.test(s) && /Version\/\d+/i.test(s) && !(iOSChrome||iOSFirefox||iOSEdge||iOSOpera)
  const andChrome  = /Chrome\/\d+/i.test(s) && /Android/i.test(s)
  const andFirefox = /Firefox\/\d+/i.test(s) && /Android/i.test(s)
  const andEdge    = /EdgA\/\d+/i.test(s)
  const andSamsung = /SamsungBrowser\/\d+/i.test(s)
  const andOpera   = /OPR\/\d+/i.test(s)
  return iOSChrome || iOSFirefox || iOSEdge || iOSOpera || iOSSafari ||
    andChrome || andFirefox || andEdge || andSamsung || andOpera
}
async function tryAutoplayInline(video: HTMLVideoElement) {
  if (/iPhone|iPad|iPod/i.test(ua())) {
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
  }
  video.muted = true
  try {
    const p = video.play?.()
    if (p && typeof p.then === 'function') {
      await Promise.race([
        p,
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 1200)),
      ])
    }
    return true
  } catch {
    return false
  }
}

/* --- Logic --- */
onMounted(async () => {
  console.log('router.query:', route.query)
  const v = bgVideo.value
  if (!v) return

  // Rule:
  // If the link had ?igfix=1 AND we are on mobile AND the browser is NOT a known mobile browser,
  // treat it as an in-app/unknown webview → use dark-gray fallback.
  if (igfix.value && isMobile() && !isKnownMobileBrowser()) {
    fallback.value = true
    return
  }

  // Backstop: if autoplay fails anywhere, fallback gracefully.
  const ok = await tryAutoplayInline(v)
  if (!ok) fallback.value = true
})
</script>

<style scoped>
/* keep your existing video styling as-is to avoid desktop pixelation */

/* Only active when fallback is on (unknown mobile webview with ?igfix=1, or autoplay failed) */
.no-video { background-color: #1e1e1e; }  /* dark gray */
.no-video .body-overlay { display: none !important; }
</style>
