<template>
  <div class="snap-shell">
    <div class="snap-container" ref="container">
      <slot></slot>
    </div>
    <div
      v-if="dashboardEls.length"
      class="snap-dots"
      aria-label="Navegacao entre dashboards"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        v-for="(_, index) in dashboardEls"
        :key="`dot-${index}`"
        type="button"
        class="nav-dot"
        :class="{ active: index === activeDashboard }"
        @click="scrollToDashboard(index)"
        :aria-label="`Ir para o dashboard ${index + 1}`"
        :aria-selected="index === activeDashboard"
        role="tab"
      ></button>
    </div>
    <div
      v-if="dashboardEls.length"
      class="snap-arrows"
      aria-hidden="false"
    >
      <button
        type="button"
        class="nav-arrow up"
        :disabled="activeDashboard === 0"
        @click="goPrev"
        aria-label="Ir para o dashboard anterior"
      ></button>
      <button
        type="button"
        class="nav-arrow down"
        :disabled="activeDashboard === dashboardEls.length - 1"
        @click="goNext"
        aria-label="Ir para o proximo dashboard"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, provide, nextTick, computed } from 'vue'

const topVisible = ref(false)
const bottomVisible = ref(false)
let topObserver: IntersectionObserver | null = null
let bottomObserver: IntersectionObserver | null = null
let mutationObserver: MutationObserver | null = null

const firstEl = ref<HTMLElement | null>(null)
const lastEl = ref<HTMLElement | null>(null)
const container = ref<HTMLElement | null>(null)
const dashboardEls = ref<HTMLElement[]>([])
const activeDashboard = ref(0)

const totalDashboards = computed(() => dashboardEls.value.length)

const clearHash = () => {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}

const sectionVisible = (id: string) => {
  if (topVisible.value || bottomVisible.value) return
  if (location.hash === `#${id}`) return
  history.replaceState(null, '', `#${id}`)
}

provide('sectionVisible', sectionVisible)

const updateDashboardRefs = (children: HTMLElement[]) => {
  dashboardEls.value = children.filter(child => child.classList.contains('dashboard-frame'))
  if (!dashboardEls.value.length) {
    activeDashboard.value = 0
    return
  }
  const clamped = Math.min(activeDashboard.value, dashboardEls.value.length - 1)
  activeDashboard.value = clamped < 0 ? 0 : clamped
}

const fullyVisibleHandler = (e: Event) => {
  const detail = (e as CustomEvent).detail
  const target = e.target as HTMLElement | null
  if (target) {
    const index = dashboardEls.value.indexOf(target)
    if (index !== -1) activeDashboard.value = index
  }
  if (detail?.anchorId) sectionVisible(detail.anchorId)
}

const disconnectIOs = () => {
  topObserver?.disconnect(); bottomObserver?.disconnect()
  topObserver = null; bottomObserver = null
}

const setupObservers = () => {
  if (!container.value) return
  const children = Array.from(container.value.children) as HTMLElement[]
  if (!children.length) {
    dashboardEls.value = []
    return
  }
  firstEl.value = children[0]
  lastEl.value = children[children.length - 1]
  updateDashboardRefs(children)
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

const scrollToDashboard = (index: number) => {
  if (!container.value) return
  const target = dashboardEls.value[index]
  if (!target) return
  activeDashboard.value = index
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const goPrev = () => {
  if (activeDashboard.value <= 0) return
  scrollToDashboard(activeDashboard.value - 1)
}

const goNext = () => {
  if (activeDashboard.value >= totalDashboards.value - 1) return
  scrollToDashboard(activeDashboard.value + 1)
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
.snap-shell {
  position: relative;
  height: 100vh;
  width: 101vw;
}
.snap-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.snap-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.snap-container > :slotted(*) {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
.snap-dots,
.snap-arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 200;
  gap: 0.5rem;
}
.snap-dots {
  left: 1.5rem;
}
.snap-arrows {
  right: 1.5rem;
  gap: 0.6rem;
}
.nav-arrow {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  border: none;
  padding: 0;
  box-sizing: border-box;
  background: rgba(33, 53, 71, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}
.nav-arrow::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-left: 0.28rem solid transparent;
  border-right: 0.28rem solid transparent;
}
.nav-arrow.up::before {
  border-bottom: 0.48rem solid #ffffff;
}
.nav-arrow.down::before {
  border-top: 0.48rem solid #ffffff;
}
.nav-arrow:not(:disabled):hover {
  background: #213547;
}
.nav-arrow:disabled {
  opacity: 0.35;
  cursor: default;
}
.nav-dot {
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: rgba(33, 53, 71, 0.25);
  border: 1px solid transparent;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
}
.nav-dot:hover {
  background: rgba(33, 53, 71, 0.55);
}
.nav-dot.active {
  background: #213547;
  border-color: #213547;
  transform: scale(1.15);
}

@media (max-width: 60em) {
  .snap-dots {
    left: 1rem;
  }
  .snap-arrows {
    right: 1rem;
  }
}
</style>

