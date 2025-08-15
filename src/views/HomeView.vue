<template>
  <main class="home-view">
    <SnapContainer class="snap-container">
      <Background :version="backgroundVersion" />
      <FrontCover />
      <CardGrid />
      <DashboardFrame appid="13e05213-9609-45cd-86df-5cbf75836d79"
                      sheet="6afd5fd9-e62b-45d8-a4e9-808bf98d534d"
                      id="dashboard-home" />
      <Sitemap />
      <Footer />
    </SnapContainer>
    <ToggleSwitch
      class="design-toggle"
      title="Altere a versão do design"
      leftButtonText="Versão com foto"
      rightButtonText="Versão com marca d'água"
      v-model="isV2"
    />
  </main>
</template>

<script setup lang="ts">
import FrontCover from '../components/FrontCover.vue'
import CardGrid from '../components/CardGrid.vue'
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapContainer from '../components/SnapContainer.vue'
import Background from '../components/Background.vue'
import Footer from '../components/Footer.vue'
import ToggleSwitch from '../components/ToggleSwitch.vue'
import { useDesignVersion } from '../composables/useDesignVersion'
import Sitemap from '../components/Sitemap.vue'

const { isV2, backgroundVersion } = useDesignVersion()
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  overflow: hidden;
}

.snap-container {
  position: relative;
}

.design-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

#dashboard-home {
  position: relative;
  z-index: 30;
}
</style>
