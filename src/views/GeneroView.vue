<template>
  <div class="genero-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="4835ca37-8af2-4b04-aea1-57d99911f3f5"
      sheet="a0e0c147-849d-4ab9-a43d-369e0c1e0af3"
      title="Orçamento aplicado em Ações Sensíveis a Políticas para Mulheres"
      subtitle="Inclui apenas ações voltadas exclusivamente a políticas de combate à violência contra a mulher"
      />
      <Footer />
    </SnapContainer>
    <Background />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import Background from '../components/Background.vue';
import DashboardFrame from '../components/DashboardFrame.vue';
import SnapContainer from '../components/SnapContainer.vue';
import Footer from '../components/Footer.vue';
</script>

<style scoped>
.genero-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
