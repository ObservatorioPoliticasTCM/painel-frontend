<template>
  <div class="card-container">
    <router-link v-if="navLink" :to="navLink">
      <div class="card">
        <div class="card-face card-front" :style="{ background: bgColor }">
          <div class="icon">{{ icon }}</div>
          <div class="title">{{ title }}</div>
        </div>
        <div class="card-face card-back">
          <div class="back-text">{{ backText }}</div>
        </div>
      </div>
    </router-link>
    <div v-else class="card">
      <div class="card-face card-front" :style="{ background: bgColor }">
        <div class="icon">{{ icon }}</div>
        <div class="title">{{ title }}</div>
      </div>
      <div class="card-face card-back">
        <div class="back-text">{{ backText }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

defineProps<{
  icon: string
  title: string
  backText: string
  bgColor?: string
  navLink?: string
}>()
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
  border-radius: 0.75rem;
  box-shadow: 0 0.625rem 1.5625rem rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  transform: translateZ(3.75rem);
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-shadow: 0.125rem 0.125rem 0.375rem rgba(0, 0, 0, 0.3);
  transform: translateZ(3.75rem);
}
</style>
