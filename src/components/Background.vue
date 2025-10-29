<template>
  <div>
    <img src="@/assets/background.jpg" alt="Fundo" class="hero-background" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
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
</style>
