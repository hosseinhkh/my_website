<template>
  <div class="personal-contact-box">
    <div v-if="showMenu" class="list-group">
      <!-- Use a normal <a> and smooth-scroll -->
      <a
        v-for="(item, idx) in menuItems"
        :key="idx"
        href="#"
        class="list-group-item list-group-item-action"
        :class="{ active: activeSectionIndex === idx }"
        @click.prevent="scrollTo(item.url, idx)"
      >
        <img :src="item.image" :alt="`${item.label} icon`" />
        <span>{{ item.label }}</span>
      </a>
    </div>

    <div class="img1 image-anime">
      <img :src="heroImage" alt="Hossein portrait" />
    </div>

    <div class="space18" />
    <h3>Hossein Khalili</h3>
    <div class="space16" />
    <p>
      Ph.D. Candidate (UCLA) · Amazon AI Fellow · AI Security &amp; Privacy — adversarial
      robustness, privacy-preserving LLMs, and real-time defenses.
    </p>

    <div class="space32" />
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

    <div class="space44" />
    <div class="btn-area1 text-center">
      <a href="/cv/Hossein_Khalili_CV.pdf" download class="vl-btn1">
        Download CV
        <img :src="downloadIcon" alt="" />
      </a>
    </div>

    <div class="space32" />
    <p>© {{ currentYear }} Hossein Khalili.</p>
  </div>
</template>

<script setup lang="ts">
import home1 from '@/assets/img/icons/home1.svg'
import home2 from '@/assets/img/icons/home2.svg'
import home3 from '@/assets/img/icons/home3.svg'
import home4 from '@/assets/img/icons/home4.svg'
import home5 from '@/assets/img/icons/home5.svg'
import home6 from '@/assets/img/icons/home6.svg'
import home7 from '@/assets/img/icons/home7.svg'
import home8 from '@/assets/img/icons/home8.svg'

import heroImage from '@/assets/img/all-images/hero/hero-img1.png'
import downloadIcon from '@/assets/img/icons/download1.svg'

import sIconLinkedIn from '@/assets/img/icons/s-icon4.svg'
import sIconInstagram from '@/assets/img/icons/s-icon2.svg'

const ICON_SCHOLAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 3 1 8l11 5 9-4.09V14h2V8L12 3z"/><path d="M7 12v4c0 2.21 2.91 4 5 4s5-1.79 5-4v-4l-5 2.27L7 12z"/></svg>';
const ICON_GITHUB =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.61-5.49 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5z"/></svg>';
const ICON_SPOTIFY =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23ffffff"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm4.44 14.6a.75.75 0 0 1-1.03.25c-2.83-1.73-6.39-2.13-10.57-1.19a.75.75 0 0 1-.33-1.46c4.56-1.04 8.49-.58 11.63 1.33.36.22.47.69.3 1.07zM17 12.6a.9.9 0 0 1-1.23.3c-3.24-1.9-8.18-2.46-12-1.37a.9.9 0 1 1-.48-1.74c4.22-1.15 9.7-.53 13.38 1.62.44.25.59.82.33 1.19zM16.58 10a1.05 1.05 0 0 1-1.43.36c-2.77-1.64-7.01-2.13-10.3-1.19a1.05 1.05 0 1 1-.59-2.02c3.78-1.1 8.49-.55 11.75 1.38.5.29.67.95.37 1.47z"/></svg>';

import { currentYear } from '@/helpers'
import { onMounted, onBeforeUnmount, ref, withDefaults, defineProps } from 'vue'

type PropsType = { showMenu?: boolean }
const props = withDefaults(defineProps<PropsType>(), { showMenu: true })

type MenuItemType = { label: string; url: string; image: string }
const menuItems: MenuItemType[] = [
  { label: 'Home',         url: 'home', image: home1 },
  { label: 'About',        url: 'about', image: home2 },
  { label: 'Research',     url: 'research', image: home3 },
  { label: 'Skills',       url: 'skills', image: home4 },
  { label: 'Projects',     url: 'projects', image: home5 },
  { label: 'Publications', url: 'publications', image: home8 },
  { label: 'Contact',      url: 'contact', image: home7 },
]

type SocialLinkType = { label: string; image: string; url: string }
const socialLinks: SocialLinkType[] = [
  { label: 'LinkedIn',       image: sIconLinkedIn,  url: 'https://www.linkedin.com/in/hossein-khalili-658282ab/' },
  { label: 'Google Scholar', image: ICON_SCHOLAR,   url: 'https://scholar.google.com/citations?user=eRdueD0AAAAJ&hl=en' },
  { label: 'Instagram',      image: sIconInstagram, url: 'https://instagram.com/hosseinhkh_' },
  { label: 'GitHub',         image: ICON_GITHUB,    url: 'https://github.com/hosseinhkh' },
  { label: 'Spotify',        image: ICON_SPOTIFY,   url: 'https://open.spotify.com/user/hosseinhkh' },
]

const activeSectionIndex = ref<number>(0)

/** Smooth-scroll to a section id, respecting a header offset */
const HEADER_OFFSET = 70
function scrollTo(id: string, idx?: number) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
  window.history.replaceState(null, '', `#${id}`) // update hash without routing
  window.scrollTo({ top, behavior: 'smooth' })
  if (typeof idx === 'number') activeSectionIndex.value = idx
}

function getActiveSectionIndex() {
  const y = window.pageYOffset
  for (let i = 0; i < menuItems.length; i++) {
    const section = document.getElementById(menuItems[i].url)
    if (section) {
      const top = section.offsetTop - HEADER_OFFSET
      const height = section.offsetHeight
      if (y >= top && y < top + height) {
        activeSectionIndex.value = i
        break
      }
    }
  }
}

onMounted(() => {
  if (props.showMenu) {
    window.addEventListener('scroll', getActiveSectionIndex, { passive: true })
    // If user loads the page with a hash, honor it:
    const initial = location.hash?.slice(1)
    if (initial) setTimeout(() => scrollTo(initial), 0)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', getActiveSectionIndex)
})
</script>
