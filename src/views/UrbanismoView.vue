<template>
  <div class="urbanismo-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="3fc394bc-d567-4b1b-94f4-3f87ea76a450"
      sheet="b779c56d-dee5-4a71-a575-d7e42afa8789"
      title="Áreas de risco hidrogeológico"
      identity="1"
      />
      <DashboardFrame
      appid="73f920a4-af97-412a-82d0-a12c13dd9ec0"
      sheet="QMPruE"
      title="Área de parques municipais"
      subtitle="Não inclui os parques Estaduais e Federais"
      identity="2"
      />
      <DashboardFrame
      appid="fee34b2e-4e55-4960-8358-c2a9178642ff"
      sheet="bjqsPD"
      title="Quantidade de pessoas atendidas no programa Atende +"
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
.urbanismo-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
