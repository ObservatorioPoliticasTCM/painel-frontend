<template>
  <div class="intro-panel" ref="rootEl">
    <div class="surface">
      <div class="surface-head">
        <div v-if="icon" class="icon-wrapper">
          <img :src="icon" :alt="iconAlt" loading="lazy" />
        </div>
        <div class="head-text">
          <h1 v-if="title">
            <span class="title-anchor-wrapper">
              <a
                :id="anchorId"
                :href="'#' + anchorId"
                class="title-anchor"
                title="Copiar o link para esta seção"
                @click="copySectionLink"
              >
                {{ displayTitle }}
              </a>
              <transition name="fade">
                <span v-if="showCopied" class="copy-popup">Link copiado</span>
              </transition>
            </span>
          </h1>
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
import { computed, onBeforeUnmount, onMounted, ref, toRefs, nextTick } from 'vue'

const fullyVisibleEvent = 'fully-visible'

interface IntroPanelProps {
  title?: string
  text?: string
  icon?: string
}

const props = withDefaults(defineProps<IntroPanelProps>(), {
  title: '',
  text: '',
  icon: ''
})

const emit = defineEmits<{ (e: 'fully-visible', anchorId: string): void }>() 

const { title, text, icon } = toRefs(props)

const loremFallback = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, arcu a tincidunt dignissim, nisi felis iaculis sem, non dapibus felis leo in metus.',
  'Suspendisse potenti. Maecenas hendrerit consectetur mauris, nec posuere dolor laoreet in. Donec at lorem vel est malesuada pretium.',
  'Integer ultricies, nisl sit amet vestibulum iaculis, nisl magna finibus mauris, non condimentum metus erat vitae ipsum. Curabitur ut nibh vitae risus lacinia convallis.',
  'Etiam dictum, lorem quis placerat porta, nunc erat dictum est, id viverra eros metus non purus.'
].join(' ')

const leadText = computed(() => {
  const trimmed = text.value.trim()
  return trimmed.length > 0 ? trimmed : loremFallback
})

const displayTitle = computed(() => title.value.replace(/\n/g, '\n'))
const iconAlt = computed(() => title.value ? `Ícone da seção ${title.value}` : 'Ícone da seção')

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
  void tryClipboard()
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
.intro-panel {
  display: flex;
  flex-direction: column;
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  position: relative;
  z-index: 20;
}

.surface {
  flex: 1;
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(12, 106, 255, 0.06));
  /* backdrop-filter: blur(14px); */
  display: flex;
  align-items: center;
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
}

.head-text h1 {
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.08em;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.2;
}

.lead {
  margin: 0;
  font-size: clamp(1.2rem, 1.9vw, 1.4rem);
  line-height: 1.6;
  column-count: 2;
  column-gap: clamp(1rem, 2.5vw, 2.5rem);
  column-fill: balance;
  text-align: justify;
  hyphens: auto;
}

.extra {
  font-size: clamp(1.05rem, 1.7vw, 1.2rem);
  line-height: 1.6;
  max-width: 70ch;
}

.extra ::v-deep(p) {
  margin: 0;
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
  }

  .head-text h1 {
    letter-spacing: 0.06em;
  }

  .extra {
    max-width: none;
  }
}

@media (max-width: 70rem) {
  .lead {
    column-count: 3;
  }
}

@media (max-width: 55rem) {
  .lead {
    column-count: 2;
  }
}

@media (max-width: 38rem) {
  .lead {
    column-count: 1;
    text-align: left;
  }
}
</style>
