<template>
  <NavBar />

  <!-- Only adds a class in IG; everywhere else unchanged -->
  <div class="main-hero-area5 parallaxie" :class="{ 'ig-fallback': isIG }">
    <video class="body-overlay" muted autoplay loop>
      <source src="/video5.mp4" type="video/mp4" />
    </video>

    <BContainer>
      <BRow>
        <BCol lg="4">
          <ContactBox />
        </BCol>
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
import Testimonials from '@/sections/Testimonials.vue'
import Blogs from '@/sections/Blogs.vue'
import Contact from '@/sections/Contact.vue'
import BackToTop from '@/components/BackToTop.vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

const isIG = ref(false)

function isInstagramInApp() {
  const ua = navigator.userAgent || ''
  // Instagram and Facebook in-app browsers use these tokens
  return /Instagram|FBAN|FBAV/i.test(ua)
}

onMounted(() => {
  isIG.value = isInstagramInApp()
})
</script>

<style scoped>
/* Only affects Instagram in-app browser */
.ig-fallback .body-overlay {
  display: none !important;
}

/* Use a lightweight cover image exported from your video */
.ig-fallback {
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
}

/* (Optional, if not already in your global CSS)
.body-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
*/
</style>
