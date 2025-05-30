<template>
  <header class="header">
    <div class="logo-wrapper">
      <img src="@/assets/logo.svg" alt="Logo" class="logo" />
    </div>
    <nav class="nav">
      <div v-for="(item, index) in menuItems" :key="item" class="nav-item">
        <a href="#">{{ item }}</a>
        <div v-if="index < menuItems.length - 1" class="separator">
          <div v-for="n in 10" :key="n" class="dot" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const menuItems = [
  'Apresentação',
  'Educação',
  'Gênero',
  'Saúde',
  'Urbanismo',
  'Regionalização do Orçamento',
  'Entendendo os Dados',
  'Contato'
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
  overflow-y: hidden;
}

/* Logo separado, sem background */
.logo-wrapper {
  margin-bottom: 1rem;
  /* Sem background */
  /* Mantém só o logo */
}

.logo {
  height: 48px;
  width: auto;
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
  overflow-x: auto; /* scroll horizontal se necessário */
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
  width: 2px;
  height: 2px;
  background-color: white;
  margin: 1px 0;
  border-radius: 1px;
}
</style>
