<template>
  <main class="home-view">
    <SnapContainer>
      <FrontCover />
      <CardGrid />
      <DashboardFrame appid="13e05213-9609-45cd-86df-5cbf75836d79"
                      sheet="6afd5fd9-e62b-45d8-a4e9-808bf98d534d"
                      id="dashboard-home" />
    </SnapContainer>
  </main>
</template>

<script setup lang="ts">
import FrontCover from '../components/FrontCover.vue'
import CardGrid from '../components/CardGrid.vue'
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapContainer from '../components/SnapContainer.vue'
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
</style>
