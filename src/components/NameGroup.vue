<template>
  <div class="name-group">
    <div class="name-group-header">{{ name }}</div>
    <div class="name-group-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props { name: string }
const { name } = defineProps<Props>()
</script>

<style scoped>
.name-group {
  text-align: left;
  border: 0.0625rem solid #fff; /* 1px */
  border-radius: 0.5rem;
  padding: 1em;
}
.name-group-header {
  font-weight: bold;
  font-size: 1.05em;
  text-transform: uppercase;
  border-top: 0.1em solid #fff;
  border-bottom: 0.0625em solid #fff;
  padding: 0.6em 0 0.5em;
  margin-bottom: 0.4em;
}
</style>