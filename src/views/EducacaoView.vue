<template>
  <SnapPage>
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="dRrpWnj"
      title="Visão geral da educação (2024)"
      identity="1"
      :methodology-link="notaVisaoGeral"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="mSNDU"
      title="Despesas com educação na rede pública municipal (2024)"
      identity="3"
      :methodology-link="notaDespesas"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="8a9478a1-23b6-4165-a526-12f9d736aaa0"
      title="Número de escolas da rede pública municipal (2024)"
      identity="3"
      :methodology-link="notaEscolas"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="nvgxg"
      title="Perfil dos professores da rede pública municipal (2024)"
      identity="4"
      :methodology-link="notaProfessores"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="nNpyj"
      title="Perfil dos alunos da rede pública municipal (2024)"
      identity="5"
      :methodology-link="notaAlunos"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="jRpJk"
      title="Alunos da rede pública municipal beneficiários do Bolsa Família (2024)"
      identity="6"
      :methodology-link="notaBolsaFamilia"
    />
    <DashboardFrame
      appid="ee3bc48f-da4d-403a-a4fe-4da01cb29ee9"
      sheet="PqxZb"
      title="Alunos estrangeiros na rede pública municipal (2024)"
      identity="7"
      :methodology-link="notaAlunosEstrangeiros"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '@/components/DashboardFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import notaVisaoGeral from '@/assets/infos/notas/educacao/1_notas_metodologicas_visao_geral_ok.pdf'
import notaDespesas from '@/assets/infos/notas/educacao/2_notas_metodologicas_despesas_ok.pdf'
import notaEscolas from '@/assets/infos/notas/educacao/3_notas_metodologicas_escolas_ok.pdf'
import notaProfessores from '@/assets/infos/notas/educacao/4_notas_metodologicas_educ_professores_ok.pdf'
import notaAlunos from '@/assets/infos/notas/educacao/5_notas_metodologicas_alunos_ok.pdf'
import notaBolsaFamilia from '@/assets/infos/notas/educacao/6_notas_metodologicas_bolsa_familia_ok.pdf'
import notaAlunosEstrangeiros from '@/assets/infos/notas/educacao/7_notas_metodologicas_alunos_estrangeiros_ok.pdf'
</script>

<style scoped></style>
