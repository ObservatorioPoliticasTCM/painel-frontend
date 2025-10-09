<template>
  <SnapPage>
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="KRXJH"
      title="Visão geral da saúde (2024)"
      identity="1"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="XFZvFPN"
      title="Despesas em atenção Básica e especializada (2024)"
      subtitle="Inclui apenas despesas municipais"
      identity="2"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="EnGpsY"
      title="Número de consultas (2023)"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      identity="3"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="kPfKtR"
      title="Leitos e mortalidades (2024q)"
      subtitle="Inclui leitos das unidades municipais, estaduais e federais"
      identity="4"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapPage from '../components/SnapPage.vue'
</script>

<style scoped></style>
