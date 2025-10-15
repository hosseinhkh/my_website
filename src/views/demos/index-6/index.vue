<template>
  <NavBar />

  <!-- Adds a fallback class ONLY when IG is detected or autoplay fails -->
  <div class="main-hero-area5 parallaxie" :class="{ 'ig-no-video': showFallback }">
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

const showFallback = ref(false)
const bgVideo = ref<HTMLVideoElement | null>(null)

function isInstagramInApp() {
  const ua = navigator.userAgent || ''
  // IG and FB in-app browser tokens per Meta docs
  return /Instagram|FBAN|FBAV/i.test(ua)
}

async function tryAutoplayInline(video: HTMLVideoElement) {
  // iOS inline hint (safe to add at runtime; ignored elsewhere)
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent || '')) {
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')
  }
  video.muted = true
  try {
    const p = video.play?.()
    if (p && typeof p.then === 'function') {
      // If IG stalls play() promise, time out and treat as failure
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
  // If UA says IG, fallback immediately (current IG blocks inline/autoplay)
  if (isInstagramInApp()) {
    showFallback.value = true
    return
  }
  // Backstop: if autoplay actually fails, also fallback
  const ok = await tryAutoplayInline(v)
  if (!ok) showFallback.value = true
})
</script>

<style scoped>
/* Do not change any of your existing video sizing to avoid pixelation */

.ig-no-video {
  background-color: #1e1e1e; /* dark gray fallback for IG */
}

.ig-no-video .body-overlay {
  display: none !important; /* hide video only when fallback is active */
}
</style>
