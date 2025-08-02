<template>
  <ScrollablePage>
  <div class="glossary-bg glossary-content">
    <h1 class="glossary-title">Glossário</h1>
    <div class="glossary-instruction">Digite abaixo o termo que deseja encontrar</div>
    <SearchBar v-model:searchValue="searchValue" />
    <div class="glossary-list">
      <div
        v-for="(row, rowIdx) in rows"
        :key="rowIdx"
        class="glossary-row"
      >
        <div
          v-for="item in row"
          :key="item.letter"
          class="glossary-column"
        >
          <GlossaryLetter :letter="item.letter">
            <GlossaryTerm
              v-for="term in item.terms"
              :key="term.term"
              :term="term.term"
              :description="term.definition"
            />
          </GlossaryLetter>
        </div>
      </div>
    </div>
  </div>
  </ScrollablePage>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ScrollablePage from '../components/ScrollablePage.vue'
import SearchBar from '../components/SearchBar.vue'
import GlossaryLetter from '../components/GlossaryLetter.vue'
import GlossaryTerm from '../components/GlossaryTerm.vue'
import glossary from '../assets/glossary.json'

const searchValue = ref('')

// Transforma o glossary.json em um array [{ letter, terms: [...] }]
const glossaryArray = computed(() => {
  return Object.entries(glossary).map(([letter, terms]) => ({
    letter: letter.toUpperCase(),
    terms: (terms as any[]).filter(term =>
      term.term.toLowerCase().includes(searchValue.value.toLowerCase())
    )
  })).filter(item => item.terms.length > 0)
})

// Agrupa glossaryArray em linhas de 3 colunas
const rows = computed(() => {
  const arr = glossaryArray.value
  const rowLength = 3
  const result: Array<Array<{ letter: string, terms: any[] }>> = []
  for (let i = 0; i < arr.length; i += rowLength) {
    result.push(arr.slice(i, i + rowLength))
  }
  return result
})
</script>

<style scoped>
.glossary-content {
  padding: 1em 5vw;
}
.glossary-content, .glossary-content :deep(*) {
  position: relative;
  z-index: 10;
  text-align: left;
}

.glossary-title {
  font-size: 5rem;
  margin-bottom: 0;
  font-weight: 400;
  text-transform: uppercase;
}

.glossary-instruction {
  font-size: 1.5em;
}

.glossary-list {
  margin: 2em auto;
}
.glossary-row {
  display: flex;
  gap: 2em;
  margin-bottom: 2em;
}
.glossary-column {
  flex: 1;
}
</style>
