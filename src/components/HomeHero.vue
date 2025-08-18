<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">D<span class="hero-title-smallcaps">ata</span>SP</h1>
      <p class="hero-subtitle">Mapa de Dados da Cidade</p>
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
  font-size: 13rem;
  margin-bottom: 0;
  font-weight: 600;
  color: black;
}

.hero-title-smallcaps {
  font-variant: small-caps;
  font-weight: 500;
  font-size: 70%;
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
