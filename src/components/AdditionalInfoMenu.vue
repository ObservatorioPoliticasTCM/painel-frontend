<template>
  <div class="info-menu" ref="menuRoot">
    <button class="info-button" @click="toggle">
      Informações Adicionais
    </button>
    <div v-if="open" class="menu-popover">
      <div class="menu-list">
        <router-link class="menu-item" to="/glossario" @click="closeMenu" target="_blank" >
          <span class="menu-label">Glossário</span>
          <img src="@/assets/external-link-black.svg" alt="Abrir em nova aba" class="ext-icon" />
        </router-link>
        
        <a
          v-if="resolvedMethodologyLink"
          class="menu-item"
          :href="resolvedMethodologyLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          <span class="menu-label">Nota metodológica</span>
          <img src="@/assets/external-link-black.svg" alt="Abrir em nova aba" class="ext-icon" />
        </a>
        <button v-else class="menu-item disabled" disabled>Nota metodológica</button>
        
        <a
          class="menu-item"
          :href="resolvedMetadataLink"
          target="_blank"
          rel="noopener noreferrer"
          @click="closeMenu"
        >
          <span class="menu-label">Metadados</span>
          <img src="@/assets/download-icon.svg" alt="Abrir em nova aba" class="ext-icon" />
        </a>
        
        <button
          v-if="downloadLink"
          class="menu-item"
          :href="downloadLink"
          download
          @click="closeMenu"
        >
          <span class="menu-label">Download (arquivos)</span>
          <img src="@/assets/download-icon.svg" alt="Abrir em nova aba" class="ext-icon" />
        </button>
        <button v-else class="menu-item disabled" disabled>Download (arquivos)</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRefs, computed } from 'vue'
import defaultMetadataAsset from '@/assets/infos/metadados-datasp.xlsx?url'

interface AdditionalInfoMenuProps {
  metadataLink?: string
  methodologyLink?: string
  downloadLink?: string
}

const props = defineProps<AdditionalInfoMenuProps>()
const { metadataLink, methodologyLink, downloadLink } = toRefs(props)

const resolvedMetadataLink = computed(() => {
  const provided = metadataLink.value?.trim()
  return provided ? provided : defaultMetadataAsset
})

const resolvedMethodologyLink = computed(() => methodologyLink.value?.trim() ?? '')

const open = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

const toggle = () => { open.value = !open.value }
const closeMenu = () => { open.value = false }
const onDocClick = (ev: MouseEvent) => {
  if (!menuRoot.value) return
  if (!menuRoot.value.contains(ev.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<style scoped>
.info-menu {
  position: relative;
  margin: 0 0.05em;
  padding: 0 0 0.35em 0;
}

.info-button {
  background-color: #213547;
  color: #fff;
  border: none;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.menu-popover {
  position: absolute;
  right: 0;
  top: calc(100% + 0.4rem);
  background: #ffffff;
  color: #213547;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  min-width: 16rem;
  z-index: 1000;
}

.menu-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0.25rem;
  border: 0.1em solid black;
  border-radius: 8px;
}

.menu-item {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  padding: 0.6rem 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
}

.menu-item:hover {
  background: rgba(0,0,0,0.04);
}

.menu-item.disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.menu-label {
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
}

.ext-icon {
  width: 1rem;
  height: 1rem;
  opacity: 0.7;
  flex-shrink: 0;
}

</style>