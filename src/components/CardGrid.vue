<template>
    <div class="grid">
      <!-- Célula de informação -->
      <div class="info-cell">
        <h2>Dados</h2>
        <p>Você pode consultar nos cards os indicadores específicos de cada tema...</p>
      </div>
  
      <!-- Cards com efeito 3D -->
      <Card3D
        icon="educacao.svg"
        title="Educação"
        backText="Veja a informações sobre as escolas, o orçamento destinado a educação, os professores e os alunos de cada Subprefeitura."
        bgColor="#faca72"
        navLink="/educacao"
      />
      <Card3D
        icon="genero.svg"
        title="Gênero"
        backText="Veja qual o orçamento destinado pela Prefeitura às mulheres em políticas públicas específicas ou focalizações em políticas públicas mais amplas."
        bgColor="#7163aa"
        navLink="/genero"
      />
      <Card3D
        icon="saude.svg"
        title="Saúde"
        backText="Veja informações detalhadas sobre o orçamento destinado à saúde, a quantidade de consultas e leitos disponíveis em cada Subprefeitura."
        bgColor="#87c8ef"
        navLink="/saude"
      />
      <Card3D
        icon="urbanismo.svg"
        title="Urbanismo"
        backText="Veja informações sobre os parques, áreas de risco e políticas públicas de habitação no município de São Paulo."
        bgColor="#a5bb5b"
        navLink="/urbanismo"
      />
      <Card3D
        icon="orcamento.svg"
        title="Regionalização do Orçamento"
        backText="Veja como o orçamento da Prefeitura se distribuiu entre as diferentes áreas e como evoluiu ao longo de 2024."
        bgColor="#e57c76"
        navLink="/orcamento"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import Card3D from '@/components/Card3D.vue'
  </script>
  
  <style scoped>
  .grid {
    position: relative; /* adicionado para estabelecer um novo contexto de empilhamento */
    z-index: 20; /* aumentado para que os cards apareçam acima da overlay */
    display: grid;
    height: 90vh;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr; /* Adicionado para células com altura uniforme */
    gap: 1.5rem;
    max-width: 74.2rem;
    margin: 5vh auto;
    padding: 2rem;
    background-color: transparent;
  }
  
  /* Nova célula para texto */
  .info-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-align: center;
    z-index: 12;
    font-size: 1.5rem;
  }
  
  .info-cell h2 {
    margin: 0 0 0.5rem 0;
    font-size: 3.6rem;
    font-weight: 800;
    text-transform: uppercase;
  }
  
  .info-cell p {
    margin: 0;
  }
  
  .text-area-container {
    grid-column: span 3;
  }
  
  textarea {
    width: 100%;
    height: 9.375rem;
    padding: 1rem;
    font-size: 1rem;
    border: 0.0625rem solid #ccc;
    border-radius: 0.5rem;
    resize: vertical;
  }
  </style>
