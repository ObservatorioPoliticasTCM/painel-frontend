<template>
  <div class="snap-container" ref="container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, provide, nextTick } from 'vue'

const topVisible = ref(false)
const bottomVisible = ref(false)
let topObserver: IntersectionObserver | null = null
let bottomObserver: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null

const firstEl = ref<HTMLElement | null>(null)
const lastEl = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)

const clearHash = () => {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}

const sectionVisible = (id: string) => {
  if (topVisible.value || bottomVisible.value) return
  if (location.hash === `#${id}`) return
  history.replaceState(null, '', `#${id}`)
}

provide('sectionVisible', sectionVisible)

const fullyVisibleHandler = (e: Event) => {
  const detail = (e as CustomEvent).detail
  if (detail?.anchorId) sectionVisible(detail.anchorId)
}

const disconnectIOs = () => {
  topObserver?.disconnect(); bottomObserver?.disconnect()
  topObserver = null; bottomObserver = null
}

const setupObservers = () => {
  if (!container.value) return
  const children = Array.from(container.value.children) as HTMLElement[]
  if (!children.length) return
  firstEl.value = children[0]
  lastEl.value = children[children.length - 1]
  disconnectIOs()
  topObserver = new IntersectionObserver(([e]) => {
    topVisible.value = e.isIntersecting
    if (topVisible.value) clearHash()
  }, { threshold: 0.6 })
  bottomObserver = new IntersectionObserver(([e]) => {
    bottomVisible.value = e.isIntersecting
    if (bottomVisible.value) clearHash()
  }, { threshold: 0.4 })
  if (firstEl.value) topObserver.observe(firstEl.value)
  if (lastEl.value && lastEl.value !== firstEl.value) bottomObserver.observe(lastEl.value)
}

onMounted(async () => {
  if (container.value) {
    container.value.addEventListener('fully-visible', fullyVisibleHandler as EventListener)
    await nextTick()
    setupObservers()
    mutationObserver = new MutationObserver(() => {
      setupObservers()
    })
    mutationObserver.observe(container.value, { childList: true })
  }
})

onBeforeUnmount(() => {
  if (container.value) {
    container.value.removeEventListener('fully-visible', fullyVisibleHandler as EventListener)
  }
  disconnectIOs()
  mutationObserver?.disconnect()
})
</script>

<style scoped>
.snap-container {
  height: 100vh;
  width: 101vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
::v-slotted(*) {
  scroll-snap-align: start;
}
</style>
