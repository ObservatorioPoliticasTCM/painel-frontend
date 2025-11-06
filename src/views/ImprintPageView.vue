<template>
    <ScrollablePage>
        <div class="imprint-wrapper">
            <h1 class="imprint-title">Ficha Técnica</h1>
            <div class="imprint-container">
                <div class="imprint-column">
                    <div class="imprint-panel"><TechCoord /></div>
                    <div class="imprint-panel"><TechSupport /></div>
                </div>
                <div class="imprint-column">
                    <div class="imprint-panel"><TechTeam /></div>
                    <div class="imprint-panel"><Contributors /></div>
                </div>
                <div class="imprint-column specialists-column">
                    <div class="imprint-panel"><Specialists /></div>
                </div>
            </div>
        </div>
    </ScrollablePage>
</template>

<script setup lang="ts">
import ScrollablePage from '@/components/ScrollablePage.vue'
import TechCoord from '@/components/TechCoord.vue'
import TechSupport from '@/components/TechSupport.vue'
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

.imprint-container {
    display: flex;
    gap: 2em;
    align-items: flex-start;
}

.imprint-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5em;
}

.specialists-column {
    min-height: 100%;
}

.imprint-panel {
    margin-bottom: 0;
}
</style>
