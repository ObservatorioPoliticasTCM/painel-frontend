<template>
  <main class="apresentacao-page">
    <Background />
    <div class="apresentacao-shell">
      <AppHeader />
      <section class="apresentacao-content">
        <IntroPanel
          title="Carta de Apresentação"
          subtitle=""
          :full-height="false"
          :use-placeholder="false"
        >
          <div class="carta-texto">
            <p>
              Vivemos tempos em que a informação circula em velocidade vertiginosa, mas nem sempre com a profundidade necessária para iluminar o caminho da cidadania. Em meio a esse cenário, o DataSP nasce como uma resposta concreta ao desafio de tornar o conhecimento público acessível, compreensível e útil para todos — especialmente para aqueles que desejam participar ativamente da construção de uma cidade mais justa, democrática e transparente.
            </p>
            <p>
              O DataSP é mais do que um portal de dados. É um convite à reflexão, à curiosidade e ao engajamento. Ao reunir indicadores sobre educação, saúde, gênero, urbanismo, habitação e orçamento, o projeto oferece aos cidadãos uma ferramenta poderosa para compreender as políticas públicas que moldam o cotidiano da cidade de São Paulo. Mas ele vai além dos números: propõe uma leitura crítica e contextualizada da realidade, com apoio de vídeos explicativos, glossários e notas técnicas que ajudam a decifrar o vocabulário institucional e técnico que, muitas vezes, afasta o cidadão da esfera pública.
            </p>
            <p>
              A nova seção Guia Técnico, por exemplo, é uma expressão clara desse compromisso. Por meio de vídeos curtos e acessíveis, buscamos traduzir conceitos complexos em linguagem simples, sem perder o rigor. Afinal, a democracia se fortalece quando todos têm condições de compreender e questionar as decisões que impactam suas vidas.
            </p>
            <p>
              A Escola de Contas, como braço pedagógico do Tribunal de Contas, tem como missão formar e informar. E formar, aqui, não significa apenas transmitir conhecimento, mas cultivar o pensamento crítico, o senso de justiça e o espírito público. O DataSP é uma extensão dessa missão — um espaço onde o controle social se encontra com a educação cidadã.
            </p>
            <p>
              Ao navegar pelo portal, espero que cada visitante se sinta não apenas informado, mas também inspirado. Inspirado a perguntar, a propor, a participar. Porque a cidade que queremos não se constrói apenas com boas intenções, mas com dados, evidências e diálogo. E o diálogo começa quando todos têm acesso às mesmas informações, com clareza e respeito à diversidade de olhares.
            </p>
            <p>
              A experiência nos ensina que o conhecimento é caminho, não âncora. Ele nos move, nos transforma, nos desafia. Que o DataSP seja, portanto, um ponto de partida para novas jornadas de aprendizado e participação. Que ele sirva como ponte entre o cidadão e o poder público, entre o dado e a decisão, entre o presente e o futuro que desejamos construir.
            </p>
            <p>
              Seja bem-vindo ao DataSP. Que este espaço seja seu, nosso, da cidade.
            </p>
            <p class="assinatura">
              João Antonio da Silva Filho
              <span>Conselheiro do Tribunal de Contas do Município de São Paulo</span>
              <span>Supervisor da Escola de Contas</span>
            </p>
          </div>
        </IntroPanel>
      </section>
      <Sitemap />
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import Background from '@/components/Background.vue'
import Footer from '@/components/Footer.vue'
import IntroPanel from '@/components/IntroPanel.vue'
import Sitemap from '@/components/Sitemap.vue'
</script>

<style scoped>
.apresentacao-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.apresentacao-shell {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 3rem);
}

.apresentacao-content {
  padding: clamp(1rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem);
  display: flex;
  justify-content: center;
}

.carta-texto {
  font-size: 1.05rem;
}

.carta-texto p {
  margin: 0 0 1.3rem;
}

.carta-texto .assinatura {
  font-weight: 600;
  line-height: 1.5;
  margin-top: 2rem;
}

.carta-texto .assinatura span {
  display: block;
  font-weight: 400;
  font-size: 0.95em;
}

@media (max-width: 48rem) {
  .apresentacao-content {
    padding: clamp(1rem, 4vw, 2rem);
  }
}
</style>
