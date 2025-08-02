<template>
    <div class="scrollable-page">
        <AppHeader />
        <slot />
        <Footer />
        <Background />
    </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import Footer from './Footer.vue';
import Background from './Background.vue';
</script>

<style scoped>
.scrollable-page {
    min-height: 100vh;
    overflow: hidden;
}
</style>
