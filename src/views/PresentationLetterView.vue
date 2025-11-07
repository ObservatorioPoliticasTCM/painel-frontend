<template>
  <ScrollablePage>
    <main class="presentation-page">
      <div class="presentation-shell">
        <section class="presentation-content">
          <h1 class="presentation-title">Carta de apresentação do DataSP</h1>
          <IntroPanel title="" subtitle="" :full-height="false" :use-placeholder="false">
            <div class="letter-body">
              <p>
                Vivemos tempos em que a informação circula em velocidade vertiginosa, mas nem sempre com a profundidade
                necessária para iluminar o caminho da cidadania. Em meio a esse cenário, o DataSP nasce como uma
                resposta concreta ao desafio de tornar o conhecimento público acessível, compreensível e útil para todos
                — especialmente para aqueles que desejam participar ativamente da construção de uma cidade mais justa,
                democrática e transparente.
              </p>
              <p>
                O DataSP é mais do que um portal de dados. É um convite à reflexão, à curiosidade e ao engajamento. Ao
                reunir indicadores sobre educação, saúde, gênero, urbanismo, habitação e orçamento, o projeto oferece
                aos cidadãos uma ferramenta poderosa para compreender as políticas públicas que moldam o cotidiano da
                cidade de São Paulo. Mas ele vai além dos números: propõe uma leitura crítica e contextualizada da
                realidade, com apoio de vídeos explicativos, glossários e notas técnicas que ajudam a decifrar o
                vocabulário institucional e técnico que, muitas vezes, afasta o cidadão da esfera pública.
              </p>
              <p>
                A nova seção Guia Técnico, por exemplo, é uma expressão clara desse compromisso. Por meio de vídeos
                curtos e acessíveis, buscamos traduzir conceitos complexos em linguagem simples, sem perder o rigor.
                Afinal, a democracia se fortalece quando todos têm condições de compreender e questionar as decisões que
                impactam suas vidas.
              </p>
              <p>
                A Escola de Contas, como braço pedagógico do Tribunal de Contas, tem como missão formar e informar. E
                formar, aqui, não significa apenas transmitir conhecimento, mas cultivar o pensamento crítico, o senso
                de justiça e o espírito público. O DataSP é uma extensão dessa missão — um espaço onde o controle social
                se encontra com a educação cidadã.
              </p>
              <p>
                Ao navegar pelo portal, espero que cada visitante se sinta não apenas informado, mas também inspirado.
                Inspirado a perguntar, a propor, a participar. Porque a cidade que queremos não se constrói apenas com
                boas intenções, mas com dados, evidências e diálogo. E o diálogo começa quando todos têm acesso às
                mesmas informações, com clareza e respeito à diversidade de olhares.
              </p>
              <p>
                A experiência nos ensina que o conhecimento é caminho, não âncora. Ele nos move, nos transforma, nos
                desafia. Que o DataSP seja, portanto, um ponto de partida para novas jornadas de aprendizado e
                participação. Que ele sirva como ponte entre o cidadão e o poder público, entre o dado e a decisão,
                entre o presente e o futuro que desejamos construir.
              </p>
              <p>
                Seja bem-vindo ao DataSP. Que este espaço seja seu, nosso, da cidade.
              </p>
              <p class="signature">
                João Antonio da Silva Filho
                <span>Conselheiro do Tribunal de Contas do Município de São Paulo</span>
                <span>Supervisor da Escola de Contas</span>
              </p>
            </div>
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
  margin-bottom: 0;
  font-weight: 400;
  text-transform: uppercase;
  width: 100%;
}

.letter-body {
  font-size: 1.05rem;
}

.letter-body p {
  margin: 0 0 1.3rem;
}

.letter-body .signature {
  font-weight: 600;
  line-height: 1.5;
  margin-top: 2rem;
}

.letter-body .signature span {
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
