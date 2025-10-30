<template>
  <div class="dashboard-frame">
    <div v-if="title" class="frame-header">
      <h1>
        <span class="title-anchor-wrapper">
          <span class="title-anchor">{{ title }}</span>
        </span>
      </h1>
      <div class="frame-actions"></div>
    </div>
    <div v-if="subtitle" class="frame-subtitle">
      <small>{{ subtitle }}</small>
    </div>
    <div class="iframe-wrapper">
      <iframe
        :src="embedSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        style="border:none;width:100%;height:100%;"
      ></iframe>
    </div>
  </div>
  </template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  videoId: string
  title?: string
  subtitle?: string
  autoplay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  autoplay: false
})

const embedSrc = computed(() => {
  const base = `https://www.youtube.com/embed/${props.videoId}`
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1'
  })
  if (props.autoplay) params.set('autoplay', '1')
  return `${base}?${params.toString()}`
})
</script>

<style scoped>
/* Reaproveita o visual do DashboardFrame */
.dashboard-frame {
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  width: 100%;
  padding: 2rem;
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
  text-align: center;
  font-weight: normal;
  white-space: pre-line;
}
.title-anchor { color: inherit; text-decoration: none; }
.frame-subtitle {
  font-variant: small-caps;
  text-align: center;
  font-size: 1.3em;
}
.iframe-wrapper { flex: 1; }
</style>

