<template>
  <NavBar />

  <!-- Fallback only activates when the rule below says so -->
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
import { ref, onMounted } from 'vue'
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

const bgVideo = ref<HTMLVideoElement | null>(null)
const fallback = ref(false)

/** --- Helpers --- **/
function getUA() { return navigator.userAgent || '' }

function hasIGFixFlag() {
  try {
    const sp = new URLSearchParams(window.location.search)
    return sp.has('igfix') && sp.get('igfix') !== '0'
  } catch { return false }
}

function isMobile() {
  const ua = getUA()
  return /Mobi|Android|iPhone|iPad|iPod/i.test(ua)
}

/** Detect “well-known” browsers so the flag won’t disable video there */
function isKnownMobileBrowser() {
  const ua = getUA()

  // iOS variants
  const iOSChrome   = /CriOS/i.test(ua)
  const iOSFirefox  = /FxiOS/i.test(ua)
  const iOSEdge     = /EdgiOS/i.test(ua)
  const iOSOpera    = /OPiOS/i.test(ua)
  // Rough Mobile Safari check: has Safari + Version but not the other iOS browsers
  const iOSSafari   = /Safari/i.test(ua) && /Version\/\d+/i.test(ua) && !(iOSChrome||iOSFirefox||iOSEdge||iOSOpera)

  // Android variants
  const andChrome   = /Chrome\/\d+/i.test(ua) && /Android/i.test(ua)
  const andFirefox  = /Firefox\/\d+/i.test(ua) && /Android/i.test(ua)
  const andEdge     = /EdgA\/\d+/i.test(ua)
  const andSamsung  = /SamsungBrowser\/\d+/i.test(ua)
  const andOpera    = /OPR\/\d+/i.test(ua)

  return iOSChrome || iOSFirefox || iOSEdge || iOSOpera || iOSSafari ||
    andChrome || andFirefox || andEdge || andSamsung || andOpera
}

/** Try autoplay inline; if it hangs or fails, we’ll fallback */
async function tryAutoplayInline(video: HTMLVideoElement) {
  // iOS inline hints added at runtime only
  if (/iPhone|iPad|iPod/i.test(getUA())) {
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

onMounted(async () => {
  const v = bgVideo.value
  if (!v) return

  const flag = hasIGFixFlag()
  const mobile = isMobile()
  const known = isKnownMobileBrowser()

  // Rule:
  // - If the URL has igfix=1 AND we're on mobile AND browser is NOT known → assume IG-like WebView → fallback.
  // - Else, try to play; if it fails, fallback anyway.
  if (flag && mobile && !known) {
    fallback.value = true
    return
  }

  const ok = await tryAutoplayInline(v)
  if (!ok) fallback.value = true
})
</script>

<style scoped>
/* Keep your original video sizing — no changes here to avoid pixelation */

/* Only used when fallback is active (IG-like webviews or autoplay failure) */
.no-video { background-color: #1e1e1e; }  /* dark gray */
.no-video .body-overlay { display: none !important; }
</style>
