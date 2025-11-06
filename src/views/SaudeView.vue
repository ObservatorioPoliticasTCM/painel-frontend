<template>
  <SnapPage>
    <IntroPanel
      title="Saúde - Introdução"
      text=""
      :icon="saudeIcon"
    >
    </IntroPanel>
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="EnGpsY"
      title="Número de consultas em 2023"
      subtitle="Inclui as unidades municipais, estaduais e federais"
      identity="3"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="kPfKtR"
      title="Leitos e mortalidade"
      subtitle="Inclui leitos das unidades municipais, estaduais e federais"
      identity="4"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="XFZvFPN"
      title="Despesas em atencao basica e especializada"
      subtitle="Inclui apenas despesas municipais"
      identity="2"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
import IntroPanel from '../components/IntroPanel.vue'
import SnapPage from '../components/SnapPage.vue'
import saudeIcon from '@/assets/saude-black.svg'
</script>

<style scoped></style>
