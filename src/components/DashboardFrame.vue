<template>
  <div class="dashboard-frame" ref="rootEl">
    <div v-if="title" class="frame-header">
      <h1 v-if="title">
        <a :id="anchorId" :href="'#' + anchorId" class="title-anchor">{{ displayTitle }}</a>
      </h1>
      <div class="frame-actions">
        <a
          class="pdf-button"
          href="https://tcmspgovbr-my.sharepoint.com/:f:/g/personal/bruno_balzano_tcmsp_tc_br/Es3nGrJ9JRxMsiS_JFtYSb0BuOKH2yUNOX2HevUc4TM2Cw?e=bVupcT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/pdf-icon.svg" alt="PDF" class="pdf-icon"/>
          Notas metodológicas
        </a>
        <!--
        <button class="download-button">
          <img src="@/assets/download-icon.svg" alt="Download" class="download-icon"/>
          Arquivos CSV
        </button>
        -->
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
import { computed, onMounted, onBeforeUnmount, ref, toRefs, withDefaults } from 'vue'

const fullyVisibleEvent = 'fully-visible'

interface DashboardFrameProps {
  appid: string
  sheet: string
  identity?: string
  title?: string
  subtitle?: string
  select?: string
}

const props = withDefaults(defineProps<DashboardFrameProps>(), {
  title: '',
  subtitle: ''
})
const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { appid, sheet, identity, title, subtitle, select } = toRefs(props)

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
}
.frame-header {
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem;
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
.title-anchor { color: inherit; text-decoration: none; }
.title-anchor:hover { text-decoration: underline; }
.frame-subtitle {
  font-variant: small-caps;
  text-align: left;
  margin-left: 1.3rem;
  font-size: 1.3em;
}
.pdf-button {
  /* position: absolute;
  bottom: 1rem;
  right: 10.5rem; */
  min-width: 13em;
  display: flex;
  align-items: center;
  background-color: #213547;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
}
.pdf-icon {
  width: 1.4em;
  height: auto;
  margin-right: 0.5rem;
  filter: brightness(0) invert(1);
}
.download-button {
  /* position: absolute;
  bottom: 1rem;
  right: 1rem; */
  display: flex;
  align-items: center;
  background-color: #213547;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.download-button .download-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
.iframe-wrapper {
  flex: 1;
}
.frame-actions {
  display: flex;
  gap: 1rem;
}
</style>
