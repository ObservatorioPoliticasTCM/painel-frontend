<template>
    <div class="tech-team">
        <div class="team-title">Equipe Técnica</div>

        <TechGroup name="GT Educação" url="https://observatorio.tcm.sp.gov.br/Educacao/559290">
            <NameAndTitle name="Rômulo Felipe Manzatto" title="Coordenador" remove-bottom-margin />
        </TechGroup>

        <TechGroup name="GT Gênero" url="https://observatorio.tcm.sp.gov.br/Genero/556919">
            <NameAndTitle name="Maria Angélica Fernandes" title="Coordenadora" remove-bottom-margin />
            <NameAndTitle name="Suelem Lima Benicio" title="Coordenadora Adjunta" remove-bottom-margin />
        </TechGroup>

        <TechGroup name="GT Saúde" url="https://observatorio.tcm.sp.gov.br/Saude/556928">
            <NameAndTitle name="Luciana Berardi" title="Coordenadora" remove-bottom-margin />
            <NameAndTitle name="Mariana Mendes Cruz Ferreira" title="Coordenadora Adjunta" remove-bottom-margin />
        </TechGroup>

        <TechGroup name="GT Urbanismo" url="https://observatorio.tcm.sp.gov.br/Urbanismo/559291">
            <NameAndTitle name="Egle Monteiro" title="Coordenadora" remove-bottom-margin />
            <NameAndTitle name="Harmi Takiya" title="Coordenadora Adjunta" remove-bottom-margin />
        </TechGroup>

        <TechGroup name="GT Regionalização do Orçamento" url="https://observatorio.tcm.sp.gov.br/Regionalizacao/559292">
            <NameAndTitle name="Danilo Fuster" title="Coordenador" remove-bottom-margin />
        </TechGroup>

        <NameGroup name="Unidade de Informações Estratégicas" :border="false">
            <NameAndTitle name="Luciana da Cunha de Castro Guerra" title="Supervisora da Unidade" />
            <NameAndTitle name="Lilian Tiemi Takada" title="Auxiliar Técnica de Controle Externo" />
            <NameAndTitle name="Ana Luísa Augusto do Val" title="Estagiária de Análise e Desenvolvimento de Sistemas" />
        </NameGroup>
    </div>
</template>

<script setup lang="ts">
import TechGroup from '@/components/TechGroup.vue'
import NameAndTitle from '@/components/NameAndTitle.vue'
import NameGroup from '@/components/NameGroup.vue'
</script>

<style scoped>
.tech-team {
    text-align: left;
    border: 0.0625rem solid rgba(255, 255, 255, 0.75);
    border-radius: 0.5rem;
    padding: 0.9em 1.1em 1.2em;
}

.team-title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1em;
    border-top: 0.1em solid #fff;
    border-bottom: 0.0625em solid #fff;
    padding-top: 0.6em;
    margin-bottom: 0.4em;
}
</style>
