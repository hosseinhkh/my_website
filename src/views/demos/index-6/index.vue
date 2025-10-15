<template>
  <NavBar />

  <!-- Add 'no-video' only when we decide to disable video -->
  <div class="main-hero-area5 parallaxie" :class="{ 'no-video': disableVideo }">
    <!-- If disabled, this node never renders => no request to /video5.mp4 -->
    <video
      v-if="!disableVideo"
      class="body-overlay"
      autoplay
      muted
      loop
      preload="auto"
      :src="videoSrc"
    ></video>

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
import { ref } from 'vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'
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

/** ---- Compute once, before first render ---- **/
const disableVideo = ref(false)
const videoSrc = '/video5.mp4'

function isMobile(ua: string) {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(ua)
}

function isKnownMobileBrowser(ua: string) {
  // iOS
  const iOSChrome  = /CriOS/i.test(ua)
  const iOSFirefox = /FxiOS/i.test(ua)
  const iOSEdge    = /EdgiOS/i.test(ua)
  const iOSOpera   = /OPiOS/i.test(ua)
  const iOSSafari  = /Safari/i.test(ua) && /Version\/\d+/i.test(ua) && !(iOSChrome||iOSFirefox||iOSEdge||iOSOpera)
  // Android
  const andChrome  = /Chrome\/\d+/i.test(ua) && /Android/i.test(ua)
  const andFirefox = /Firefox\/\d+/i.test(ua) && /Android/i.test(ua)
  const andEdge    = /EdgA\/\d+/i.test(ua)
  const andSamsung = /SamsungBrowser\/\d+/i.test(ua)
  const andOpera   = /OPR\/\d+/i.test(ua)
  return iOSChrome || iOSFirefox || iOSEdge || iOSOpera || iOSSafari ||
    andChrome || andFirefox || andEdge || andSamsung || andOpera
}

if (typeof window !== 'undefined') {
  // Read query safely on first render
  const params = new URLSearchParams(window.location.search)
  const hasFlag = params.has('igfix') && params.get('igfix') !== '0' // supports ?igfix or ?igfix=1/true
  const ua = navigator.userAgent || ''

  // Rule: only disable when flag is set AND we're on mobile AND browser is not a well-known one
  // (i.e., likely an in-app/unknown webview such as Instagram).
  if (hasFlag && isMobile(ua) && !isKnownMobileBrowser(ua)) {
    disableVideo.value = true
  }
}
</script>

<style scoped>
/* Keep whatever original video sizing you had. Do NOT add object-fit if it caused pixelation. */

/* When disabled, show a dark-gray background */
.no-video {
  background-color: #1e1e1e;
}

/* Hide the video only when disabled (the <video> is not rendered anyway, but this is harmless) */
.no-video .body-overlay {
  display: none !important;
}
</style>
