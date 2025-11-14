<template>
  <div class="dashboard-frame" ref="rootEl">
    <div v-if="title" class="frame-header">
      <h1 v-if="title">
        <span class="title-anchor-wrapper">
          <a :id="anchorId" :href="'#' + anchorId" class="title-anchor" title="Copiar o link para este dashboard" @click="copyAnchorLink">
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
import { computed, toRefs } from 'vue'
import { useAnchorLink } from '@/composables/useAnchorLink'
import AdditionalInfoMenu from './AdditionalInfoMenu.vue'

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

const { anchorId, displayTitle, rootEl, showCopied, copyAnchorLink } = useAnchorLink({
  title,
  emitFullyVisible: (id) => emit('fully-visible', id)
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


