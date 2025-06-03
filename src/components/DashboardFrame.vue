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
    sheet: { type: String, required: true },
    identity: { type: String }
  },
  setup(props) {
    const baseUrl = "https://qlik.tcm.sp.gov.br/jwt/single/"
    const iframeSrc = computed(() => {
      let url = baseUrl + `?appid=${props.appid}&sheet=${props.sheet}&theme=card&opt=ctxmenu,currsel`
      if (props.identity) {
        url += `&identity=${props.identity}`
      }
      return url
    })
    return { iframeSrc }
  }
})
</script>

<style scoped>
.frame-container {
  height: 90vh;
  padding: 5vh;
  position: relative;
  z-index: 20;
}
</style>
