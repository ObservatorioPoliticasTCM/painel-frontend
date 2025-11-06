<template>
  <div class="dashboard-frame" ref="rootEl">
    <div v-if="title" class="frame-header">
      <h1 v-if="title">
        <span class="title-anchor-wrapper">
          <a :id="anchorId" :href="'#' + anchorId" class="title-anchor" title="Copiar o link para este dashboard" @click="copyDashboardLink">
            {{ displayTitle }}
            <img src="@/assets/copy-icon.svg" class="copy-icon" alt="Copiar link" />
          </a>
          <transition name="fade">
            <span v-if="showCopied" class="copy-popup">Link copiado</span>
          </transition>
        </span>
      </h1>
      <div class="frame-actions">
        <AdditionalInfoMenu
          :metadata-link="metadataLink"
          :methodology-link="methodologyLink"
          :download-link="downloadLink"
        />
      </div>
    </div>
    <div v-if="subtitle" class="frame-subtitle">
      <small v-if="subtitle">{{ subtitle }}</small>
    </div>
    <div class="iframe-wrapper">
      <iframe :src="iframeSrc" frameborder="0" style="border:none;width:100%;height:100%;"></iframe>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref, toRefs, nextTick } from 'vue'
import AdditionalInfoMenu from './AdditionalInfoMenu.vue'

const fullyVisibleEvent = 'fully-visible'

interface DashboardFrameProps {
  appid: string
  sheet: string
  identity?: string
  title?: string
  subtitle?: string
  select?: string
  metadataLink?: string
  methodologyLink?: string
  downloadLink?: string
}

const props = withDefaults(defineProps<DashboardFrameProps>(), {
  title: '',
  subtitle: ''
})
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { appid, sheet, identity, title, subtitle, select } = toRefs(props)
const { metadataLink, methodologyLink, downloadLink } = toRefs(props)

const baseUrl = 'https://qlik.tcm.sp.gov.br/jwt/single/'
const iframeSrc = computed(() => {
  let url = baseUrl + `?appid=${appid.value}&sheet=${sheet.value}&theme=card&opt=ctxmenu,currsel`
  if (identity.value) url += `&identity=${identity.value}`
  if (select.value) url += `&secret=${select.value}`
  return url
})

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

const copyDashboardLink = () => {
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
    // mostrar toast
    showCopied.value = false
    void nextTick(() => { // garantir reinício de transição
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
.dashboard-frame {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;  
  scroll-snap-align: start;
  scroll-snap-stop: always;
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
.copy-icon {
  width: 1em;
  height: 1em;
  vertical-align: top;
}
.title-anchor { color: inherit; text-decoration: none; cursor: pointer; }
.title-anchor:hover { text-decoration: underline; }
.frame-subtitle {
  font-variant: small-caps;
  text-align: left;
  font-size: 1.3em;
}
.iframe-wrapper {
  flex: 1;
}
.frame-actions {
  display: flex;
  gap: 1rem;
}
.title-anchor-wrapper { position: relative; display: inline-block; }
.copy-popup {
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0.6rem);
  background: #242424;
  color: #fff;
  padding: 0.4rem 0.6rem;
  border-radius: 0.5rem;
  font-size: 0.7em;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  pointer-events: none;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

