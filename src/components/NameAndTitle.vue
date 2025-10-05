<template>
  <div class="name-and-title" :class="{ 'with-border': showBottomBorder, 'bottom-margin': !removeBottomMargin }">
    <div class="name" :class="{ 'bottom-margin': !removeBottomMargin }">{{ name }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const { name, title, showBottomBorder = false, removeBottomMargin = false } = defineProps<{
  name: string; title: string; showBottomBorder?: boolean; removeBottomMargin?: boolean
}>()
</script>

<style scoped>
.name-and-title {
  margin: 0em 0;
  text-align: left;
}
.name-and-title.with-border {
  border-bottom: 0.0625em solid #fff;
}
.name-and-title.bottom-margin {
  margin-bottom: 0.4em;
}
.name {
  font-weight: bold;
  font-size: 1.05em;
}
.name.bottom-margin {
  margin-bottom: 0.2em;
}
.title {
  font-size: 0.95em;
  line-height: 1.35em;
}
</style>