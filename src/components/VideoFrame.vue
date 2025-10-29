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
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: ''
})

const embedSrc = computed(() => `https://www.youtube.com/embed/${props.videoId}?rel=0&modestbranding=1&playsinline=1`)
</script>

<style scoped>
/* Reaproveita o visual do DashboardFrame */
.dashboard-frame {
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
.title-anchor { color: inherit; text-decoration: none; }
.frame-subtitle {
  font-variant: small-caps;
  text-align: left;
  font-size: 1.3em;
}
.iframe-wrapper { flex: 1; }
</style>

