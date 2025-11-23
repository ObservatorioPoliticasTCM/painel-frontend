<template>
  <SnapPage>
    <DashboardFrame
      appid="d73227fb-7244-4216-980d-8e2b08f23f05"
      sheet="XUzXjdp"
      title="Visão geral de Gênero"
      identity="0"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="c609507f-709a-434f-8430-5f1f74121740"
      title="Despesas municipais sensíveis a gênero em projetos/atividades com foco exclusivo em políticas para as mulheres"
      identity="1"
      methodology-link="/infos/notas/genero/DESPESAS MUNICIPAIS EM AÇÕES VOLTADAS EXCLUSIVAMENTE A POLÍTICAS DE PROMOÇÃO AOS DIREITOS DAS MULHERES 1.pdf"
      download-link="/dados/genero/orçamento-exclusivo.csv"
    />
    <DashboardFrame
      appid="aa9f4f6c-2007-47d9-ab3a-588c87a4d50e"
      sheet="b5eaabe4-7475-4e0f-ab78-92f912214961"
      title="Despesas municipais sensíveis a gênero em projetos/atividades sem foco exclusivo em políticas para mulheres (2023)"
      identity="2"
      methodology-link="/infos/notas/genero/DESPESAS MUNICIPAIS EM AÇÕES PARCIALMENTE FOCALIZADAS POR INICIATIVA DISCRICIONÁRIA DA GESTÃO MUNICIPAL (2023).pdf"
      download-link="/dados/genero/orçamento-não-exclusivo-2023.csv"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="3d5ba550-f947-4ba8-a12e-31ee20c05521"
      title="Plano Municipal de Políticas para as Mulheres - Habitação"
      subtitle="Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)"
      identity="3"
      :methodology-link="notaPMPM"
      download-link="/dados/genero/orçamento-pmpm-habitação.csv"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="62d5961d-3b5a-4872-adb5-0c79b489f70c"
      title="Plano Municipal de Políticas para as Mulheres - Educação"
      subtitle="Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)"
      identity="4"
      :methodology-link="notaPMPM"
      download-link="/dados/genero/orçamento-pmpm-educação.csv"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="fde5eb98-c713-45ad-b134-fc6d58a188e5"
      title="Plano Municipal de Políticas para as Mulheres - Assistencia Social"
      subtitle="Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)"
      identity="5"
      :methodology-link="notaPMPM"
      download-link="/dados/genero/orçamento-pmpm-assistência-social.csv"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="7931a494-f4b5-4f34-a3e2-c57f08b8d53a"
      title="Plano Municipal de Políticas para as Mulheres - Direitos Humanos"
      subtitle="Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)"
      identity="6"
      :methodology-link="notaPMPM"
      download-link="/dados/genero/orçamento-pmpm-direitos-humanos.csv"
    />
    <DashboardFrame
      appid="e808b4ea-ded0-41c6-b5b0-8845934d8369"
      sheet="49e484ce-2ad7-41a1-b727-0680f3a9036b"
      title="Plano Municipal de Políticas para as Mulheres - Trabalho"
      subtitle="Despesas municipais sensíveis a gênero em projeto/atividade sem foco exclusivo em políticas para as mulheres, de acordo com o PMPM (2017-2020)"
      identity="7"
      :methodology-link="notaPMPM"
      download-link="/dados/genero/orçamento-pmpm-trabalho.csv"
    />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '../components/DashboardFrame.vue'
import SnapPage from '../components/SnapPage.vue'
const notaPMPM = '/infos/notas/genero/DESPESAS MUNICIPAIS SEM FOCO EXCLUSIVO NAS MULHERES 1.pdf'
</script>

<style scoped></style>
