<template>
  <div class="name-and-title" :class="{ 'with-border': showBottomBorder, 'bottom-padding': !removeBottomPadding }">
    <div class="name">{{ name }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup lang="ts">
const { name, title, showBottomBorder = false, removeBottomPadding = false } = defineProps<{
  name: string; title: string; showBottomBorder?: boolean; removeBottomPadding?: boolean
}>()
</script>

<style scoped>
.name-and-title {
  padding: 0em 0;
  text-align: left;
}
.name-and-title.with-border {
  border-bottom: 0.0625em solid #fff;
}
.name-and-title.bottom-padding {
  margin-bottom: 0.4em;
}
.name {
  font-weight: bold;
  font-size: 1.05em;
  margin-bottom: 0.35em;
}
.title {
  font-size: 0.95em;
  line-height: 1.35em;
}
</style>