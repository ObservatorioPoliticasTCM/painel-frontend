<template>
  <SnapPage>
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="EnGpsY"
      title="Número de consultas (2024)"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      identity="1"
      download-link="/dados/saude/consultas.csv"
    />
    <DashboardFrame
    appid="585f0398-5876-4e29-98db-a53e3e013dc4"
    sheet="kPfKtR"
    title="Leitos (2024)"
    subtitle="Inclui leitos das unidades municipais, estaduais e federais"
    identity="2"
    download-link="/dados/saude/leitos-internacao-complementares.csv"
    />
    <DashboardFrame
    appid="585f0398-5876-4e29-98db-a53e3e013dc4"
    sheet="hSjCf"
    title="Óbitos (2021)"
    subtitle="Inclui óbitos de residentes do município de São Paulo"
    identity="3"
    download-link="/dados/saude/mortalidade.csv"
    methodology-link="/infos/notas/saude/taxa-de-mortalidade-2024.pdf"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="XFZvFPN"
      title="Despesas em atenção Básica e especializada (2024)"
      subtitle="Inclui apenas despesas municipais"
      identity="4"
      download-link="/dados/saude/despesas.csv"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapPage from '../components/SnapPage.vue'
</script>

<style scoped></style>
