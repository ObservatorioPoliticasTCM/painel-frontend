<template>
    <ScrollablePage>
        <div class="imprint-wrapper">
            <h1 class="imprint-title">Ficha Técnica</h1>
            <div class="imprint-grid">
                <div class="imprint-panel">
                    <TechCoord />
                </div>
                <div class="imprint-panel">
                    <TechTeam />
                </div>
                <div class="imprint-panel">
                    <Specialists />
                </div>
                <div class="imprint-panel imprint-panel--wide">
                    <Contributors />
                </div>
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
    gap: 2.2em 2em;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    align-items: start;
}

.imprint-panel--wide {
    grid-column: 1 / -1;
    max-width: 520px;
}

@media (min-width: 1100px) {
    .imprint-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .imprint-panel--wide {
        grid-column: 2;
    }
}
</style>
