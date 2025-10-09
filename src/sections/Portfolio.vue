<template>
  <div id="list-item-5">
    <div class="portfolio-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="portfolio-header heading1">
              <h5 data-aos="fade-left" data-aos-duration="800">
                <img :src="subLogo" alt="" />
                My Portfolio
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Innovation Designs</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Real <span>Results</span>
              </h2>
            </div>
          </BCol>
          <div class="space50" />
          <BCol lg="12" data-aos="fade-left" data-aos-duration="1000">
            <div class="portfolio-boxarea click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal">
                  <img :src="portfolio1" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal"
                >Reelup - E commercer Video Platform</a
              >
            </div>
          </BCol>

          <BCol lg="6" md="6" data-aos="fade-left" data-aos-duration="1100">
            <div class="portfolio-boxarea2 click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal">
                  <img :src="portfolio3" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal">Academy - Sales Career</a>
            </div>
          </BCol>

          <BCol lg="6" md="6" data-aos="fade-left" data-aos-duration="1200">
            <div class="portfolio-boxarea2 click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal">
                  <img :src="portfolio4" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal">Leadlogic- Dashboard Design</a>
            </div>
          </BCol>

          <BCol lg="12" data-aos="fade-left" data-aos-duration="1100">
            <div class="portfolio-boxarea click-here">
              <div class="img1">
                <a href="javascript:void(0)" @click="openModal">
                  <img :src="portfolio2" alt="" />
                </a>
              </div>
              <div class="space24" />
              <a href="javascript:void(0)" @click="openModal"
                >Reelup - E commercer Video Platform</a
              >
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>

  <ContactModal v-model="showModal" />
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'

import portfolio1 from '@/assets/img/all-images/portfolio/portfolio-img1.png'
import portfolio2 from '@/assets/img/all-images/portfolio/portfolio-img2.png'
import portfolio3 from '@/assets/img/all-images/portfolio/portfolio-img3.png'
import portfolio4 from '@/assets/img/all-images/portfolio/portfolio-img4.png'
import ContactModal from '@/components/ContactModal.vue'
import { ref } from 'vue'
import { BCol, BContainer, BRow } from 'bootstrap-vue-next'

const showModal = ref<boolean>(false)

const openModal = () => (showModal.value = true)
</script>
