<template>
  <div id="about">
    <div class="about-section-area">
      <div class="heading1">
        <h5 data-aos="fade-left" data-aos-duration="800">
          <img :src="subLogo" alt="" />About Me
        </h5>
        <div class="space24" />
        <h1 data-aos="fade-left" data-aos-duration="1000">AI under attack?</h1>
        <h1 class="head" data-aos="fade-left" data-aos-duration="1100">
          Not under <span>my watch</span>
        </h1>
      </div>

      <div class="space60" />

      <div class="about-boxarea">
        <BRow>
          <BCol lg="12" data-aos="fade-left" data-aos-duration="1200">
            <div class="about-main-boxes">
              <h4>Hossein</h4>
              <div class="space24" />
              <p>
                I’m Hossein! AI researcher, builder, and hacker at heart. I work on making
                <b>AI systems trustworthy</b>, strong against attacks, private by design, and
                fast enough to run anywhere. My journey blends <b>vision, language, and security</b>:
                from visual robustness to LLM privacy and real-time defenses on edge devices.
                I’ve led startups as <b>CTO</b>, coded across every layer of the stack, and built
                teams that ship research into production.
              </p>
            </div>
          </BCol>

          <!-- Skill boxes: 4 main strengths -->
          <BCol
            v-for="(item, idx) in skills"
            :key="idx"
            lg="6"
            md="6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="about-boxes2">
              <img :src="item.image" alt="" />
              <div class="content-area">
                <h4>{{ item.title }}</h4>
                <div class="space16" />
                <p>{{ item.description }}</p>
              </div>
            </div>
          </BCol>

          <div class="space20" />

          <BCol lg="6" md="6">
            <h3>Work Experience</h3>
            <div class="space32" />
            <div class="about-others-box" data-aos="zoom-in" data-aos-duration="900">
              <a href="#">2016 – 2023</a>
              <div class="space16" />
              <h4><a href="#">Co-founder &amp; CTO</a></h4>
              <div class="space16" />
              <p>Digify — built and scaled product from 0→80+ employees; led ML &amp; product teams.</p>

              <div class="space32" />
              <a href="#">2023 – Present</a>
              <div class="space16" />
              <h4><a href="#">AI Security Researcher</a></h4>
              <div class="space16" />
              <p>UCLA — adversarial robustness, privacy-preserving LLMs, real-time edge defenses.</p>
            </div>

            <div class="about-others-box text-center" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Stay With Me</h4>
              <div class="space18" />
              <ul>
                <li v-for="(item, idx) in socialLinks" :key="idx">
                  <a
                    :href="item.url"
                    target="_blank"
                    rel="noopener"
                    :aria-label="item.label"
                    :title="item.label"
                    :class="{ 'm-0': socialLinks.length - 1 === idx }"
                  >
                    <img :src="item.image" :alt="item.label" />
                  </a>
                </li>
              </ul>
            </div>
          </BCol>

          <BCol lg="6" md="6">
            <h3>Education</h3>
            <div class="space32" />
            <div class="about-others-box" data-aos="zoom-in" data-aos-duration="1100">




              <a href="#">Ph.D. (Current)</a>
              <div class="space16" />
              <h4><a href="#">Computer Engineering — AI Security &amp; Privacy</a></h4>
              <div class="space16" />
              <p>University of California, Los Angeles (UCLA).</p>

              <div class="space32" />
              <a href="#">M.Sc.</a>
              <div class="space16" />
              <h4><a href="#">Computer Engineering (AI & Robotics)</a></h4>
              <div class="space16" />
              <p>Sharif University of Technology.</p>
              <div class="space32" />

              <a href="#">B.Sc.</a>
              <div class="space16" />
              <h4><a href="#">Electrical Engineering & Physics</a></h4>
              <div class="space16" />
              <p>Sharif University of Technology — second major in Physics.</p>
            </div>
          </BCol>

          <div class="space20" />
        </BRow>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import subLogo from '@/assets/img/icons/sublogo1.svg'
import sIcon1 from '@/assets/img/icons/s-icon1.svg' // LinkedIn
import sIcon2 from '@/assets/img/icons/s-icon2.svg' // Google Scholar
import sIcon3 from '@/assets/img/icons/s-icon3.svg' // Instagram
import sIcon4 from '@/assets/img/icons/s-icon4.svg' // GitHub
import sIcon5 from '@/assets/img/icons/s-icon5.svg' // Spotify
import sIconLinkedIn from '@/assets/img/icons/s-icon4.svg'
import sIconInstagram from '@/assets/img/icons/s-icon2.svg'

const ICON_SCHOLAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 3 1 8l11 5 9-4.09V14h2V8L12 3z"/><path d="M7 12v4c0 2.21 2.91 4 5 4s5-1.79 5-4v-4l-5 2.27L7 12z"/></svg>';
const ICON_GITHUB =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5z"/></svg>';
const ICON_SPOTIFY =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.44 14.6a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.13-10.57-1.19a.75.75 0 0 1-.33-1.46c4.56-1.04 8.49-.58 11.63 1.33.36.22.47.69.3 1.07zM17 12.6a.9.9 0 0 1-1.23.3c-3.24-1.9-8.18-2.46-12-1.37a.9.9 0 1 1-.48-1.74c4.22-1.15 9.7-.53 13.38 1.62.44.25.59.82.33 1.19zM16.58 10a1.05 1.05 0 0 1-1.43.36c-2.77-1.64-7.01-2.13-10.3-1.19a1.05 1.05 0 1 1-.59-2.02c3.78-1.1 8.49-.55 11.75 1.38.5.29.67.95.37 1.47z"/></svg>';

import home2 from '@/assets/img/icons/home2.svg'
import home3 from '@/assets/img/icons/home3.svg'
import home4 from '@/assets/img/icons/home4.svg'
import home5 from '@/assets/img/icons/home5.svg'
import { BCol, BRow } from 'bootstrap-vue-next'


type SkillType = { image: string; title: string; description: string }

/* four key strengths — visual/ML, LLM privacy, leadership, programming */
const skills: SkillType[] = [
  {
    image: home2,
    title: 'Adversarial Robustness & Vision',
    description:
      'Building defenses for visual and multimodal AI. Deep roots in machine learning, robustness, and model reliability.',
  },
  {
    image: home3,
    title: 'LLM Privacy & Security',
    description:
      'Designing private and secure AI , tokenizer-level redaction, privacy-safe pipelines, and trust-centered architectures.',
  },
  {
    image: home4,
    title: 'Entrepreneurship & Leadership',
    description:
      'Co-founded startups, led cross-disciplinary teams, and scaled products from concept to deployment.',
  },
  {
    image: home5,
    title: 'Programming & Systems',
    description:
      'Fluent across frameworks and stacks — Python, C++, Java, Go, JS, PyTorch, TensorFlow over 15 years!',
  },
]

type SocialLinkType = { label?: string; image: string; url: string }
const socialLinks: SocialLinkType[] = [
  { label: 'LinkedIn',       image: sIconLinkedIn,  url: 'https://www.linkedin.com/in/hossein-khalili-658282ab/' },
  { label: 'Google Scholar', image: ICON_SCHOLAR,   url: 'https://scholar.google.com/citations?user=eRdueD0AAAAJ&hl=en' },
  { label: 'Instagram',      image: sIconInstagram, url: 'https://instagram.com/hosseinhkh_' },
  { label: 'GitHub',         image: ICON_GITHUB,    url: 'https://github.com/hosseinhkh' },
  { label: 'Spotify',        image: ICON_SPOTIFY,   url: 'https://open.spotify.com/user/hosseinhkh' },
]
</script>
