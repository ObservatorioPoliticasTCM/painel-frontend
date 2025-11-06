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
    sheet="hSjCf"
    title="Óbitos (2021)"
    subtitle="Inclui óbitos de residentes do município de São Paulo"
    identity="3"
    />
    <DashboardFrame
      appid="585f0398-5876-4e29-98db-a53e3e013dc4"
      sheet="XFZvFPN"
      title="Despesas em atenção Básica e especializada (2024)"
      subtitle="Inclui apenas despesas municipais"
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
