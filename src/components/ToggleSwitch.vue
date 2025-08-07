<template>
  <div class="toggle-switch-frame">
    <h1 class="title">{{ title }}</h1>
    <div class="buttons-container">
      <button
        :class="['toggle-button', 'left', { active: !isActive }]"
        @click="setActive(false)"
      >
        {{ leftButtonText }}
      </button>
      <button
        :class="['toggle-button', 'right', { active: isActive }]"
        @click="setActive(true)"
      >
        {{ rightButtonText }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  leftButtonText: string
  rightButtonText: string
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const isActive = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

function setActive(value: boolean) {
  if (isActive.value !== value) {
    isActive.value = value
  }
}
</script>

<style scoped>
.toggle-switch-frame {
  border: 1px solid #ff02ee;
  border-radius: 8px;
  padding: 8px;
  display: inline-block;
  background-color: #97028d;
}

.title {
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 0 8px 4px;
    color: white;
}

.buttons-container {
  display: flex;
}

.toggle-button {
  background-color: white;
  border: 1px solid #ccc;
  color: #ccc;
  padding: 8px 16px;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s;
}

.toggle-button.left {
  border-radius: 6px 0 0 6px;
}

.toggle-button.right {
  border-radius: 0 6px 6px 0;
}

.toggle-button.active {
  color: #ff02ee;
  border-color: #ff02ee;
}

.toggle-button:focus {
  outline: none;
  border: 2px solid #ff02ee;
}

</style>
