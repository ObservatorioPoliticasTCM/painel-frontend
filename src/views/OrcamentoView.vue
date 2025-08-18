<template>
  <SnapPage>
    <DashboardFrame
      appid="01ec34f7-4862-43f5-bd71-0413d71dbe97"
      sheet="UMJqywF"
      identity="1"
      title="Variação do Orçamento por Função \nde Governo em 2024"
    />
    <DashboardFrame
      appid="6c0cd072-faf6-4bc4-9251-7ef5479ff6af"
      sheet="bd2c8bf9-d161-43ed-a967-b96342558630"
      identity="2"
      title="Variação detalhada do Orçamento por Função \nde Governo em 2024"
    />
    <DashboardFrame
      appid="daf572a6-2fda-44c6-b100-77dd018de06f"
      sheet="826cc7f9-9f5d-498f-aba1-af1bd4aca5ba"
      identity="3"
      title="Variação detalhada do Orçamento por Órgão \nem 2024"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import SnapPage from '@/components/SnapPage.vue'
import DashboardFrame from '@/components/DashboardFrame.vue'
</script>
