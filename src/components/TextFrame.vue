<template>
  <div class="text-frame" ref="rootEl">
    <div v-if="title" class="frame-header">
      <h1 v-if="title"> 
        <span class="title-anchor-wrapper">
          <a :id="anchorId" :href="'#' + anchorId" class="title-anchor" title="Copiar o link para esta seção" @click="copyAnchorLink">
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
import { toRefs } from 'vue'
import { useAnchorLink } from '@/composables/useAnchorLink'

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

const { anchorId, displayTitle, rootEl, showCopied, copyAnchorLink } = useAnchorLink({
  title,
  emitFullyVisible: (id) => emit('fully-visible', id)
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

