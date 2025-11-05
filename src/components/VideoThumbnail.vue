<template>
  <button
    class="thumb"
    type="button"
    :data-active="isActive"
    @click="$emit('select', video.id)"
    :aria-label="`Assistir ${video.title}`"
  >
    <img :src="thumbUrl(video.id)" :alt="`Miniatura de ${video.title}`" />
  </button>
</template>

<script setup lang="ts">
interface Video {
  id: string
  title: string
}

interface Props {
  video: Video
  isActive: boolean
}

defineProps<Props>()
defineEmits<{
  select: [id: string]
}>()

function thumbUrl(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}
</script>

<style scoped>
.thumb {
  width: 100%;
  align-items: stretch;
  gap: 0.75rem;
  position: relative;
  background: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
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
  box-shadow: -0.5rem 0 1rem rgba(0, 0, 0, 0.75);
  z-index: 3;
}

.thumb:hover, .thumb:focus-visible {
  transform: translateX(-0.625rem);
  box-shadow: -0.5rem 0 1rem rgba(0, 0, 0, 0.75);
  z-index: 3;
}

.thumb {
  -webkit-tap-highlight-color: transparent;
}

.thumb:focus {
  outline: none;
}

.thumb img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 0.5rem;
}

@media (max-width: 60em) {
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