<template>
  <div class="tech-team">
    <div class="team-title">Equipe Técnica</div>

    <TechGroup name="GT Educação" url="https://exemplo.org/gt-educacao">
      <NameAndTitle name="Rômulo Felipe Manzatto" title="Coordenador" />
      <NameAndTitle name="Fredy Miller" title="Coordenador Adjunto" />
    </TechGroup>

    <TechGroup name="GT Gênero" url="https://exemplo.org/gt-genero">
      <NameAndTitle name="Maria Angélica Fernandes" title="Coordenadora" />
      <NameAndTitle name="Suelen Lima Benicio" title="Coordenadora Adjunta" />
    </TechGroup>

    <TechGroup name="GT Saúde" url="https://exemplo.org/gt-saude">
      <NameAndTitle name="Luciana Berardi" title="Coordenadora" />
      <NameAndTitle name="Mariana Mendes Cruz Ferreira" title="Coordenadora Adjunta" />
    </TechGroup>

    <TechGroup name="GT Urbanismo" url="https://exemplo.org/gt-urbanismo">
      <NameAndTitle name="Egle Monteiro" title="Coordenadora" />
      <NameAndTitle name="Harmi Takiya" title="Coordenadora Adjunta" />
    </TechGroup>

    <TechGroup name="GT Regionalização do Orçamento" url="https://exemplo.org/gt-regionalizacao-orcamento">
      <NameAndTitle name="Danilo Fuster" title="Coordenador" />
    </TechGroup>

    <NameGroup name="Núcleo de Tecnologia da Informação">
      <NameAndTitle name="Ricardo Ferreira Santos" title="Chefe do NTI" />
    </NameGroup>

    <NameGroup name="Unidade de Informações Estratégicas">
      <NameAndTitle name="Luciana da Cunha de Castro Guerra" title="Supervisora da Unidade" />
    </NameGroup>

    
  </div>
</template>

<script setup lang="ts">
import TechGroup from '@/components/TechGroup.vue'
import NameAndTitle from '@/components/NameAndTitle.vue'
import NameGroup from './NameGroup.vue';
</script>

<style scoped>
.tech-team {
  text-align: left;
}
.team-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1em;
  border-top: 0.0625em solid #fff;
  padding-top: 0.6em;
  margin-bottom: 0.4em;
}
</style>
