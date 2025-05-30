<template>
    <div class="grid">
      <!-- Célula de informação -->
      <div class="info-cell">
        <p>Você pode consultar os indicadores específicos de cada tema...</p>
      </div>
  
      <!-- Cards com efeito 3D -->
      <Card3D
        icon="📚"
        title="Educação"
        backText="Texto adicional sobre ideias."
        bgColor="#faca72"
      />
      <Card3D
        icon="♀️"
        title="Gênero"
        backText="Informações sobre o lançamento."
        bgColor="#7163aa"
      />
      <Card3D
        icon="🩺"
        title="Saúde"
        backText="Detalhes dos componentes utilizados."
        bgColor="#87c8ef"
      />
      <Card3D
        icon="🗺"
        title="Urbanismo"
        backText="Dados e gráficos de análise."
        bgColor="#a5bb5b"
      />
      <Card3D
        icon="💰"
        title="Regionalização do Orçamento"
        backText="Informações sobre configuração."
        bgColor="#e57c76"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import Card3D from './Card3d.vue'
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
    max-width: 62.5rem;
    margin: 5vh auto;
    padding: 2rem;
    background-color: transparent;
  }
  
  /* Nova célula para texto */
  .info-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    z-index: 12;
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
