<template>
    <div class="snap-page">
        <SnapContainer class="snap-container">
            <Background :version="backgroundVersion" />
            <AppHeader />
            <slot />
            <Sitemap />
            <Footer />
        </SnapContainer>
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
import SnapContainer from './SnapContainer.vue'
import AppHeader from './AppHeader.vue'
import Footer from './Footer.vue'
import Sitemap from './Sitemap.vue'
import Background from './Background.vue'
import ToggleSwitch from './ToggleSwitch.vue'
import { useDesignVersion } from '../composables/useDesignVersion'

const { isV2, backgroundVersion } = useDesignVersion()
</script>

<style scoped>
.snap-page {
    min-height: 100vh;
    overflow: hidden;
}

.snap-container {
    position: relative;
}

.design-toggle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}
</style>
