<template>
    <div class="scrollable-page">
        <AppHeader />
        <div class="scrollable-content">
            <Background :version="backgroundVersion" />
            <slot />
        </div>
        <Sitemap />
        <Footer />
        <ToggleSwitch
            class="design-toggle"
            title="Altere a versão do design"
            leftButtonText="Versão com foto"
            rightButtonText="Versão com marca d'água"
            v-model="isV2"
        />
    </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import Footer from './Footer.vue'
import Background from './Background.vue'
import ToggleSwitch from './ToggleSwitch.vue'
import { useDesignVersion } from '../composables/useDesignVersion'
import Sitemap from './Sitemap.vue'

const { isV2, backgroundVersion } = useDesignVersion()
</script>

<style scoped>
.scrollable-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
}

.scrollable-content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
}

.design-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
</style>
