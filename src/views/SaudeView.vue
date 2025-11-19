<template>
  <SnapPage>
    <IntroPanel
          title="Visão geral dos dashboards de Saúde"
          subtitle=""
          :full-height="false"
          :use-placeholder="false"
          :snap="true">
        <p>
          O Observatório de Políticas Públicas do Tribunal de Contas do Município de São Paulo (OPP-TCMSP)
          iniciou a criação do Portal DATA SP – Mapa de Dados da Cidade, reunindo informações e estatísticas com o
          objetivo de avaliar a eficiência do gasto público municipal em saúde, permitindo comparações entre
          diferentes territórios da cidade e, assim, avaliar a eficiência da execução orçamentária.
        </p>
        <p>
          O Grupo de Trabalho Saúde (GT Saúde – OPP) elegeu a publicação de 2022 do consórcio Ipea/Conass/OPAS,
          intitulada “SUS: Avaliação da Eficiência do Gasto Público em Saúde”, em especial o capítulo 7 —
          “Eficiência nas Macrorregiões de Saúde no Sistema Único de Saúde: uma abordagem comparativa 2008-2017”,
          que apresenta metodologia comparativa de eficiência do gasto entre macrorregiões do Brasil.
        </p>
        <p>
          Tal referência propõe metodologia comparativa bem fundamentada na literatura científica para o contexto
          das macrorregiões do país. Assumimos o desafio de adaptar essa metodologia ao contexto das subprefeituras
          do Município de São Paulo. Foram adotados na íntegra os 14 indicadores propostos pelo estudo seminal.
        </p>
        <p>
          A adaptação necessária para transpor a metodologia do cenário nacional ao intramunicipal enfrentou
          dificuldades devidas à ausência de alguns dados não computados pela Secretaria Municipal da Saúde,
          contornada parcialmente pela adoção de parâmetros da Organização para a Cooperação e Desenvolvimento
          Econômico (OCDE). Outros dados vieram de fontes oficiais (SMS-SP, CNES, ANS, IBGE) ou foram estimados
          quando indisponíveis por subprefeitura.
        </p>
        <p>
          Os dashboards da saúde foram organizados no DataSP conforme os 14 indicadores da referência nacional.
          Após as adaptações ao contexto municipal, as variáveis escolhidas se mostraram adequadas para avaliar a
          eficiência do gasto público em saúde, sem impedir que novos aperfeiçoamentos sejam incorporados.
        </p>
        <p>
          Esse conjunto compõe o Painel Saúde do Portal DATA SP, oferecendo base estruturada para análise e
          comparação dos investimentos públicos em saúde no Município de São Paulo, lembrando que alguns dashboards
          apresentam apenas dados e não indicadores — ponto que tratamos como oportunidade de aprimoramento
          contínuo para o DataSP.
        </p>
    </IntroPanel>
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
    title="Taxa de mortalidade (2024)"
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
import DashboardFrame from '@/components/DashboardFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import IntroPanel from '@/components/IntroPanel.vue'
</script>

<style scoped>
:deep(.frame-header),
:deep(.frame-subtitle) {
  display: none;
}

:deep(.text-content) {
  align-items: flex-start;
  justify-content: flex-start;
  padding: clamp(0.75rem, 2vh, 1.5rem) clamp(0.75rem, 4vw, 2.5rem);
}

:deep(.text-frame) {
  height: auto;
  min-height: 96vh;
  /* scroll-snap-align: none;
  scroll-snap-stop: normal; */
}

.saude-letter-surface {
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: clamp(1rem, 3vw, 2.25rem);
  border-radius: 1.25rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(12, 106, 255, 0.06));
  box-shadow: 0 1.75rem 3.5rem rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, 1.5vw, 1.5rem);
  overflow: visible;
}

.saude-letter__header {
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.saude-letter__eyebrow {
  text-transform: uppercase;
  font-size: clamp(0.65rem, 1.6vw, 0.85rem);
  letter-spacing: 0.35em;
  margin: 0;
  color: rgba(13, 27, 42, 0.7);
}

.saude-letter__title {
  font-size: clamp(2.4rem, 6vw, 4rem);
  margin: 0;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.saude-letter__subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 52ch;
  margin: 0 auto;
  color: rgba(13, 27, 42, 0.85);
  text-align: center;
  align-items: center;
}

.saude-letter {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 2vw, 2rem);
}

.saude-letter__columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: clamp(1.25rem, 2.5vw, 2.5rem);
}

.saude-letter__column {
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  line-height: 1.65;
  text-align: justify;
}

.saude-letter__column p {
  margin: 0 0 1.1rem;
  color: rgba(13, 27, 42, 0.92);
}

.saude-letter__column p:last-child {
  margin-bottom: 0;
}

@media (max-width: 48rem) {
  .saude-letter__eyebrow {
    letter-spacing: 0.2em;
  }
}

@media (max-height: 44rem) {
  .saude-letter__title {
    font-size: clamp(2rem, 5vw, 3.2rem);
  }

  .saude-letter__subtitle {
    font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  }

  .saude-letter__column {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    line-height: 1.55;
  }
}
</style>
