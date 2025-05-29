<template>
  <section class="hero-section">
    <div class="overlay"></div> <!-- camada cinza -->
    <div class="hero-content">
      <h1 class="hero-title">PAINEL DE INDICADORES</h1>
      <p class="hero-subtitle">OBSERVATÓRIO DE POLÍTICAS PÚBLICAS</p>
    </div>
    <img src="@/assets/background.jpg" alt="Fundo" class="hero-background" />
  </section>
</template>

<script setup lang="ts"></script>

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
  background-color: #000; /* fallback */
}

.hero-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0; /* fundo atrás de tudo */
  user-select: none;
  pointer-events: none;
}

/* nova camada cinza translúcida */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ababab; /* cinza com 40% de opacidade */
  opacity: 0.5;
  z-index: 5; /* entre o fundo (0) e o conteúdo (10) */
  pointer-events: none; /* não bloqueia cliques */
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
}

.hero-subtitle {
  font-size: 3.75rem;
  font-weight: 500;
  color: black;
  margin: 0;
}
</style>
