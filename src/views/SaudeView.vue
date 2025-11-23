<template>
  <SnapPage>
    <IntroPanel title="Visão geral dos dashboards de Saúde" subtitle="" :full-height="false" :use-placeholder="false"
      :snap="true">
      <p>
        O Observatório de Políticas Públicas do Tribunal de Contas do Município de São Paulo (OPP-TCMSP)
        iniciou a criação do Portal DATA SP – Mapa de Dados da Cidade, reunindo informações e estatísticas com o
        objetivo de avaliar a eficiência do gasto público municipal em saúde, permitindo comparações entre
        diferentes territórios da cidade e, assim, avaliar a eficiência da execução orçamentária.
      </p>
      <p>
        O Grupo de Trabalho Saúde (GT Saúde – OPP) elegeu a publicação de 2022 do consórcio Ipea/Conass/OPAS,
        intitulada "SUS: Avaliação da Eficiência do Gasto Público em Saúde", em especial o capítulo 7 —
        "Eficiência nas Macrorregiões de Saúde no Sistema Único de Saúde: uma abordagem comparativa 2008-2017",
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
    <DashboardFrame appid="585f0398-5876-4e29-98db-a53e3e013dc4" sheet="EnGpsY" title="Número de consultas (2024)"
      subtitle="Inclui as unidades municipais, estaduais e federais" identity="1"
      download-link="/dados/saude/consultas.zip" />
    <DashboardFrame appid="585f0398-5876-4e29-98db-a53e3e013dc4" sheet="kPfKtR" title="Leitos (2024)"
      subtitle="Inclui leitos das unidades municipais, estaduais e federais" identity="2"
      download-link="/dados/saude/leitos-internacao-complementares.zip" />
    <DashboardFrame appid="585f0398-5876-4e29-98db-a53e3e013dc4" sheet="hSjCf" title="Taxa de mortalidade (2024)"
      subtitle="Inclui óbitos de residentes do município de São Paulo" identity="3"
      download-link="/dados/saude/mortalidade.zip" methodology-link="/infos/notas/saude/taxa-de-mortalidade-2024.pdf" />
    <DashboardFrame appid="585f0398-5876-4e29-98db-a53e3e013dc4" sheet="XFZvFPN"
      title="Despesas em atenção Básica e especializada (2024)" subtitle="Inclui apenas despesas municipais"
      identity="4" download-link="/dados/saude/despesas.zip" />
  </SnapPage>
</template>

<script setup lang="ts">
import DashboardFrame from '@/components/DashboardFrame.vue'
import SnapPage from '@/components/SnapPage.vue'
import IntroPanel from '@/components/IntroPanel.vue'
</script>
