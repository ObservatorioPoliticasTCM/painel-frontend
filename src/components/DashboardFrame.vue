<template>
  <div class="frame-container">
    <iframe :src="iframeSrc" frameborder="0" style="border:none;width:100%;height:100%;"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'DashboardFrame',
  props: {
    appid: { type: String, required: true },
    sheet: { type: String, required: true }
  },
  setup(props) {
    const baseUrl = "https://qlik.tcm.sp.gov.br/jwt/single/"
    const iframeSrc = computed(() => baseUrl + `?appid=${props.appid}&sheet=${props.sheet}&theme=horizon&opt=ctxmenu,currsel`)
    return { iframeSrc }
  }
})
</script>

<style scoped>
.frame-container {
  height: 90vh;
  margin: 5vh;
}
</style>
