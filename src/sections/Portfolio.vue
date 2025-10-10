<template>
  <div id="projects">
    <div class="testimonial-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="testimonial-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="900">
                <img :src="subLogo" alt="" />My Portfolio
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">
                From <span>Labs</span> to <span>Life</span>
              </h2>
            </div>
            <div class="space60" />
          </BCol>


          <!-- Alternating big/small layout: 7/5/5/7 repeat -->
          <template v-for="(p, i) in projects" :key="p.id">
            <BCol
              :lg="isLarge(i) ? 7 : 5"
              md="6"
              data-aos="zoom-in"
              :data-aos-duration="900 + i * 100"
            >
              <div class="testimonial-boxarea">
                <h4 class="proj-title">{{ p.title }}</h4>
                <div class="space20" />
                <p class="proj-summary">{{ p.summary }}</p>
              </div>
            </BCol>
          </template>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type Project = { id: string; title: string; summary: string }

const projects: Project[] = [
  {
    id: 'llm-privacy-filter',
    title: 'LLM Privacy Filter (Tokenizer-Level Redaction)',
    summary:
      'Tokenizer-aware masking and coreference repair for prompts/outputs. High-recall privacy with low hallucination and real-time latency.',
  },
  {
    id: 'vlm-robustness-benchmark',
    title: 'VLM Robustness Benchmark (Vision–Language Attacks)',
    summary:
      'Patch, noise, and physical attack evaluation for VLMs. Quantifies grounding drift and instruction following under stress.',
  },
  {
    id: 'rt-purification-edge',
    title: 'Real-Time Purification on Edge',
    summary:
      'Lightweight purification that removes adversarial artifacts while preserving accuracy. Optimized for Jetson-class devices.',
  },
  {
    id: 'genai-purification',
    title: 'Generative AI for Defense (Diffusion-Based Purification)',
    summary:
      'Diffusion priors cleanse adversarial noise without over-smoothing semantics. Ablation-driven balance of robustness and fidelity.',
  },
  {
    id: 'robotic-perception',
    title: 'Robotics Perception Stack (VLM + CV)',
    summary:
      'Multimodal perception for robots—scene understanding, grounding, and instruction following by fusing VLM features with classic CV.',
  },
  {
    id: 'skynet-vlm-robotics',
    title: 'SKYNET',
    summary:
      'Developed a perception and reasoning stack for embodied robots using VLMs, enabling robust understanding under adversarial and real-world noise.',
  },

]

// 7/5/5/7 repeating pattern
const isLarge = (i: number) => i % 4 === 0 || i % 4 === 3
</script>

<style scoped>
/* Keep your theme’s testimonial styles; just a tiny tweak for titles */
.proj-title { font-size: 20px; font-weight: 600; color: #fff; }
.proj-summary { color: rgba(255,255,255,.86); line-height: 1.6; }
</style>
