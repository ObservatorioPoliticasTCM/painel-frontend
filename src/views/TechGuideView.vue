<template>
  <SnapPage>
    <div class="guide">
      <h2 class="title">Guia técnico</h2>
      <div class="media-layout">
        <section class="feature">
          <h3 class="feature-title">{{ featured?.title }}</h3>
          <div class="feature-video">
            <iframe
              :src="embedUrl(selectedId)"
              title="Video em destaque"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
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
              <span class="thumb-label">{{ video.title }}</span>
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

type Video = { id: string; title: string }

const videos = reactive<Video[]>([
  { id: 'z8Otk01Xi-U', title: 'Testamento1231' },
  { id: 'QovocBPyQac', title: 'Testamento1232' },
  { id: 'IXXOTatnVcA', title: 'Testamento1233' },
  { id: 'uYIDfBbgVVI', title: 'Testamento1234' },
  { id: 'tE80FR2EUeg', title: 'Testamento1235' }
])

const selectedId = ref(videos[0].id)
const featured = computed(() => videos.find(video => video.id === selectedId.value) ?? videos[0])

function select(id: string) {
  selectedId.value = id
}

function embedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`
}

function thumbUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}
</script>

<style scoped>
.guide {
  --feature-max: clamp(480px, 70vw, 960px);
  width: min(96vw, 1280px);
  margin: 4vh auto;
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
  max-width: var(--feature-max);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
  text-align: left;
}

.media-layout {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
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
  text-align: left;
  font-size: clamp(1rem, 2.3vh, 1.2rem);
}

.feature-video {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
}

.feature-video iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.thumb-strip {
  flex: 0 0 240px;
  width: 100%;
  max-width: 300px;
  align-self: stretch;
}

.thumb-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-height: 100%;
  overflow-y: auto;
  padding-right: 0.25rem;
}

.thumb {
  flex: 0 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(120px, 38%) minmax(0, 1fr);
  align-items: stretch;
  gap: 0.75rem;
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 10px;
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
  border: 2px solid #ffffff;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
}

.thumb[data-active='true'] {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  z-index: 3;
}

.thumb:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.75);
  z-index: 3;
}

.thumb:focus {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

.thumb img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
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

@media (max-width: 960px) {
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
    flex: 1 1 280px;
    max-width: 360px;
    grid-template-columns: minmax(100px, 42%) minmax(0, 1fr);
  }

  .thumb img {
    aspect-ratio: 16 / 9;
  }
}

@media (max-width: 720px) {
  .guide {
    --feature-max: clamp(300px, 80vw, 440px);
    gap: 1rem;
  }

  .thumb-label {
    font-size: 0.88rem;
  }

  .thumb {
    max-width: 320px;
    padding: 0.4rem 0.5rem;
    grid-template-columns: minmax(90px, 45%) minmax(0, 1fr);
  }

  .thumb img {
    aspect-ratio: 16 / 9;
  }
}
</style>
