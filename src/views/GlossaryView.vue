<template>
  <ScrollablePage>
    <div class="glossary-content">
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
import stopwords from '../data/stopwords_ptbr'

const searchValue = ref('')
const expandedTerm = ref<string | null>(null)

function expandTerm(term: string) {
  expandedTerm.value = expandedTerm.value === term ? null : term
}

// Função para transformar texto em minúsculas e remover acentos
function normalize(str: string): string {
  return str ? str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() : ''
}

// Prepara todos os termos para indexação
const allTerms: Array<{
  id: string,
  term: string,
  definition: string,
  letter: string,
  normalizedTerm: string,
  normalizedDefinition: string
}> = []
Object.entries(glossary).forEach(([letter, terms]) => {
  (terms as any[]).forEach(termObj => {
    allTerms.push({
      id: termObj.term || letter.toUpperCase(),
      term: termObj.term || '',
      definition: termObj.definition || '',
      letter: letter.toUpperCase(),
      normalizedTerm: normalize(termObj.term || ''),
      normalizedDefinition: normalize(termObj.definition || '')
    })
  })
})

// Configura MiniSearch
const miniSearch = new MiniSearch({
  fields: ['term', 'definition', 'normalizedTerm', 'normalizedDefinition'],
  storeFields: ['term', 'definition', 'letter'],
  searchOptions: { prefix: true, fuzzy: 0.3, boost: { term: 4, definition: 2 } },
  processTerm: (term) => {
    const normalizedStopwords: Set<string> = new Set(
      Array.from(stopwords).map(word => normalize(word))
    );
    return stopwords.has(term) || normalizedStopwords.has(term) ? null : term
  },
})
miniSearch.addAll(allTerms)

// Computed para filtrar usando MiniSearch
const glossaryArray = computed(() => {
  let filteredTerms: Array<{ term: string, definition: string, letter: string }>
  if (searchValue.value.trim() === '') {
    filteredTerms = allTerms
  } else {
    filteredTerms = miniSearch.search(searchValue.value).map(r => ({
      term: r.term,
      definition: r.definition,
      letter: r.letter
    }))
  }
  // Agrupa filteredTerms por letra
  const grouped: Record<string, Array<{ term: string, definition: string }>> = {}
  filteredTerms.forEach(item => {
    if (!grouped[item.letter]) grouped[item.letter] = []
    grouped[item.letter].push({ term: item.term, definition: item.definition })
  })
  // Se não há busca, mostra todas as letras; se há busca, mostra só as letras com termos filtrados
  const allLetters = searchValue.value.trim() === ''
    ? Object.keys(glossary).map(l => l.toUpperCase()).sort((a, b) => a.localeCompare(b))
    : Object.keys(grouped).sort((a, b) => a.localeCompare(b))
  // Retorna letras e termos ordenados
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
  z-index: 30;
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
  flex: 1 0 auto;
}

.glossary-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  margin-bottom: 2em;
}
</style>
