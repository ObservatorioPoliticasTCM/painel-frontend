<template>
    <div class="scrollable-page">
        <AppHeader />
        <div class="scrollable-content">
            <slot />
        </div>
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
    display: flex;
    flex-direction: column;
}

.scrollable-content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
}
</style>
