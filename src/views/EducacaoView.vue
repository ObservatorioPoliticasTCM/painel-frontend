<template>
  <div class="educacao-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="dRrpWnj"
      title="Visão geral da educação"
      identity="1"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="8a9478a1-23b6-4165-a526-12f9d736aaa0"
      title="Número de unidades escolares"
      subtitle="Inclui as unidades escolares particulares"
      identity="2"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="nNpyj"
      title="Perfil dos educandos da rede pública municipal"
      identity="3"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="nvgxg"
      title="Perfil dos educadores da rede pública municipal"
      identity="4"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="PqxZb"
      title="Educandos estrangeiros na rede pública municipal"
      identity="5"
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
.educacao-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
