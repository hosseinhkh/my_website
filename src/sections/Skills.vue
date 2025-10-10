<template>
  <div id="skills">
    <div class="skill-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="skill-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                My Skills
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">The Code Behind</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Robust <span>AI Systems</span>
              </h2>
            </div>

            <div class="space80" />
            <BRow>
              <BCol
                v-for="(item, idx) in skills"
                :key="idx"
                lg="4"
                md="6"
                data-aos="zoom-out"
                data-aos-duration="1000"
              >
                <div class="skill-boxarea">
                  <div class="icons gold-icon">
                    <img :src="item.image" alt="" />
                  </div>
                  <div class="space24" />
                  <!-- 👇 Changed from percentage to years -->
                  <h3 class="counter">{{ item.years }}+ yrs</h3>
                  <div class="space16" />
                  <p>{{ item.title }}</p>
                </div>
              </BCol>
            </BRow>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

import iconPyTorch from '@/assets/img/icons/tech/pytorch.svg'
import iconVision from '@/assets/img/icons/tech/vision-vlms.svg'
import iconLLMPrivacy from '@/assets/img/icons/tech/llm-privacy.svg'
import iconAdvML from '@/assets/img/icons/tech/adversarial-ml.svg'
import iconGenAI from '@/assets/img/icons/tech/genai.svg'
import iconRL from '@/assets/img/icons/tech/rl.svg'

type SkillType = { title: string; years: number; image: string }

const skills: SkillType[] = [
  { title: 'Python · PyTorch (Deep Learning Core)', years: 10, image: iconPyTorch },
  { title: 'Computer Vision · VLMs', years: 8, image: iconVision },
  { title: 'LLMs · NLP — Privacy & Safety', years: 5, image: iconLLMPrivacy },
  { title: 'Adversarial ML · Robustness', years: 6, image: iconAdvML },
  { title: 'Generative AI — Diffusion · Representation Learning', years: 7, image: iconGenAI },
  { title: 'Reinforcement Learning · Decision Models', years: 6, image: iconRL },
]
</script>

<style scoped>
.gold-icon img {
  filter: brightness(0) saturate(100%) invert(78%) sepia(46%) saturate(637%) hue-rotate(8deg)
  brightness(101%) contrast(95%);
}
/* this makes white SVGs turn goldish (#FFD166 tone)
   tweak hue-rotate for more yellow or amber feel */
</style>
