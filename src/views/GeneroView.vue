<template>
  <div class="genero-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="938edf5e-7b67-4bbb-8b2f-5a97ed6f0afd"
      sheet="93cf2941-83d4-4b8a-bac9-40471776f2fe"
      title="Orçamento aplicado em Ações Sensíveis a Políticas para Mulheres"
      subtitle="Inclui apenas ações voltadas exclusivamente a políticas de combate à violência contra a mulher"
      select="$::grupoA,E1"
      />
    </SnapContainer>
    <Background />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import Background from '../components/Background.vue';
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapContainer from '../components/SnapContainer.vue';
</script>

<style scoped>
.genero-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
