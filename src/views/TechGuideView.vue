<template>
  <SnapPage>
    <div class="guide">
      <h1 class="title">Guia técnico &mdash; {{ featured?.title }}</h1>
      <div class="media-layout">
        <section class="feature">
          <div class="feature-video">
            <VideoFrame :video-id="selectedId" :autoplay="autoplay" />
          </div>
        </section>

        <section class="thumb-strip">
          <div class="thumb-grid">
            <button
              v-for="video in videos"
              :key="video.id"
              class="thumb"
              type="button"
              :data-active="video.id === selectedId"
              @click="select(video.id)"
              :aria-label="`Assistir ${video.title}`"
            >
              <img :src="thumbUrl(video.id)" :alt="`Miniatura de ${video.title}`" />
            </button>
          </div>
        </section>
      </div>
    </div>
  </SnapPage>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import SnapPage from '@/components/SnapPage.vue'
import VideoFrame from '@/components/VideoFrame.vue'

type Video = { id: string; title: string }

const videos = reactive<Video[]>([
  { id: 'z8Otk01Xi-U', title: 'Introdução' },
  { id: 'QovocBPyQac', title: 'Políticas Públicas' },
  { id: 'IXXOTatnVcA', title: 'Orçamento' },
  { id: 'uYIDfBbgVVI', title: 'Execução do orçamento  ' }
])

const selectedId = ref(videos[0].id)
const autoplay = ref(false)
const featured = computed(() => videos.find(video => video.id === selectedId.value) ?? videos[0])

function select(id: string) {
  selectedId.value = id
  autoplay.value = true
}

function thumbUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}
</script>

<style scoped>
.guide {
  --feature-max: 60rem;
  /* width: 100%; */
  max-width: 80rem;
  margin: 2rem auto;
  padding: 1em 5vw;
  color: #000000;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  z-index: 30;
}

.title {
  width: 100%;
  max-width: 100%;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
  text-align: center;
}

.media-layout {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.feature {
  flex: 1 1 var(--feature-max);
  width: 100%;
  max-width: var(--feature-max);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-title {
  margin: 0;
  font-weight: 500;
  text-align: center;
  font-size: 1.125rem;
}

.feature-video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.32);
}

.feature-video :deep(.dashboard-frame) {
  position: absolute;
  inset: 0;
  padding: 0;
}

.feature-video :deep(iframe) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.thumb-strip {
  flex: 0 0 19rem;
  /* width: 100%; */
  max-width: 24rem;
  align-self: stretch;
}

.thumb-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 100%;
  overflow-y: auto;
  padding: 3rem 0rem 3rem 3rem;
}

.thumb {
  flex: 0 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(9.5rem, 50%) minmax(0, 1fr);
  align-items: stretch;
  gap: 0.75rem;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 0.625rem;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  overflow: hidden;
  z-index: 1;
}

.thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 0.125rem solid #ffffff;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
}

.thumb[data-active='true'] {
  transform: translateX(-0.625rem);
  box-shadow: -0.5rem 0 1.125rem rgba(0, 0, 0, 0.75);
  z-index: 3;
}

.thumb:hover {
  transform: translateX(-0.625rem);
  box-shadow: -0.5rem 0 1.125rem rgba(0, 0, 0, 0.75);
  z-index: 3;
}

.thumb {
  -webkit-tap-highlight-color: transparent;
}

/* Remove outline on mouse click, keep for keyboard navigation */
.thumb:focus {
  outline: none;
}

.thumb:focus-visible {
  outline: 0.125rem solid #fff;
  outline-offset: 0.125rem;
}

.thumb img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.5rem;
}

.thumb-label {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.95rem;
  color: #000000;
  text-align: left;
  line-height: 1.35;
  word-break: break-word;
}

@media (max-width: 60em) {
  .media-layout {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .feature {
    max-width: 100%;
  }

  .thumb-strip {
    flex: none;
    max-width: 100%;
    padding-top: 0;
  }

  .thumb-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    max-height: none;
    overflow: visible;
    padding-right: 0;
  }

  .thumb {
    flex: 1 1 20rem;
    max-width: 26rem;
    grid-template-columns: minmax(8.5rem, 52%) minmax(0, 1fr);
  }

  .thumb img {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 45em) {
  .guide {
    --feature-max: 27.5rem;
    gap: 1rem;
  }

  .thumb-label {
    font-size: 0.88rem;
  }

  .thumb {
    max-width: 22rem;
    padding: 0.4rem 0.5rem;
    grid-template-columns: minmax(7.5rem, 60%) minmax(0, 1fr);
  }

  .thumb img {
    aspect-ratio: 16 / 9;
  }
}
</style>
