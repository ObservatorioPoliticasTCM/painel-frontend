<template>
  <div class="dashboard-frame">
    <div v-if="title" class="frame-header">
      <h1 v-if="title">{{ displayTitle }}</h1>
      <div class="frame-actions">
        <a
          class="pdf-button"
          href="https://tcmspgovbr-my.sharepoint.com/:f:/g/personal/bruno_balzano_tcmsp_tc_br/Es3nGrJ9JRxMsiS_JFtYSb0BuOKH2yUNOX2HevUc4TM2Cw?e=bVupcT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="@/assets/pdf-icon.svg" alt="PDF" class="pdf-icon"/>
          Notas metodológicas
        </a>
        <!--
        <button class="download-button">
          <img src="@/assets/download-icon.svg" alt="Download" class="download-icon"/>
          Arquivos CSV
        </button>
        -->
      </div>
    </div>
    <div v-if="subtitle" class="frame-subtitle">
      <small v-if="subtitle">{{ subtitle }}</small>
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
    const displayTitle = computed(() => props.title.replace(/\\n/g, '\n'))
    return { iframeSrc, displayTitle, ...props }
  }
})
</script>

<style scoped>
.dashboard-frame {
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 5vh;
  position: relative;
  z-index: 20;  
}
.frame-header {
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 1rem;
  gap: 1rem;
  position: relative;
}
.frame-header h1 {
  margin: 0;
  text-transform: uppercase;
  text-align: left;
  font-weight: normal;
  white-space: pre-line;
}
.frame-subtitle {
  font-variant: small-caps;
  text-align: left;
  margin-left: 1.3rem;
  font-size: 1.3em;
}
.pdf-button {
  /* position: absolute;
  bottom: 1rem;
  right: 10.5rem; */
  min-width: 13em;
  display: flex;
  align-items: center;
  background-color: #213547;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
}
.pdf-icon {
  width: 1.4em;
  height: auto;
  margin-right: 0.5rem;
  filter: brightness(0) invert(1);
}
.download-button {
  /* position: absolute;
  bottom: 1rem;
  right: 1rem; */
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
.frame-actions {
  display: flex;
  gap: 1rem;
}
</style>
