<template>
  <div class="tech-group">
    <div class="group-title">{{ name }}</div>
    <!-- Slot expects one or more <NameAndTitle .../> components -->
    <slot />
    <a v-if="url" :href="url" class="members-link" target="_blank" rel="noopener noreferrer">
      Membros do GT <span aria-hidden="true" class="ext-icon">↗</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const { name, url } = defineProps<{ name: string; url?: string }>()
</script>

<style scoped>
.tech-group {
  text-align: left;
  margin: 0.75em 0 1.5em;
}
.group-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.05em;
  margin-bottom: 0.35em;
}
.members-link {
  display: inline-block;
  margin-top: 0.4em;
  color: #99b3ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
}
.members-link:hover { text-decoration: underline; }
.ext-icon { font-size: 0.85em; margin-left: 0.2em; }
</style>
