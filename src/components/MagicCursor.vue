<template>
  <!-- two layers: outer ring + inner dot -->
  <div class="mcursor" ref="ring"></div>
  <div class="mcursor-dot" ref="dot"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const ring = ref(null)
const dot  = ref(null)

let x = 0, y = 0, rx = 0, ry = 0, raf

const move = e => {
  x = e.clientX
  y = e.clientY
  // grow on interactive elements
  const t = e.target
  const interactive = t?.closest('a,button,[role="button"],.btn,.nav-link')
  ring.value?.classList.toggle('is-active', !!interactive)
}

const animate = () => {
  // lerp to make it smooth
  rx += (x - rx) * 0.15
  ry += (y - ry) * 0.15
  ring.value.style.transform = `translate3d(${rx}px,${ry}px,0)`
  dot.value.style.transform  = `translate3d(${x}px,${y}px,0)`
  raf = requestAnimationFrame(animate)
}

onMounted(() => {
  // don’t show on touch devices
  if (matchMedia('(pointer: coarse)').matches) return
  document.addEventListener('mousemove', move, { passive: true })
  raf = requestAnimationFrame(animate)
  // hide when leaving window
  document.addEventListener('mouseleave', () => {
    ring.value.style.opacity = '0'; dot.value.style.opacity = '0'
  })
  document.addEventListener('mouseenter', () => {
    ring.value.style.opacity = '1'; dot.value.style.opacity = '1'
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
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
