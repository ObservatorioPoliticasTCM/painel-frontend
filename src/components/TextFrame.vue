<template>
  <div class="text-frame" ref="rootEl">
    <div v-if="title" class="frame-header">
      <h1 v-if="title"> 
        <span class="title-anchor-wrapper">
          <a :id="anchorId" :href="'#' + anchorId" class="title-anchor" title="Copiar o link para esta seção" @click="copySectionLink">
            {{ displayTitle }}
            <img src="@/assets/copy-icon.svg" class="copy-icon" alt="Copiar link" />
          </a>
          <transition name="fade">
            <span v-if="showCopied" class="copy-popup">Link copiado</span>
          </transition>
        </span>
      </h1>
    </div>
    <div v-if="subtitle" class="frame-subtitle">
      <small v-if="subtitle">{{ subtitle }}</small>
    </div>
    <div class="text-content">
      <slot />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, toRefs, nextTick } from 'vue'

const fullyVisibleEvent = 'fully-visible'

interface TextFrameProps {
  title?: string
  subtitle?: string
}

const props = withDefaults(defineProps<TextFrameProps>(), {
  title: '',
  subtitle: ''
})
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { title, subtitle } = toRefs(props)

const displayTitle = computed(() => title.value.replace(/\n/g, '\n'))

const anchorId = computed(() => title.value
  .toLowerCase()
  .replace(/\n/g, ' ')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9 ]/g, '')
  .trim()
  .replace(/\s+/g, '-')
)

const rootEl = ref<HTMLElement | null>(null)
let scrollRoot: HTMLElement | null = null
let scrollListenerAttached = false
let ticking = false
const showCopied = ref(false)
let copyToastTimeout: number | null = null

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
      emit(fullyVisibleEvent, anchorId.value)
      if (rootEl.value) {
        rootEl.value.dispatchEvent(new CustomEvent(fullyVisibleEvent, { bubbles: true, detail: { anchorId: anchorId.value } }))
      }
    }
    ticking = false
  })
}

const copySectionLink = () => {
  const fullUrl = `${window.location.origin}${window.location.pathname}#${anchorId.value}`
  const tryClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
    } catch {
      const temp = document.createElement('textarea')
      temp.value = fullUrl
      temp.style.position = 'fixed'
      temp.style.opacity = '0'
      document.body.appendChild(temp)
      temp.select()
      try { document.execCommand('copy') } catch { /* ignore */ }
      document.body.removeChild(temp)
    }
    showCopied.value = false
    void nextTick(() => {
      showCopied.value = true
      if (copyToastTimeout) clearTimeout(copyToastTimeout)
      copyToastTimeout = window.setTimeout(() => { showCopied.value = false }, 1800)
    })
  }
  tryClipboard()
}

onMounted(() => {
  scrollRoot = document.querySelector('.snap-container') as HTMLElement | null
  const targetScrollEl = scrollRoot || window
  if (!scrollListenerAttached) {
    targetScrollEl.addEventListener('scroll', onScroll, { passive: true })
    scrollListenerAttached = true
  }
  if (fullyVisible()) {
    emit(fullyVisibleEvent, anchorId.value)
    if (rootEl.value) {
      rootEl.value.dispatchEvent(new CustomEvent(fullyVisibleEvent, { bubbles: true, detail: { anchorId: anchorId.value } }))
    }
  }
})

onBeforeUnmount(() => {
  const targetScrollEl = scrollRoot || window
  if (scrollListenerAttached) {
    targetScrollEl.removeEventListener('scroll', onScroll)
    scrollListenerAttached = false
  }
  if (copyToastTimeout) clearTimeout(copyToastTimeout)
})
</script>

<style scoped>
.text-frame {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;
}
.frame-header {
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
}
.frame-header h1 {
  margin: 0;
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
  white-space: pre-line;
}
.frame-subtitle {
  font-variant: small-caps;
  text-align: left;
  font-size: 1.3em;
}
.copy-icon {
  width: 1em;
  height: 1em;
  vertical-align: top;
}
.title-anchor { color: inherit; text-decoration: none; cursor: pointer; }
.title-anchor:hover { text-decoration: underline; }
.title-anchor-wrapper { position: relative; display: inline-block; }
.copy-popup {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0.6rem);
  background: #242424;
  color: #fff;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  font-size: 0.7em;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  pointer-events: none;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.text-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
}
.text-content ::v-deep(p) {
  max-width: 72ch;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  text-align: left;
}
</style>

