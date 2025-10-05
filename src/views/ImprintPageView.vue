<template>
    <ScrollablePage>
        <div class="imprint-wrapper">
            <h1 class="imprint-title">Ficha Técnica</h1>
            <div class="imprint-grid">
                <div class="imprint-panel col1"><TechCoord /></div>
                <div class="imprint-panel col2"><TechTeam /></div>
                <div class="imprint-panel col2"><Contributors /></div>
                <div class="imprint-panel col3"><Specialists /></div>
            </div>
        </div>
    </ScrollablePage>
</template>

<script setup lang="ts">
import ScrollablePage from '@/components/ScrollablePage.vue'
import TechCoord from '@/components/TechCoord.vue'
import TechTeam from '@/components/TechTeam.vue'
import Specialists from '@/components/Specialists.vue'
import Contributors from '@/components/Contributors.vue'
</script>

<style scoped>
.imprint-wrapper {
    padding: 1em 5vw;
    position: relative;
    z-index: 30;
}

.imprint-title {
    font-size: 4rem;
    font-weight: 400;
    text-transform: uppercase;
    margin: 0 0 0.4em;
}

.imprint-grid {
    display: grid;
    gap: 0 2em;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
}

.col1 {
    grid-column: 1;
}

.col2 {
    grid-column: 2;
}

.col3 {
    grid-column: 3;
    grid-row: 1 / span 2;
}
</style>
