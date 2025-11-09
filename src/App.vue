<template>
  <MobileWarning v-if="isMobileOrPortrait" />
  <router-view v-else />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MobileWarning from './components/MobileWarning.vue'

const isMobileOrPortrait = ref(false)

const checkViewport = () => {
  const width = window.innerWidth
  const height = window.innerHeight
  
  // Exibe aviso se:
  // 1. Largura menor que altura (orientação retrato)
  // 2. Largura menor que 768px (dispositivos móveis típicos)
  isMobileOrPortrait.value = width < height || width < 768
}

onMounted(() => {
  checkViewport()
  window.addEventListener('resize', checkViewport)
  window.addEventListener('orientationchange', checkViewport)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkViewport)
  window.removeEventListener('orientationchange', checkViewport)
})
</script>
