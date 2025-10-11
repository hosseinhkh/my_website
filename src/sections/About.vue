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
                  <RouterLink :to="item.url" :class="{ 'm-0': socialLinks.length - 1 === idx }">
                    <img :src="item.image" :alt="item.label || 'link'" />
                  </RouterLink>
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
  { label: 'LinkedIn', image: sIcon1, url: 'https://www.linkedin.com/in/hossein-khalili-658282ab/' },
  { label: 'Google Scholar', image: sIcon2, url: 'https://scholar.google.com/citations?user=eRdueD0AAAAJ&hl=en' },
  { label: 'Instagram', image: sIcon3, url: 'https://instagram.com/hosseinhkh_' },
  { label: 'GitHub', image: sIcon4, url: 'https://github.com/hosseinhkh' },
  { label: 'Spotify', image: sIcon5, url: 'https://open.spotify.com/user/hosseinhkh' },
]
</script>
