<template>
  <section class="hero-section">
    <div class="hero-content">
      <img class="hero-logo" :src="logoUrl" alt="DataSP logo" />
    </div>
  </section>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/logo.svg';
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 80vh;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  background-color: transparent; /* fallback */
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10; /* acima da overlay e fundo */
}

.hero-logo {
  display: block;
  width: min(80vw, 1200px);
  height: auto;
  margin: 0 auto;
}
</style>