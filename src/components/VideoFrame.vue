<template>
  <div class="snap-section" ref="rootEl">
    <div class="iframe-wrapper">
      <iframe
        :src="embedSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Props {
  videoId: string
  autoplay?: boolean
  muted?: boolean
  closedCaptions?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  muted: true,
  closedCaptions: false
})

const rootEl = ref<HTMLElement | null>(null)
const autoplayActive = ref(props.autoplay)
const hasStarted = ref(props.autoplay)
let scrollRoot: HTMLElement | null = null
let scrollTarget: HTMLElement | Window | null = null
let ticking = false

const origin = typeof window !== 'undefined' ? window.location.origin : ''

const embedSrc = computed(() => {
  const base = `https://www.youtube.com/embed/${props.videoId}`
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1'
  })
  if (props.muted) params.set('mute', '1')
  if (props.closedCaptions) {
    params.set('cc_load_policy', '1')
    params.set('cc_lang_pref', 'pt')
  }
  if (origin) params.set('origin', origin)
  if (autoplayActive.value) params.set('autoplay', '1')
  return `${base}?${params.toString()}`
})

const activateAutoplay = () => {
  if (!autoplayActive.value) {
    autoplayActive.value = true
  }
  hasStarted.value = true
}

const isCenteredInViewport = (): boolean => {
  if (!rootEl.value) return false
  const rect = rootEl.value.getBoundingClientRect()
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0
  if (viewportHeight === 0) return false
  const elementCenter = rect.top + rect.height / 2
  const viewportCenter = viewportHeight / 2
  const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
  const minimalVisible = Math.min(rect.height, viewportHeight) * 0.6
  return visibleHeight >= minimalVisible && Math.abs(elementCenter - viewportCenter) <= viewportHeight * 0.15
}

const evaluateVisibility = () => {
  if (!hasStarted.value && isCenteredInViewport()) {
    activateAutoplay()
  }
}

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    evaluateVisibility()
    ticking = false
  })
}

const onResize = () => {
  evaluateVisibility()
}

watch(() => props.autoplay, value => {
  if (value) {
    activateAutoplay()
  } else {
    autoplayActive.value = false
    hasStarted.value = false
    evaluateVisibility()
  }
})

watch(() => props.videoId, () => {
  hasStarted.value = props.autoplay
  autoplayActive.value = props.autoplay
  if (!props.autoplay) evaluateVisibility()
})

onMounted(() => {
  evaluateVisibility()
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  scrollTarget = scrollRoot || window
  scrollTarget.addEventListener('scroll', onScroll, { passive: true } as AddEventListenerOptions)
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  if (scrollTarget) {
    scrollTarget.removeEventListener('scroll', onScroll)
  }
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.snap-section {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
}

.iframe-wrapper {
  flex: 1;
  min-height: 0;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.32);
  background: #000;
}

.iframe-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
