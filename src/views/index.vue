<template>
  <NavBar
    button-label="PURCHASE NOW"
    :button-icon="purchaseIcon"
    :show-side-bar-toggler="false"
    :show-theme-toggler="false"
  />

  <div class="preview-header-area">
    <BContainer>
      <BRow>
        <BCol lg="10" class="m-auto">
          <div class="heading1 text-center">
            <h5>VERSION 1.0</h5>
            <div class="space20" />
            <h2 class="head" data-aos="fade-up" data-aos-duration="1000">
              Personal Portfolio <span>One Page</span> Vue 3 Template
            </h2>
          </div>
          <div class="space80 d-lg-block d-none" />
          <div class="space40 d-lg-none d-block" />
        </BCol>
      </BRow>

      <BRow>
        <BCol lg="12" class="m-auto">
          <div class="images-area" data-aos="fade-up" data-aos-duration="1000">
            <div class="img1">
              <a href="/demos/index-1">
                <img :src="preview" alt="" />
              </a>
            </div>
            <div class="space32" />
            <div class="text text-center">
              <a href="/demos/index-1">Main Demo</a>
            </div>
          </div>
          <div class="space100 d-lg-block d-none" />
          <div class="space50 d-lg-none d-block" />

          <BRow>
            <BCol
              v-for="(item, idx) in previewItems"
              :key="idx"
              lg="6"
              :data-aos="item.aos"
              data-aos-duration="1000"
            >
              <div class="images-area2">
                <div class="img1">
                  <RouterLink :to="item.url">
                    <video v-if="item.videoSrc" muted autoplay loop>
                      <source :src="item.videoSrc" type="video/mp4" />
                    </video>

                    <img v-if="item.imageSrc" :src="item.imageSrc" alt="" />
                  </RouterLink>
                </div>
                <div class="btn-area1">
                  <RouterLink :to="item.url" class="vl-btn1 m-0">VIEW DEMO</RouterLink>
                </div>
                <div class="space32" />
                <div class="text text-center">
                  <RouterLink :to="item.url">{{ item.title }}</RouterLink>
                </div>
              </div>
            </BCol>
          </BRow>

          <div class="space30" />
          <div class="footer-area2">
            <p class="text-center">© {{ currentYear }} {{ appName }}. All Rights Reserved.</p>
          </div>
          <div class="space32" />
        </BCol>
      </BRow>
    </BContainer>
  </div>

  <BackToTop />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import BackToTop from '@/components/BackToTop.vue'

import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

import preview from '@/assets/img/all-images/hero/preview-img1.png'
import preview2 from '@/assets/img/all-images/hero/preview-img2.png'

import purchaseIcon from '@/assets/img/icons/purchase.svg'
import { appName, currentYear } from '@/helpers'

type PreviewItem = {
  title: string
  url: string
  videoSrc?: string
  imageSrc?: string
  aos: 'fade-left' | 'fade-right'
}

const previewItems: PreviewItem[] = [
  {
    title: 'Water Effect',
    url: '/demos/index-2',
    videoSrc: 'video1.mp4',
    aos: 'fade-right',
  },
  {
    title: 'Particles Effect',
    url: '/demos/index-3',
    videoSrc: 'video2.mp4',
    aos: 'fade-left',
  },
  {
    title: 'Noise Effect',
    url: '/demos/index-4',
    videoSrc: 'video3.mp4',
    aos: 'fade-right',
  },
  {
    title: '3D Effect',
    url: '/demos/index-5',
    videoSrc: 'video4.mp4',
    aos: 'fade-left',
  },
  {
    title: 'Earth Line Sphere',
    url: '/demos/index-6',
    videoSrc: 'video5.mp4',
    aos: 'fade-right',
  },
  {
    title: 'Solid Color',
    url: '/demos/index-7',
    imageSrc: preview2,
    aos: 'fade-left',
  },
]
</script>
