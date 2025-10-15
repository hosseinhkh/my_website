<template>
  <NavBar />

  <!-- Unchanged layout; only toggles a class in IG -->
  <div class="main-hero-area5 parallaxie" :class="{ 'no-inline-video': isIG }">
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

const isIG = ref(false)

function isInstagramInApp() {
  const ua = navigator.userAgent || ''
  return /Instagram|FBAN|FBAV/i.test(ua)
}

onMounted(() => {
  // Only toggle fallback inside Instagram/FB in-app browsers
  isIG.value = isInstagramInApp()
})
</script>

<style scoped>
/* Do NOT change your video styling here. Keep whatever you had originally.
   We only control the IG fallback appearance. */

.no-inline-video {
  background-color: #1e1e1e; /* dark gray fallback */
}

.no-inline-video .body-overlay {
  display: none !important; /* hide video only in IG */
}
</style>
