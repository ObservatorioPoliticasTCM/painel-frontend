<template>
  <ScrollablePage>
    <main class="presentation-page">
      <div class="presentation-shell">
        <section class="presentation-content">
          <h1 class="presentation-title">Carta de apresentação</h1>
          <IntroPanel title="" subtitle="" :full-height="false" :use-placeholder="false" :snap="false">
            <p>
              É com grande satisfação que inauguramos um novo instrumento dedicado ao fortalecimento das iniciativas
              públicas e à qualificação do debate sobre políticas governamentais: o DataSP. Este portal nasce para
              servir de referencial àqueles que se preocupam não apenas em preservar boas práticas, mas sobretudo em
              construir novos caminhos para o futuro.
            </p>
            <p>
              O DataSP, iniciativa do Observatório de Políticas Públicas, vinculado ao TCMSP, tem como propósito tornar
              públicos, de forma clara e acessível, os dados da execução orçamentária, relacionando-os aos resultados
              concretos das políticas públicas. Mais do que um simples repositório de informações, trata-se de um espaço
              de transparência e inteligência coletiva, que organiza indicadores sobre educação, saúde, gênero,
              urbanismo, habitação e orçamento, oferecendo ferramentas que permitem compreender, analisar e acompanhar a
              atuação do poder público.
            </p>
            <p>
              O portal se propõe a ir muito além dos números. Ele oferece uma leitura crítica e contextualizada da
              realidade, disponibilizando vídeos explicativos, glossários e notas técnicas que facilitam a compreensão
              do vocabulário institucional e técnico. Assim, o DataSP busca ampliar a consciência crítica, fortalecendo
              o controle social e estimulando a participação cidadã.
            </p>
            <p>
              O alcance do DataSP é amplo e estratégico. Seu público-alvo envolve a administração pública, a imprensa, a
              sociedade civil organizada e todos os cidadãos interessados em entender melhor as políticas que moldam a
              vida na cidade.
            </p>
            <p>
              Ao inspirar o cidadão a perguntar, propor e participar, o portal se apresenta como uma verdadeira ponte
              entre o indivíduo e o poder público — entre dados e decisões, entre presente e futuro. Ele incentiva o
              olhar crítico, o diálogo construtivo e o engajamento democrático.
            </p>
            <p>
              Por isso, convidamos você a conhecer, explorar e fazer parte do DataSP.
            </p>
            <p>
              Este é um espaço que pertence a todos os que acreditam na importância da transparência, da participação
              social e do aperfeiçoamento contínuo das políticas públicas.
            </p>
            <p>
              O DataSP é de todos nós — e é com todos nós que ele seguirá crescendo.
            </p>
            <p class="signature">
              João Antonio da Silva Filho
              <span>Conselheiro do Tribunal de Contas do Município de São Paulo</span>
              <span>Supervisor da Escola de Contas</span>
            </p>
          </IntroPanel>
        </section>
      </div>
    </main>
  </ScrollablePage>
</template>

<script setup lang="ts">
import IntroPanel from '@/components/IntroPanel.vue'
import ScrollablePage from '@/components/ScrollablePage.vue';
</script>

<style scoped>
.presentation-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.presentation-shell {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 3rem);
}

.presentation-content {
  padding: 1em 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.presentation-title {
  font-size: 4rem;
  margin-bottom: 2.3rem;
  font-weight: 400;
  text-transform: uppercase;
  width: 100%;
}

.signature {
  font-weight: 600;
  line-height: 1.5;
  margin-top: 2rem;
}

.signature span {
  display: block;
  font-weight: 400;
  font-size: 0.95em;
}

@media (max-width: 48rem) {
  .presentation-content {
    padding: 1em 5vw;
  }

  .presentation-title {
    font-size: 2.5rem;
  }
}
</style>
