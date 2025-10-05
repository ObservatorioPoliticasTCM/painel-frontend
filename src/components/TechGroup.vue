<template>
  <div class="tech-group">
    <div class="group-title">{{ name }}</div>
    <slot />
    <a v-if="url" :href="url" class="members-link" target="_blank" rel="noopener noreferrer">
      Membros do GT <img src="@/assets/external-link.svg" alt="external link" class="ext-icon" aria-hidden="true" />
    </a>
  </div>
</template>

<script setup lang="ts">
const { name, url } = defineProps<{ name: string; url?: string }>()
</script>

<style scoped>
.tech-group {
  text-align: left;
  margin: 0.75em 0;
  border-bottom: 0.0625em solid #fff;
}
.group-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.05em;
}
.members-link {
  display: inline-block;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95em;
  text-decoration: underline;
  margin-bottom: 0.25rem;
}
.members-link:hover { text-decoration: underline; }
.ext-icon {
  height: 0.75em;
  vertical-align: super;
  margin-bottom: -0.15em;
}
</style>
