<template>
    <div class="snap-page">
        <SnapContainer>
            <AppHeader />
            <slot />
            <Footer />
        </SnapContainer>
        <Background />
    </div>
</template>

<script setup lang="ts">
import SnapContainer from './SnapContainer.vue';
import AppHeader from './AppHeader.vue';
import Footer from './Footer.vue';
import Background from './Background.vue';
</script>

<style scoped>
.snap-page {
    min-height: 100vh;
    overflow: hidden;
}
</style>
