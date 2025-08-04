<template>
  <footer>
    <div class="footer-container">
      <div class="footer-left">
        <img src="@/assets/logo-tcm.png" alt="Logo TCM" />
        <img src="@/assets/logo-egc.svg" alt="Logo EGC" />
      </div>
      <div class="footer-center">
        <div class="footer-license">
          <p>
          <img src="@/assets/cc-icons.svg#cc-logo" alt="CC Logo" />
          <img src="@/assets/cc-icons.svg#cc-by" alt="CC BY" />
          Todo o conteúdo do OPP neste site está disponível sob a licença <a href='https://creativecommons.org/licenses/by/4.0/'>Creative Commons Atribuição 4.0 Internacional</a>, exceto quando especificada outra licença.
          <br>O código-fonte da plataforma também é aberto e está disponível no Github sob a licença MIT.</p>
        </div>
        <div class="footer-version">
          <p>Versão {{ pkg.version }}</p>
        </div>
      </div>
      <div class="footer-right">
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import pkg from '../../package.json'
</script>

<style scoped>
footer {
  font-size: 0.7em;
  text-align: center;
  background-color: #f5f5f5;
  position: relative;
  z-index: 10;
  margin-top: auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-left,
.footer-right {
  flex: 1;
}
.footer-center {
  flex: 2;
  text-align: left;
}
.footer-left img,
.footer-right img {
  margin: 0 1rem;
  height: 4rem;
  object-fit: contain;
}

.footer-license {
  display: flex;
  align-items: center;
  font-size: 0.9em;
}

.footer-license img {
  height: 1em;
  vertical-align: middle;
  margin-right: 0.3em;
}

.footer-version {
  font-size: 0.7em;
}

.footer-left {
  flex: 1;
  display: flex; /* force images side by side */
  gap: 0.5rem; /* optional: add spacing between images */
}
</style>
