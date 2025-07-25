<template>
  <Background />
  <AppHeader />
  <NotFoundHero />
  <Footer />
</template>
  
<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import Background from '../components/Background.vue';
import NotFoundHero from '../components/NotFoundHero.vue';
import Footer from '../components/Footer.vue';

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
