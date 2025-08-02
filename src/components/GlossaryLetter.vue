<template>
  <div class="glossary-letter">
    <div class="glossary-letter-title">{{ letter }}</div>
    <div class="glossary-letter-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  letter: string;
}>();
</script>

<style scoped>
.glossary-letter {
  border: 0.1em solid #fff;
  padding: 1em;
  margin-bottom: 1.5em;
  border-radius: 0.3em;
  background: transparent;
}
.glossary-letter-title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.7em;
}
</style>
