<template>
  <div class="search-bar">
    <label for="search-input">Índice</label>
    <input
      type="text"
      :value="searchValue"
      placeholder="Digite para destacar abaixo"
      @input="onInput"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  searchValue: string
}>();

const emit = defineEmits<{
  (e: 'update:searchValue', value: string): void
}>();

function onInput(event: Event) {
  emit('update:searchValue', (event.target as HTMLInputElement).value);
}
</script>

<style scoped>
.search-bar {
    background-color: #D6D6D6;
    padding: 0.5em 2%;
}

.search-bar label {
    display: block;
}

.search-bar input {
    width: 99%;
    padding: 0.5em;
    font-size: 1em;
    border: none;
}

::placeholder {
  font-style: italic;
}

::-ms-input-placeholder {
  font-style: italic;
  color: #ababab;
}
</style>