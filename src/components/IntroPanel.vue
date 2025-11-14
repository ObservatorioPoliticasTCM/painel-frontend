<template>
  <div :class="panelClasses" ref="rootEl">
    <div class="surface">
      <div class="surface-head">
        <div v-if="icon" class="icon-wrapper">
          <img :src="icon" :alt="iconAlt" loading="lazy" />
        </div>
        <div class="head-text">
          <h1 v-if="title">
            <span class="title-anchor-wrapper">
              <a :id="anchorId" :href="'#' + anchorId" class="title-anchor" title="Copiar o link para esta seÃ§Ã£o"
                @click="copyAnchorLink">
                {{ displayTitle }}
              </a>
              <transition name="fade">
                <span v-if="showCopied" class="copy-popup">Link copiado</span>
              </transition>
            </span>
          </h1>
          <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
          <p v-if="leadText" class="lead">{{ leadText }}</p>
          <div v-if="$slots.default" class="extra">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { useAnchorLink } from '@/composables/useAnchorLink'

interface IntroPanelProps {
  title?: string
  subtitle?: string
  text?: string
  icon?: string
  fullHeight?: boolean
  usePlaceholder?: boolean
  snap?: boolean
}

const props = withDefaults(defineProps<IntroPanelProps>(), {
  title: '',
  subtitle: '',
  text: '',
  icon: '',
  fullHeight: true,
  usePlaceholder: true,
  snap: true
})

const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>()

const { title, subtitle, text, icon, fullHeight, usePlaceholder, snap } = toRefs(props)

const loremFallback = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, arcu a tincidunt dignissim, nisi felis iaculis sem, non dapibus felis leo in metus.',
  'Suspendisse potenti. Maecenas hendrerit consectetur mauris, nec posuere dolor laoreet in. Donec at lorem vel est malesuada pretium.',
  'Integer ultricies, nisl sit amet vestibulum iaculis, nisl magna finibus mauris, non condimentum metus erat vitae ipsum. Curabitur ut nibh vitae risus lacinia convallis.',
  'Etiam dictum, lorem quis placerat porta, nunc erat dictum est, id viverra eros metus non purus.'
].join(' ')

const leadText = computed(() => {
  const trimmed = text.value.trim()
  if (trimmed.length > 0) return trimmed
  return usePlaceholder.value ? loremFallback : ''
})

const iconAlt = computed(() => title.value ? `ÃÍcone da seÃ§Ã£o ${title.value}` : 'ÃÍcone da seÃ§Ã£o')

const panelClasses = computed(() => ({
  'intro-panel': true,
  'intro-panel--static': !fullHeight.value,
  'intro-panel--snap': snap.value
}))

const { anchorId, displayTitle, rootEl, showCopied, copyAnchorLink } = useAnchorLink({
  title,
  emitFullyVisible: (id) => emit('fully-visible', id)
})

</script>

<style scoped>
.intro-panel {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 20;
}

.intro-panel--snap {
  min-height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
}

.intro-panel--static {
  min-height: auto;
  height: auto;
}

.intro-panel--static.intro-panel--snap {
  padding: clamp(1.5rem, 3vw, 3rem) clamp(1.5rem, 4vw, 3rem);
}

.surface {
  flex: 1;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(12, 106, 255, 0.06));
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: clamp(1.5rem, 3vw, 3rem);
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.25);
}

.surface-head {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  max-width: 72rem;
  width: 100%;
}

.icon-wrapper {
  flex: 0 0 clamp(6rem, 12vw, 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.head-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #0b0b0b;
  width: 100%;
}

.head-text h1 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.2;
}

.subtitle {
  margin: 0;
  font-size: 1rem;
  text-transform: none;
  letter-spacing: 0.04em;
  color: rgba(11, 11, 11, 0.8);
}

.lead {
  margin: 0;
  font-size: clamp(1.2rem, 1.9vw, 1.4rem);
  line-height: 1.6;
  column-count: 2;
  column-gap: clamp(2rem, 4vw, 4.5rem);
  column-fill: balance;
  text-align: justify;
  hyphens: auto;
  width: 100%;
}

.extra {
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  line-height: 1.65;
  width: 100%;
  column-count: 2;
  column-gap: clamp(2rem, 4vw, 4.5rem);
  column-fill: balance;
  text-align: justify;
  hyphens: auto;
}

.extra ::v-deep(p) {
  margin: 0 0 1.2rem;
  break-inside: avoid;
}

.extra ::v-deep(p:last-child) {
  margin-bottom: 0;
}

.title-anchor-wrapper {
  position: relative;
  display: inline-block;
}

.title-anchor {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.title-anchor:hover {
  text-decoration: underline;
}

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
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  pointer-events: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 60rem) {
  .surface-head {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .head-text h1 {
    letter-spacing: 0.06em;
  }

  .extra {
    column-count: 1;
  }

  .lead {
    column-count: 1;
  }
}

@media (max-width: 38rem) {
  .lead {
    column-count: 1;
    text-align: left;
  }
}
</style>


