<template>
  <div class="name-group" :class="{ 'border': border }">
    <div class="name-group-header" :class="{ 'border': border }">{{ name }}</div>
    <div class="name-group-content" :class="{ 'border': border }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props { name: string, border?: boolean }
const { name, border = true } = defineProps<Props>()
</script>

<style scoped>
.name-group {
  text-align: left;
  border-bottom: 0.0625em solid #fff;
}
.name-group-header {
  font-weight: bold;
  font-size: 1.05em;
  text-transform: uppercase;
}
.name-group-header.border {
  border-top: 0.1em solid #fff;
  border-bottom: 0.0625em solid #fff;
  padding: 0.6em 0 0.5em;
  margin-bottom: 0.4em;
}
.name-group.border {
  border: 0.0625rem solid #fff; /* 1px */
  border-radius: 0.5rem;
  padding: 1em;
}
</style>