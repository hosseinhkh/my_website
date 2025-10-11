<template>
  <div id="contact">
    <div class="contact-section-area">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="contact-heading heading1">
              <h5 data-aos="fade-left" data-aos-duration="900">
                <img :src="subLogo" alt="" />Contact Me
              </h5>
              <div class="space24" />
              <h2 data-aos="fade-left" data-aos-duration="1000">Have Any Project in</h2>
              <div class="space24" />
              <h2 class="head" data-aos="fade-left" data-aos-duration="1100">
                Mind, <span>Let’s Talk</span>
              </h2>
            </div>

            <div class="space50" />

            <div class="contact-boxarea" data-aos="zoom-in" data-aos-duration="1000">
              <h3>Let’s Work Together!</h3>
              <div class="space12" />

              <!-- Keep style; add bindings + submit -->
              <BForm class="row" @submit.prevent="submitContact" novalidate>
                <!-- Honeypot (spam guard) -->
                <input
                  v-model="form.honeypot"
                  type="text"
                  autocomplete="off"
                  tabindex="-1"
                  style="position:absolute;left:-9999px;opacity:0"
                />

                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput v-model="form.name" type="text" placeholder="Full Name" required />
                  </div>
                </BCol>

                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput v-model="form.email" type="email" placeholder="Email Address" required />
                  </div>
                </BCol>

                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput v-model="form.phone" type="tel" placeholder="Phone Number" />
                  </div>
                </BCol>

                <BCol lg="6" md="6">
                  <div class="input-area">
                    <BFormInput v-model="form.subject" type="text" placeholder="Subject" />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <BFormInput v-model="form.budget" type="text" placeholder="Your Budget (optional)" />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <BFormTextarea v-model="form.message" placeholder="Message" rows="5" required />
                  </div>
                </BCol>

                <BCol lg="12">
                  <div class="input-area">
                    <button type="submit" class="vl-btn1" :disabled="loading">
                      <span v-if="!loading">Send</span>
                      <span v-else>Sending…</span>
                      <img :src="mailIcon" alt="" />
                    </button>
                    <p v-if="statusMsg" class="mt-2" :style="{opacity:.9}">{{ statusMsg }}</p>
                  </div>
                </BCol>
              </BForm>
            </div>
          </BCol>

          <BCol lg="12">
            <div class="space50" />
            <div class="footer-area">
              <div class="btn-area1">
                <RouterLink to="/"><img :src="logo" alt="" /></RouterLink>
              </div>
              <p>© {{ currentYear }} {{ appName }}. All Rights Reserved.</p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import logo from '@/assets/img/logo/logo1.png'
import mailIcon from '@/assets/img/icons/mail1.svg'
import { appName, currentYear } from '@/helpers'
import { BCol, BContainer, BForm, BFormInput, BFormTextarea, BRow } from 'bootstrap-vue-next'
import { ref } from 'vue'

type ContactForm = {
  name: string
  email: string
  phone?: string
  subject?: string
  budget?: string
  message: string
  honeypot?: string
}

const loading = ref(false)
const statusMsg = ref('')
const form = ref<ContactForm>({
  name: '',
  email: '',
  phone: '',
  subject: '',
  budget: '',
  message: '',
  honeypot: '',
})

const submitContact = async () => {
  statusMsg.value = ''
  // Minimal client validation
  if (!form.value.name || !form.value.email || !form.value.message) {
    statusMsg.value = 'Please fill your name, email, and message.'
    return
  }

  loading.value = true
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })
    if (!res.ok) throw new Error(await res.text())

    statusMsg.value = 'Thanks! Your message has been sent.'
    form.value = { name: '', email: '', phone: '', subject: '', budget: '', message: '', honeypot: '' }
  } catch (err) {
    statusMsg.value = 'Something went wrong. Please try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
</script>
