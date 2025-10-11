<template>
  <!-- two layers: outer ring + inner dot -->
  <div class="mcursor" ref="ring"></div>
  <div class="mcursor-dot" ref="dot"></div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const ring = ref<HTMLDivElement | null>(null)
const dot  = ref<HTMLDivElement  | null>(null)

let x = 0, y = 0, rx = -9999, ry = -9999
let raf: number | null = null

const move = (e: MouseEvent) => {
  x = e.clientX
  y = e.clientY

  const t = e.target as HTMLElement | null
  const interactive = t?.closest('a,button,[role="button"],.btn,.nav-link')
  ring.value?.classList.toggle('is-active', !!interactive)
}

const animate = () => {
  // lerp to make it smooth
  rx += (x - rx) * 0.15
  ry += (y - ry) * 0.15

  if (ring.value) ring.value.style.transform = `translate3d(${rx}px,${ry}px,0)`
  if (dot.value)  dot.value.style.transform  = `translate3d(${x}px,${y}px,0)`

  raf = requestAnimationFrame(animate)
}

onMounted(() => {
  if (typeof window === 'undefined') return
  // don’t show on touch devices
  if (matchMedia('(pointer: coarse)').matches) return

  document.addEventListener('mousemove', move, { passive: true })
  raf = requestAnimationFrame(animate)

  const hide = () => {
    if (ring.value) ring.value.style.opacity = '0'
    if (dot.value)  dot.value.style.opacity  = '0'
  }
  const show = () => {
    if (ring.value) ring.value.style.opacity = '1'
    if (dot.value)  dot.value.style.opacity  = '1'
  }

  document.addEventListener('mouseleave', hide)
  document.addEventListener('mouseenter', show)
})

onBeforeUnmount(() => {
  if (raf !== null) cancelAnimationFrame(raf)
  document.removeEventListener('mousemove', move)
})
</script>

<style scoped>
.mcursor,
.mcursor-dot{
  position: fixed; top:0; left:0; pointer-events:none; z-index:9999;
  transform: translate3d(-50%,-50%,0);
  transition: opacity .2s ease;
}
.mcursor{
  width: 34px; height: 34px; border: 2px solid #00e6c3; border-radius: 9999px;
  backdrop-filter: blur(1px);
}
.mcursor.is-active{ transform: translate3d(-50%,-50%,0) scale(1.6); border-width: 3px; }
.mcursor-dot{ width: 6px; height: 6px; background: #00e6c3; border-radius: 9999px; }
@media (pointer: coarse){ .mcursor,.mcursor-dot{ display:none; } }
</style>
