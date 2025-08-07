<template>
  <div class="background">
    <!-- Versão 2 (gradiente) -->
    <div v-if="props.version === 'v2'">
      <div class="hero-background-v2"></div>
      <img src="@/assets/logo.svg" alt="Logo Fundo" class="logo-background" />
    </div>

    <!-- Versão Padrão/1 (imagem) -->
    <div v-else>
      <div class="overlay"></div> <!-- camada cinza -->
      <img src="@/assets/background.jpg" alt="Fundo" class="hero-background" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  version?: string
}>()
</script>

<style scoped>
.background {
  height: 100vh;
  position: absolute;
}

.background>div {
  overflow: hidden;
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

/* Estilos para a versão 2 */
.hero-background-v2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #94b9ff46, #6292ed97);
  z-index: 0; /* fundo atrás de tudo */
  user-select: none;
  pointer-events: none;
}

.logo-background {
  display: inline;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  opacity: 0.07;
  z-index: 5;
  user-select: none;
  pointer-events: none;
}
</style>
