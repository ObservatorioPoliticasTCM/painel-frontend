<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Página não econtrada</h1>
      <p class="hero-subtitle">A página que você está procurando não existe.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
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

.hero-title {
  font-size: 8rem;
  margin-bottom: 0;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 3.75rem;
  font-weight: 500;
  color: black;
  margin: 0;
  text-transform: uppercase;
}
</style>
