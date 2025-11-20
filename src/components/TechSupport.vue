<template>
    <div class="tech-support">
        <div class="support-title">Apoio Técnico</div>

        <NameGroup name="Núcleo de Tecnologia da Informação" :border="false">
            <NameAndTitle name="Ricardo Ferreira Santos" title="Chefe do NTI" />
            <NameAndTitle name="Adriano Barbosa dos Santos" title="Chefe da Unidade Técnica de Desenvolvimento de Sistemas" />
            <NameAndTitle name="Manoel Henrique Martins" title="Auxiliar Técnico de Controle Externo" />
        </NameGroup>

        <NameGroup name="Estagiários do OPP" :border="false">
            <NameAndTitle name="Ana Clara Stenico" title="Geografia" />
            <NameAndTitle name="Bruna Santos" title="Geografia" />
            <NameAndTitle name="Marcos Gabriel da Silva" title="Gestão de Tecnologia da Informação" />
            <NameAndTitle name="Pedro Lima" title="Geografia" />
            <NameAndTitle name="Rafael Oliveira Bezerra da Silva" title="Análise e Desenvolvimento de Sistemas" />
            <NameAndTitle name="Samuel Bento Alves" title="Segurança Cibernética" />
        </NameGroup>

        <NameGroup name="Estagiárias da Comunicação" :border="false">
            <NameAndTitle name="Anny Solon Moretti Fernandes" title="Publicidade e Propaganda" />
            <NameAndTitle name="Eduarda Fonseca da Silva" title="Publicidade e Propaganda" />
            <NameAndTitle name="Natália Valente Trigo" title="Publicidade e Propaganda" />
        </NameGroup>
    </div>
</template>

<script setup lang="ts">
import NameAndTitle from '@/components/NameAndTitle.vue'
import NameGroup from '@/components/NameGroup.vue'
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