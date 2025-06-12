<template>
  <div class="saude-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="EnGpsY"
      title="Número de consultas em 2023"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      identity="1"
      />
      <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="kPfKtR"
      title="Leitos e mortalidade"
      subtitle="Inclui leitos das unidades municipais, estaduais e federais"
      identity="2"
      />
      <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="XFZvFPN"
      title="Despesas em atenção Básica e especializada"
      subtitle="Inclui apenas unidades municipais"
      identity="3"
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
.saude-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
