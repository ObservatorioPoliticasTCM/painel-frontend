<template>
  <ScrollablePage>
    <div class="glossary-bg glossary-content">
      <h1 class="glossary-title">Glossário</h1>
      <div class="glossary-instruction">Digite abaixo o termo que deseja encontrar</div>
      <SearchBar v-model:searchValue="searchValue" />
      <div class="glossary-list">
        <div v-for="(row, rowIdx) in rows" :key="rowIdx" class="glossary-row">
          <div v-for="item in row" :key="item.letter" class="glossary-column">
            <GlossaryLetter :letter="item.letter">
              <GlossaryTerm v-for="term in item.terms.filter(t => t.term && t.definition)" :key="term.term"
                :term="term.term" :description="term.definition" :expanded="expandedTerm === term.term"
                @toggle="expandTerm(term.term)" />
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
import MiniSearch from 'minisearch'

const searchValue = ref('')
const expandedTerm = ref<string | null>(null)

function expandTerm(term: string) {
  expandedTerm.value = expandedTerm.value === term ? null : term
}

// Prepara todos os termos para indexação
const allTerms: Array<{ id: string, term: string, definition: string, letter: string }> = []
Object.entries(glossary).forEach(([letter, terms]) => {
  (terms as any[]).forEach(termObj => {
    allTerms.push({
      id: termObj.term || letter.toUpperCase(),
      term: termObj.term || '',
      definition: termObj.definition,
      letter: letter.toUpperCase()
    })
  })
})

// Configura MiniSearch
const miniSearch = new MiniSearch({
  fields: ['term', 'definition'],
  storeFields: ['term', 'definition', 'letter']
})
miniSearch.addAll(allTerms)

// Computed para filtrar usando MiniSearch
const glossaryArray = computed(() => {
  let filteredTerms: Array<{ term: string, definition: string, letter: string }>
  if (searchValue.value.trim() === '') {
    filteredTerms = allTerms
  } else {
    filteredTerms = miniSearch.search(searchValue.value, { prefix: true, fuzzy: 0.5, boost: { term: 2 } }).map(r => ({
      term: r.term,
      definition: r.definition,
      letter: r.letter
    }))
  }
  // Gera todas as letras presentes no glossário e ordena
  const allLetters = Object.keys(glossary).map(l => l.toUpperCase()).sort((a, b) => a.localeCompare(b))
  // Agrupa filteredTerms por letra
  const grouped: Record<string, Array<{ term: string, definition: string }>> = {}
  filteredTerms.forEach(item => {
    if (!grouped[item.letter]) grouped[item.letter] = []
    grouped[item.letter].push({ term: item.term, definition: item.definition })
  })
  // Retorna todas as letras, ordenadas, e ordena os termos de cada letra
  return allLetters.map(letter => ({
    letter,
    terms: (grouped[letter] || []).sort((a, b) => a.term.localeCompare(b.term))
  }))
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

.glossary-content,
.glossary-content :deep(*) {
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
