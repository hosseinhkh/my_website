<template>
  <div id="home">
    <div class="hero-heading-area heading1">
      <!-- Typing effect line -->
      <h5 data-aos="fade-left" data-aos-duration="800" class="typing-line">
        <img :src="subLogo" alt="" />
        <span ref="typingText"></span>
        <span class="cursor">|</span>
      </h5>

      <div class="space24" />
      <h1 data-aos="fade-left" data-aos-duration="900">Building Trustworthy</h1>

      <div class="space24" />
      <h1 class="head" data-aos="fade-left" data-aos-duration="1000">
        <span>LLMs</span> & <span>VLMs</span>
      </h1>


      <div class="space24" />
      <p data-aos="fade-left" data-aos-duration="1100">
        Amazon AI Fellow · UCLA Ph.D. Candidate — crafting intelligent systems that think, see, and defend themselves.
        My work bridges LLM reasoning and VLM perception with adversarial robustness, privacy, and speed.
      </p>

      <div class="arrow" data-aos="fade-left" data-aos-duration="1200">
        <a href="#">
          <img :src="elements1" alt="" class="elements1 keyframe5" />
          <img :src="arrow1" alt="" class="arrow1" />
        </a>

        <div class="images">
          <img :src="others1" alt="" />
          <p>
            10+ Publications · 2× Gold Medals <br />
            Former CTO · 15+ Years in Programming
          </p>
        </div>
      </div>

      <div class="space32" />
      <div class="main-btn-area" data-aos="fade-up" data-aos-duration="1200">
        <a href="#about">
          Discover More
          <span class="icon">
            <Icon icon="fa6-solid:arrow-left" />
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import elements1 from '@/assets/img/elements/elements1.png'
import arrow1 from '@/assets/img/icons/arrow1.svg'
import others1 from '@/assets/img/all-images/others/others1.png'
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'

const typingText = ref<HTMLElement | null>(null)
const text = "Hi, I’m Hossein — AI Security Researcher"
let i = 0

onMounted(() => {
  const el = typingText.value
  if (!el) return
  const interval = setInterval(() => {
    el.textContent = text.slice(0, i)
    i++
    if (i > text.length) clearInterval(interval)
  }, 60) // typing speed in ms per character
})
</script>

<style scoped>
/* blinking cursor */
.cursor {
  display: inline-block;
  margin-left: 3px;
  animation: blink 0.8s steps(1) infinite;
  color: #00e6c3; /* accent color */
  font-weight: bold;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
