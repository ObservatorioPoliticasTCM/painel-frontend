<template>
  <div class="info-menu" ref="menuRoot">
    <button class="info-button" @click="toggle">
      Informações
    </button>
    <div v-if="open" class="menu-popover">
      <ul class="menu-list">
        <li>
          <button class="menu-item" @click="openGlossary">
            Glossário
            <img src="@/assets/external-link.svg" alt="Abrir em nova aba" class="ext-icon" />
          </button>
        </li>
        <li>
          <a
            v-if="metadataLink"
            class="menu-item"
            :href="metadataLink"
            download
          >
            Metadados
          </a>
          <button v-else class="menu-item disabled" disabled>Metadados</button>
        </li>
        <li>
          <button
            v-if="methodologyLink"
            class="menu-item"
            @click="openMethodology"
          >
            Nota metodológica
          </button>
          <button v-else class="menu-item disabled" disabled>Nota metodológica</button>
        </li>
        <li>
          <a
            v-if="downloadLink"
            class="menu-item"
            :href="downloadLink"
            download
          >
            Download (arquivos)
          </a>
          <button v-else class="menu-item disabled" disabled>Download (arquivos)</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRefs } from 'vue'

interface AdditionalInfoMenuProps {
  metadataLink?: string
  methodologyLink?: string
  downloadLink?: string
}

const props = defineProps<AdditionalInfoMenuProps>()
const { metadataLink, methodologyLink, downloadLink } = toRefs(props)

const open = ref(false)
const menuRoot = ref<HTMLElement | null>(null)

const toggle = () => { open.value = !open.value }
const onDocClick = (ev: MouseEvent) => {
  if (!menuRoot.value) return
  if (!menuRoot.value.contains(ev.target as Node)) open.value = false
}
const openGlossary = () => {
  window.open('/glossario', '_blank')
  open.value = false
}
const openMethodology = () => {
  if (!methodologyLink?.value) return
  window.open(methodologyLink.value, '_blank')
  open.value = false
}

onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>

<style scoped>
.info-menu { position: relative; }
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
.menu-list { list-style: none; margin: 0; padding: 0.25rem; }
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
  gap: 0.4rem;
  cursor: pointer;
  text-decoration: none;
}
.menu-item:hover { background: rgba(0,0,0,0.04); }
.menu-item.disabled { opacity: 0.45; cursor: not-allowed; }
.ext-icon { width: 1rem; height: 1rem; margin-left: auto; opacity: 0.7; }
</style>

