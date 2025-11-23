<template>
  <header class="header">
    <div class="gradient-overlay"></div>
    <div class="header-inner">
      <div class="logo-container">
        <router-link to="/" title="Voltar para o início" >
          <img src="@/assets/logo.svg" alt="Logo DataSP" class="logo logo-left"/>
        </router-link>
        <a href="https://observatorio.tcm.sp.gov.br/" target="_blank" rel="noopener noreferrer" title="Acessar o portal do Observatório de Políticas Públicas">
          <img src="@/assets/logo-opp.svg" alt="Logo OPP" class="logo logo-right" />
        </a>
      </div>
      <nav class="nav">
        <div v-for="(item, index) in menuItems" :key="item.label" class="nav-item">
          <router-link v-if="item.route" :to="item.route">{{ item.label }}</router-link>
          <a v-else-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.label }}</a>
          <a v-else href="#">{{ item.label }}</a>
          <div v-if="index < menuItems.length - 1" class="separator">
            <div v-for="n in 10" :key="n" class="dot" />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  { label: 'Apresentação', route: '/apresentacao' },
  { label: 'Educação', route: '/educacao' },
  { label: 'Gênero', route: '/genero' },
  { label: 'Saúde', route: '/saude' },
  { label: 'Urbanismo', route: '/urbanismo'  },
  { label: 'Orçamento', route: '/orcamento' },
  { label: 'Guia técnico', route: '/guia-tecnico' },
  { label: 'Glossário', route: '/glossario'   },
  { label: 'Contato', href: 'https://observatorio.tcm.sp.gov.br/ObservatorioItem/156570' }
]
</script>

<style scoped>
.header {
  position: relative;
  z-index: 20;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  color: white;
  user-select: none;
  width: 100%;
  height: 16vh;
  overflow: visible;
  align-items: center;
}

/* Gradient-overlay em plano intermediǭrio */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40vh;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 10%,
    rgba(0, 0, 0, 0.3) 30%,
    rgba(0, 0, 0, 0.3) 42%,
    rgba(0, 0, 0, 0.1) 62%,
    rgba(0, 0, 0, 0) 72%
  );
}

.header-inner {
  overflow: visible;
  position: relative;
  z-index: 1;
}

/* Novo container para os logos */
.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Estilos dos logos */
.logo {
  height: 10vh; /* Ajuste conforme necessǭrio para manter o alinhamento com a navbar */
}

/* Navbar ocupa toda a largura */
.nav {
  position: relative;
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto; /* scroll horizontal se necessǭrio */
  text-transform: uppercase;
  font-size: 1.2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.nav-item a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  z-index: 1;
}

.separator {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
}

.dot {
  width: 0.125rem;
  height: 0.125rem;
  background-color: white;
  margin: 0.0625rem 0;
  border-radius: 0.0625rem;
}
</style>

