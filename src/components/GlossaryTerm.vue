<template>
  <div class="glossary-term">
    <div class="glossary-header" @click="$emit('toggle')">
      <span
        class="glossary-arrow"
        :class="{ expanded: expanded }"
      >&#9660;</span>
      <span class="glossary-title">{{ term }}</span>
    </div>
    <div v-if="expanded" class="glossary-content">
      <div class="glossary-definition">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  term: string;
  description: string;
  expanded: boolean;
}>();
</script>

<style scoped>
.glossary-term {
  border-top: 0.1em solid #fff;
  border-bottom: 0.1em solid #fff;
  padding: 0.8em 0;
}
.glossary-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.glossary-arrow {
  display: inline-block;
  transition: transform 0.2s;
  margin-right: 0.6em;
  font-size: 1.2em;
}
.glossary-arrow.expanded {
  transform: rotate(-180deg);
}
.glossary-title {
  font-weight: bold;
  font-size: 1.2em;
}
.glossary-content {
  margin-top: 0.7em;
}
.glossary-definition {
  border-top: 0.1em solid #fff;
  width: 80%;
  padding-top: 0.7em;
  font-size: 1em;
}
</style>
