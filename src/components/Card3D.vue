<template>
  <div class="card-container">
    <router-link v-if="navLink" :to="navLink">
      <div class="card">
        <div class="card-face card-front" :style="{ background: bgColor }">
          <div class="icon-wrapper">
            <img class="icon-shadow" :src="iconSrc" alt="icon" />
            <img class="icon" :src="iconSrc" alt="icon" />
          </div>
          <div class="title">{{ title }}</div>
        </div>
        <div class="card-face card-back">
          <div class="back-text">{{ backText }}</div>
        </div>
      </div>
    </router-link>
    <div v-else class="card">
      <div class="card-face card-front" :style="{ background: bgColor }">
        <div class="icon-wrapper">
          <img class="icon-shadow" :src="iconSrc" alt="icon" />
          <img class="icon" :src="iconSrc" alt="icon" />
        </div>
        <div class="title">{{ title }}</div>
      </div>
      <div class="card-face card-back">
        <div class="back-text">{{ backText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps<{
  icon: string
  title: string
  backText: string
  bgColor?: string
  navLink?: string
}>()

const iconSrc = computed(() => new URL(`../assets/${props.icon}`, import.meta.url).href)
</script>

<style scoped>
.card-container {
  perspective: 75rem;
  width: 100%; /* adiciona largura total */
  height: 100%; /* adiciona altura total */
  box-sizing: border-box; /* respeita os paddings e gaps do grid */
  z-index: 10;
}

.card {
  position: relative;
  width: 100%; /* adiciona largura total */
  height: 100%; /* adiciona altura total */
  box-sizing: border-box; /* respeita os paddings e gaps do grid */
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.card-container:hover .card {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  top: 0; /* adicionado para alinhar horizontalmente */
  left: 0; /* adicionado para alinhar verticalmente */
  width: 100%; /* adiciona largura total */
  height: 100%; /* adiciona altura total */
  box-sizing: border-box; /* respeita os paddings e gaps do grid */
  backface-visibility: hidden;
  background: white;
  box-shadow: 0 0.625rem 1.5625rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform-style: preserve-3d;
}

.card-front {
  z-index: 12;
}

.card-back {
  transform: rotateY(180deg);
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* adiciona largura total */
  height: 100%; /* adiciona altura total */
  box-sizing: border-box; /* respeita os paddings e gaps do grid */
}

.back-text {
  transform: translateZ(3.75rem);
  font-size: 1rem;
  color: #333;
  text-align: center;
  opacity: 0.8;
}

.icon-wrapper {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;
}

.icon-shadow {
  position: absolute;
  /* top: 50%; */
  /* left: 50%; */
  z-index: 0;
  transform: translateY(0.6rem) translateX(0rem) scale(1.1)
    translateZ(0.1px);
  filter: invert(100%) saturate(0) blur(0.22rem) opacity(0.5);
  max-width: 130%;
  max-height: 130%;
}

.icon {
  z-index: 1;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  transform: translateZ(3.75rem);
  max-width: 130%;
  max-height: 130%;
}

.title {
  z-index: 2;
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  color: black;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  transform: translateZ(3.75rem);
  text-align: center;
  width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
}
</style>
