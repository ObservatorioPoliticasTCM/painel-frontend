<template>
  <SnapPage>
    <TextFrame
      title="Introdução à saúde"
      subtitle="Panorama e orientações de uso"
    >
      <p>
        Esta seção reúne painéis com indicadores de saúde pública no município de São Paulo.
        Aqui você encontra dados sobre número de consultas, disponibilidade de leitos e mortalidade,
        além de despesas municipais em atenção básica e especializada.
      </p>
      <p>
        Use a navegação por seções ou os links de cópia nos títulos para compartilhar partes específicas.
        A cobertura dos dados pode variar entre fontes municipais, estaduais e federais, conforme indicado em cada painel.
      </p>
    </TextFrame>
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
      title="Despesas em atenção Básica e especializada"
      subtitle="Inclui apenas despesas municipais"
      identity="2"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
import TextFrame from '../components/TextFrame.vue'
import SnapPage from '../components/SnapPage.vue'
</script>

<style scoped></style>
