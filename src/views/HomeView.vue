<template>
  <main class="home-view">
    <AppHeader />
    <HomeHero />
    <CardGrid />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import HomeHero from '../components/HomeHero.vue'
import CardGrid from '../components/CardGrid.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212; /* fundo escuro */
}
</style>
