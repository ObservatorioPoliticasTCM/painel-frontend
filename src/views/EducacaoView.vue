<template>
  <main class="educacao-view">
    <div class="snap-container">
        <DashboardFrame
        appid="21662bb0-1242-4c61-9668-d1ff76e8b530"
        sheet="nvgxg"
        />
    </div>
  </main>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
</script>

<style scoped>
.educacao-view {
  min-height: 100vh;
  background-color: #121212;
  overflow: hidden;
}
</style>
