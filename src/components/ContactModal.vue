<template>
  <BModal
    v-if="showModal"
    v-model="showModal"
    size="xl"
    centered
    no-header
    no-footer
    body-class="p-0"
    @backdrop="closeModal"
  >
    <span type="button" class="text-body position-absolute top-0 end-0 m-3 z-1" @click="closeModal">
      <Icon icon="fa6-solid:xmark" size="20" />
    </span>
    <div class="custom-model-main">
      <div class="custom-model-inner">
        <div class="custom-model-wrap">
          <div class="pop-up-content-wrap">
            <BRow>
              <BCol lg="12">
                <div class="opend-section">
                  <BRow>
                    <BCol lg="7">
                      <div class="boxes-area">
                        <div class="img1">
                          <img :src="portfolioImg" alt="" />
                        </div>
                        <div class="content">
                          <div class="tags-area">
                            <a href="#">23 April 2024</a>
                            <a href="#">Alex Ross</a>
                          </div>
                          <a href="#"
                            >Crafting Compelling Designs and Strategic Marketing: A Creative Journey
                            Unveiled</a
                          >
                          <p>
                            In today's fast-paced digital landscape, the intersection of design and
                            marketing has become increasingly vital for businesses aiming to best
                            captivate audiences and drive success. Crafting compelling designs.
                          </p>
                          <p class="pera">
                            Psychology and market trends. Through strategic marketing, these an
                            designs are brought to life, leveraging data-driven insights innovative.
                          </p>
                          <div class="btn-area1">
                            <a href="#" class="vl-btn1">Get in touch now</a>
                          </div>
                        </div>
                      </div>
                    </BCol>

                    <BCol lg="5">
                      <div class="contact-from-area" data-aos="flip-right" data-aos-duration="1000">
                        <h3>Leave A Message</h3>
                        <BForm>
                          <div class="input">
                            <BFormInput type="text" placeholder="Full Name" />
                          </div>
                          <div class="input">
                            <BFormInput type="number" placeholder="Phone Number" required />
                          </div>
                          <div class="input">
                            <BFormInput type="email" placeholder="Email Address" required />
                          </div>
                          <div class="input">
                            <BFormSelect
                              v-model="selectedOption"
                              :options="serviceOptions"
                              class="nice-select country-area nice-select"
                            />
                          </div>
                          <div class="input">
                            <BFormTextarea placeholder="Message" required />
                          </div>
                          <div class="space32" />
                          <div
                            class="btn-area text-end"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                          >
                            <button type="submit" class="vl-btn1">submit now</button>
                          </div>
                        </BForm>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </BCol>
            </BRow>
          </div>
        </div>
      </div>
    </div>
  </BModal>
</template>

<script setup lang="ts">
import portfolioImg from '@/assets/img/all-images/portfolio/portfolio-img1.png'
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import {
  BCol,
  BForm,
  BFormInput,
  BFormSelect,
  BFormTextarea,
  BModal,
  BRow,
} from 'bootstrap-vue-next'

type PropsType = {
  modelValue: boolean
}

const props = defineProps<PropsType>()

const showModal = ref<boolean>(props.modelValue)

watch(
  () => props.modelValue,
  (newVal) => (showModal.value = newVal),
)

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>()

const closeModal = () => {
  emit('update:modelValue', false)
}

const selectedOption = ref<string | null>(null)

const serviceOptions = [
  { value: null, text: 'Service Type', disabled: true },
  { value: 'Belgium', text: 'Belgium' },
  { value: 'Brazil', text: 'Brazil' },
  { value: 'Argentina', text: 'Argentina' },
  { value: 'Bangladesh', text: 'Bangladesh' },
  { value: 'Germany', text: 'Germany' },
]
</script>
