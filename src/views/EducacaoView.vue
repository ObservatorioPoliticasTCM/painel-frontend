<template>
  <SnapPage>
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="dRrpWnj"
      title="Visão geral da educação (2024)"
      identity="1"
      methodology-link="/infos/notas/educacao/1_notas_metodologicas_visao_geral_ok.pdf"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="mSNDU"
      title="Despesas liquidadas na Função Educação (2024)"
      identity="3"
      methodology-link="/infos/notas/educacao/2_notas_metodologicas_despesas_ok.pdf"
      download-link="/dados/educacao/orcamento.csv"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="8a9478a1-23b6-4165-a526-12f9d736aaa0"
      title="Número de escolas da rede municipal (2024)"
      identity="3"
      methodology-link="/infos/notas/educacao/3_notas_metodologicas_escolas_ok.pdf"
      download-link="/dados/educacao/escolas-municipais.csv"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="nvgxg"
      title="Perfil dos professores da rede pública municipal (2024)"
      identity="4"
      methodology-link="/infos/notas/educacao/4_notas_metodologicas_educ_professores_ok.pdf"
      download-link="/dados/educacao/servidores-perfil.csv"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="nNpyj"
      title="Perfil dos alunos da rede municipal (2024)"
      identity="5"
      methodology-link="/infos/notas/educacao/5_notas_metodologicas_alunos_ok.pdf"
      download-link="/dados/educacao/perfil-dos-educandos.csv"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="jRpJk"
      title="Alunos da rede municipal beneficiários do Bolsa Família (2024)"
      identity="6"
      methodology-link="/infos/notas/educacao/6_notas_metodologicas_bolsa_familia_ok.pdf"
      download-link="/dados/educacao/beneficiarios-pbf.csv"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="PqxZb"
      title="Alunos estrangeiros na rede municipal (2024)"
      identity="7"
      methodology-link="/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf"
      download-link="/dados/educacao/educandos-estrangeiros.csv"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '@/components/DashboardFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
</script>

<style scoped></style>
