<template>
  <SnapPage>
    <div class="guide">
      <h1 class="title">Guia técnico &mdash; {{ featured?.title }}</h1>
      <div class="media-layout">
        <div class="feature-video">
          <VideoFrame :video-id="selectedId" :autoplay="autoplay" :muted="muted" :closed-captions="closedCaptions" />
        </div>

        <div class="thumb-grid">
          <VideoThumbnail
            v-for="video in videos"
            :key="video.id"
            :video="video"
            :is-active="video.id === selectedId"
            @select="select"
          />
        </div>
      </div>
    </div>
  </SnapPage>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import SnapPage from '@/components/SnapPage.vue'
import VideoFrame from '@/components/VideoFrame.vue'
import VideoThumbnail from '@/components/VideoThumbnail.vue'

type Video = { id: string; title: string }

const videos = reactive<Video[]>([
  { id: 'atEtU4-OKSg', title: 'Introdução e navegação' },
  { id: 'vDKwTIejJ2M', title: 'Políticas Públicas' },
  { id: 'KZ8QHUkkjSY', title: 'Orçamento Público' },
  { id: 'Z6jvCsYf9Lw', title: 'Execução Orçamentária' }
])

const selectedId = ref(videos[0].id)
const autoplay = ref(false)
const muted = ref(true)
const closedCaptions = ref(true)
const featured = computed(() => videos.find(video => video.id === selectedId.value) ?? videos[0])

function select(id: string) {
  selectedId.value = id
  autoplay.value = true
  muted.value = false
  closedCaptions.value = false
}
</script>

<style scoped>
.guide {
  height: 96vh;
  width: calc(100vw - 4vh);
  padding: 2vh;
  color: #000000;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  z-index: 30;
  min-height: 0;
}

.title {
  width: 100%;
  max-width: 100%;
  margin: 0;
  flex-shrink: 0;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-weight: 600;
  text-align: center;
}

.media-layout {
  width: 100%;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.feature-video {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 0px);
  aspect-ratio: 16 / 9;
  background: #000;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.625rem 1.75rem rgba(0, 0, 0, 0.32);
}

.feature-video :deep(.snap-section) {
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

.thumb-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  padding: 1rem 1rem 1rem 2rem;
  flex: 0 0 15rem;
  justify-content: space-between;
  box-sizing: border-box;
}

@media (max-width: 60em) {
  .media-layout {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .thumb-grid {
    flex: none;
    max-width: 100%;
    padding-top: 0;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    max-height: none;
    overflow: visible;
    padding-right: 0;
  }
}

@media (max-width: 45em) {
  .guide {
    --feature-max: 27.5rem;
    gap: 1rem;
  }


}
</style>
