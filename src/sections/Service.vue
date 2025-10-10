<template>
  <div id="research">
    <div class="service-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="service-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                How I Build
              </h5>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Turning <span>Imagination</span> Into Reality
              </h2>
              <div class="space50" />

              <template v-for="(service, idx) in services" :key="idx">
                <div class="div" data-aos="fade-left" data-aos-duration="1000">
                  <div class="service-main-boxes">
                    <h4>{{ service.title }}</h4>
                    <div class="space24" />
                    <p>{{ service.description }}</p>
                  </div>
                </div>
                <div v-if="services.length - 1 !== idx" class="space30" />
              </template>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

type ServiceType = {
  title: string
  description: string
}

/* Same structure; copy only reframed as mindset/process */
const services: ServiceType[] = [
  {
    title: 'Think Deep, Build Simple',
    description:
      'Start from messy problems, ship clean systems. If a defense needs a manual, it isn’t finished.',
  },
  {
    title: 'Secure by Curiosity',
    description:
      'I test like an attacker, not a user. Break it, learn, harden; repeat until it holds under pressure.',
  },
  {
    title: 'Lead, Don’t Manage',
    description:
      'I’ve built and led product & research teams. Everyone ships, everyone learns. Velocity with standards.',
  },
  {
    title: 'Code Is My Canvas',
    description:
      'From PyTorch and CUDA to backend and UI, I think in code. Fast prototypes → polished, reproducible systems.',
  },
]
</script>
