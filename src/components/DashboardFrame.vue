<template>
  <div class="dashboard-frame">
    <div v-if="title || subtitle" class="frame-header">
      <h1 v-if="title">{{ title }}</h1>
      <small v-if="subtitle">{{ subtitle }}</small>
      <button class="download-button">
        <img src="@/assets/download-icon.svg" alt="Download" class="download-icon"/>
        Arquivos CSV
      </button>
    </div>
    <div class="iframe-wrapper">
      <iframe :src="iframeSrc" frameborder="0" style="border:none;width:100%;height:100%;"></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'DashboardFrame',
  props: {
    appid: { type: String, required: true },
    sheet: { type: String, required: true },
    identity: { type: String },
    title: { type: String, default: '' },
    subtitle: { type: String, default: '' },
    select: { type: String }
  },
  setup(props) {
    const baseUrl = "https://qlik.tcm.sp.gov.br/jwt/single/"
    const iframeSrc = computed(() => {
      let url = baseUrl + `?appid=${props.appid}&sheet=${props.sheet}&theme=card&opt=ctxmenu,currsel`
      if (props.identity) {
        url += `&identity=${props.identity}`
      }
      if (props.select) {
        url += `&secret=${props.select}`
      }
      return url
    })
    return { iframeSrc, ...props }
  }
})
</script>

<style scoped>
.dashboard-frame {
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 5vh;
  position: relative; /* adiciona posicionamento para que z-index funcione */
  z-index: 20;
}
.frame-header {
  position: relative; /* permite posicionar o botão de forma absoluta */
  display: flex;
  align-items: end;
  padding: 1rem;
}
.frame-header h1 {
  margin: 0;
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
}
.frame-header small {
  font-variant: small-caps;
  text-align: left;
  margin-left: 1rem;
}
.download-button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  background-color: #213547;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
.download-button .download-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
.iframe-wrapper {
  flex: 1;
}
</style>
