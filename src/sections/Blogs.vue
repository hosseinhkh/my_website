<template>
  <div id="publications" class="publications-section">
    <BContainer>
      <div class="publications-header text-center">
        <h2 data-aos="fade-up" data-aos-duration="800">
          Publications
        </h2>
        <p class="subtitle" data-aos="fade-up" data-aos-duration="1000">
          Selected peer-reviewed papers and conference publications
        </p>
      </div>

      <div class="space40" />

      <ul class="publication-list">
        <li v-for="pub in publications" :key="pub.id" data-aos="fade-up" data-aos-duration="900">
          <span class="pub-title">{{ pub.title }}</span>
          <span class="pub-year">{{ pub.year }}</span>
        </li>
      </ul>
    </BContainer>
  </div>
</template>

<script setup lang="ts">
import { BContainer } from 'bootstrap-vue-next'

const publications = [
  { id: 1, title: 'SuperPure: Efficient Purification of Localized and Distributed Adversarial Patches via Super-Resolution GAN Models', year: 2025 },
  { id: 2, title: 'Chimera: Creating Digitally Signed Fake Photos by Fooling Image Recapture and Deepfake Detectors', year: 2025 },
  { id: 3, title: 'LightPure: Realtime Adversarial Image Purification for Mobile Devices Using Diffusion Models', year: 2024 },
  { id: 4, title: 'Virtual Keystrokes Unveiled: Detecting Keystrokes in VR with External Side-Channels', year: 2024 },
  { id: 5, title: 'SideGuard: Non-Invasive On-Chip Malware Detection in Heterogeneous IoT Systems', year: 2024 },
  { id: 6, title: 'Enc2: Privacy-Preserving Inference for Tiny IoTs via Encoding and Encryption', year: 2023 },
  { id: 7, title: 'Context-Aware Hybrid Encoding for Privacy-Preserving Computation in IoT Devices', year: 2023 },
  { id: 8, title: 'A Cost-Effective Set-Up for Time-Modulated Array Measurement Using Software-Defined Radio', year: 2018 },
]
</script>

<style scoped>
.publications-header h2 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: #fff;
}

.subtitle {
  font-size: 1rem;
  color: #aaa;
}

.publication-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 900px;
}

.publication-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 18px 24px;
  margin-bottom: 14px;
  border-radius: 12px;
  transition: all 0.25s ease;
}

.publication-list li:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-3px);
}

.pub-title {
  color: #fff;
  font-size: 1.05rem;
  line-height: 1.5;
  max-width: 90%;
}

.pub-year {
  color: #f5a623;
  font-weight: 600;
  font-size: 0.95rem;
}
</style>
