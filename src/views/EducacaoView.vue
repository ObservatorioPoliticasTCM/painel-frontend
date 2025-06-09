<template>
  <div class="educacao-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="8a9478a1-23b6-4165-a526-12f9d736aaa0"
      identity="1"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="nNpyj"
      identity="2"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="nvgxg"
      identity="3"
      />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="PqxZb"
      identity="4"
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
.educacao-view {
  min-height: 100vh;
  overflow: hidden;
}
</style>
