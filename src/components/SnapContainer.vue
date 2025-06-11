<template>
  <div class="snap-container">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Container de scroll com snap */
.snap-container {
  height: 100vh;
  width: 101vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

/* Aplicando scroll-snap-align aos elementos slotted */
::v-slotted(*) {
  scroll-snap-align: start;
}
</style>
