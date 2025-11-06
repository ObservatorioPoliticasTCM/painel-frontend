<template>
    <div class="tech-support">
        <div class="support-title">Apoio Técnico</div>

        <NameGroup name="Núcleo de Tecnologia da Informação" :border="false">
            <NameAndTitle name="Ricardo Ferreira Santos" title="Chefe do NTI" />
            <NameAndTitle name="Adriano Barbosa dos Santos" title="Chefe da Unidade Técnica de Desenvolvimento de Sistemas" />
            <NameAndTitle name="Manoel Henrique Martins" title="Auxiliar Técnico de Controle Externo" />
        </NameGroup>

        <NameGroup name="Unidade de Informações Estratégicas" :border="false">
            <NameAndTitle name="Luciana da Cunha de Castro Guerra" title="Supervisora da Unidade" />
        </NameGroup>
    </div>
</template>

<script setup lang="ts">
import NameAndTitle from '@/components/NameAndTitle.vue'
import NameGroup from '@/components/NameGroup.vue';
</script>

<style scoped>
.tech-support {
    text-align: left;
    border: 0.0625rem solid rgba(255, 255, 255, 0.75);
    border-radius: 0.5rem;
    padding: 0.9em 1.1em 1.2em;
}

.support-title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1em;
    border-top: 0.1em solid #fff;
    border-bottom: 0.0625em solid #fff;
    padding-top: 0.6em;
    margin-bottom: 0.4em;
}
</style>