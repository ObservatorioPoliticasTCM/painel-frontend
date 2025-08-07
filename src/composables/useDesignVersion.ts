import { ref, watch, computed } from 'vue'

const isV2 = ref(localStorage.getItem('designVersion') === 'v2')

watch(isV2, (newValue) => {
  localStorage.setItem('designVersion', newValue ? 'v2' : 'v1')
})

export function useDesignVersion() {
  const backgroundVersion = computed(() => (isV2.value ? 'v2' : undefined))

  return {
    isV2,
    backgroundVersion,
  }
}
