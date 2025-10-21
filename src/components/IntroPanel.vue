<template>
  <section class="intro-panel" ref="rootEl">
    <div class="intro-content">
      <div class="intro-text">
        <h1 class="intro-title">{{ title }}</h1>
        <p v-if="text" class="intro-description">{{ text }}</p>
      </div>
      <img v-if="icon" :src="icon" alt="Ícone" class="intro-icon" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, toRefs } from 'vue'

interface IntroPanelProps {
  title: string
  text?: string
  icon?: string
}

const props = withDefaults(defineProps<IntroPanelProps>(), {
  text: ''
})

const { title, text, icon } = toRefs(props)

const rootEl = ref<HTMLElement | null>(null)
let scrollRoot: HTMLElement | null = null
let scrollListenerAttached = false
let ticking = false

const anchorId = computed(() => title.value
  .toLowerCase()
  .replace(/\n/g, ' ')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9 ]/g, '')
  .trim()
  .replace(/\s+/g, '-')
)

const fullyVisible = (): boolean => {
  if (!rootEl.value) return false
  const elRect = rootEl.value.getBoundingClientRect()
  const rootRect = (scrollRoot
    ? scrollRoot.getBoundingClientRect()
    : { top: 0, bottom: window.innerHeight }) as DOMRect | { top: number; bottom: number }
  const elTop = Math.round(elRect.top)
  const elBottom = Math.round(elRect.bottom)
  const rootTop = Math.round(rootRect.top)
  const rootBottom = Math.round(rootRect.bottom)
  return elTop >= rootTop && elBottom <= rootBottom && (elBottom - elTop) > 0
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    if (fullyVisible()) {
      if (rootEl.value) {
        rootEl.value.dispatchEvent(new CustomEvent('fully-visible', { bubbles: true, detail: { anchorId: anchorId.value } }))
      }
    }
    ticking = false
  })
}

onMounted(() => {
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  const targetScrollEl = scrollRoot || window
  if (!scrollListenerAttached) {
    targetScrollEl.addEventListener('scroll', onScroll, { passive: true })
    scrollListenerAttached = true
  }
  if (fullyVisible()) {
    if (rootEl.value) {
      rootEl.value.dispatchEvent(new CustomEvent('fully-visible', { bubbles: true, detail: { anchorId: anchorId.value } }))
    }
  }
})

onBeforeUnmount(() => {
  const targetScrollEl = scrollRoot || window
  if (scrollListenerAttached) {
    targetScrollEl.removeEventListener('scroll', onScroll)
    scrollListenerAttached = false
  }
})
</script>

<style scoped>
.intro-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;
}
.intro-content {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 4rem;
  max-width: 1100px;
  width: 100%;
  text-align: left;
}
.intro-title {
  margin: 0 0 1rem 0;
  font-size: 2.4em;
  text-transform: uppercase;
  line-height: 1.1;
}
.intro-description {
  margin: 0;
  font-size: 1.2em;
}
.intro-icon {
  width: min(22vw, 260px);
  height: auto;
  opacity: 0.9;
}
@media (max-width: 900px) {
  .intro-content { grid-template-columns: 1fr; gap: 2rem; }
  .intro-icon { width: min(36vw, 200px); justify-self: start; }
}
</style>

