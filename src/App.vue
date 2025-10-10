<template>
  <MagicCursor />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLayoutStore } from '@/stores/layout'
import { onMounted } from 'vue'
import AOS from 'aos'
import MagicCursor from '@/components/MagicCursor.vue'
onMounted(() => {
  AOS.init()
  useLayoutStore().init()
})
</script>
