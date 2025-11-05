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
defineProps<{
  searchValue: string
}>();

const emit = defineEmits<{
  (e: 'update:searchValue', value: string): void
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:searchValue', target.value);
}
</script>

<style scoped>
.search-bar {
    background-color: #D6D6D6;
    padding: 0.5em 2%;
    border-radius: 0.5rem;
}

.search-bar label {
    display: block;
}

.search-bar input {
    width: 99%;
    padding: 0.5em;
    font-size: 1em;
    border: none;
    border-radius: 0.5rem;
}

::placeholder {
  font-style: italic;
}

::-ms-input-placeholder {
  font-style: italic;
  color: #ababab;
}
</style>