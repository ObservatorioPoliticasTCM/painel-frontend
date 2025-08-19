<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-heading">
        <h1 class="hero-title">DataSP</h1>
        <hr class="hero-divider" />
        <p class="hero-subtitle">Mapa de Dados da Cidade</p>
      </div>
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

.hero-heading {
  display: inline-block;
  position: relative;
  padding-bottom: 1.25rem; /* espaço para o divisor absoluto */
  text-align: left;
}

.hero-title {
  font-size: 13rem;
  margin: 0.36em 0 0 -0.06em;
  font-weight: 500;
  color: black;
}

.hero-divider {
  top: calc(100% + 0.5rem);
  width: calc(100% + 2rem); /* ligeiramente maior que o título */
  margin: 0 0 0 0.5em;
  border: none;
  border-top: 2px solid black;
}

.hero-subtitle {
  font-family: 'Montserrat';
  font-size: 3.04rem;
  font-weight: 300;
  color: black;
  margin: 0;
}
</style>
