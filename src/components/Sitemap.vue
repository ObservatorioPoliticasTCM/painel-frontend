<template>
  <div class="sitemap-container">
    <div class="sitemap">
        <div class="sitemap-column">
        <h3 class="sitemap-title">Mapa do site</h3>
        </div>
        <div class="sitemap-column">
        <ul>
            <li><router-link to="/apresentacao">Apresentação</router-link></li>
        </ul>
        </div>
        <div class="sitemap-column">
        <ul>
            <li><router-link to="/educacao">Educação</router-link></li>
            <li><router-link to="/genero">Gênero</router-link></li>
            <li><router-link to="/saude">Saúde</router-link></li>
            <li><router-link to="/urbanismo">Urbanismo</router-link></li>
            <li><router-link to="/orcamento">Orçamento</router-link></li>
        </ul>
        </div>
        <div class="sitemap-column">
        <ul>
            <li><router-link to="/glossario">Glossário</router-link></li>
            <li>
              <a href="/infos/metadados-datasp.xlsx" target="_blank" rel="noopener noreferrer">
                Metadados
              </a>
            </li>
            <li><router-link to="/guia-tecnico">Guia técnico</router-link></li>
            <li><router-link to="/fichatecnica">Ficha técnica</router-link></li>
            <li>
              <a href="https://observatorio.tcm.sp.gov.br/ObservatorioItem/156570" 
              target="_blank" 
              rel="nooper noreferrer">
              Contato</a>
            </li>
        </ul>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.sitemap-container {
  position: relative;
  z-index: 30;
  width: 100%;
  background-color: #d6d6d6; /* Cor de fundo igual ao footer */
}

.sitemap {
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  line-height: 1rem;
  width: 85%;
}

.sitemap-column {
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.sitemap-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.sitemap-column h4 {
  /* font-weight: bold; */
  margin-bottom: 1rem;
}

.sitemap-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sitemap-column li {
  margin-bottom: 0.5rem;
}

.sitemap-column a {
  color: black;
  text-decoration: none;
  font-weight: 400;
}
</style>
