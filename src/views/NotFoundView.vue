<!-- filepath: /c:/Users/855395/Git/painel-frontend/src/views/NotFound.vue -->
<template>
  <Background />
  <AppHeader />
  <NotFoundHero />
</template>
  
<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import Background from '../components/Background.vue';
import NotFoundHero from '../components/NotFoundHero.vue';

// Use este espaço para lógica, se necessário.
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121212;
  color: white;
}
</style>
