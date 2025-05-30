<template>
  <main class="home-view">
    <div class="snap-container">
      <FrontCover />
      <CardGrid />
      <DashboardFrame appid="13e05213-9609-45cd-86df-5cbf75836d79"
                      sheet="6afd5fd9-e62b-45d8-a4e9-808bf98d534d"
                      id="dashboard-home" />
    </div>
  </main>
</template>

<script setup lang="ts">
import FrontCover from '../components/FrontCover.vue'
import CardGrid from '../components/CardGrid.vue'
import DashboardFrame from '../components/DashboardFrame.vue'
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  overflow: hidden;
  background-color: #121212; /* fundo escuro */
}

#dashboard-home {
  position: relative;
  z-index: 30;
}

/* Container de scroll com snap */
.snap-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

/* Cada componente dentro do container será um ponto de travamento */
.snap-container > * {
  scroll-snap-align: start;
}
</style>
