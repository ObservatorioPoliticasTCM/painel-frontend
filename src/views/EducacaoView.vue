<template>
  <div class="educacao-view">
    <SnapContainer>
      <AppHeader  />
      <DashboardFrame
      appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
      sheet="nvgxg"
      style="z-index: 20;"
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
