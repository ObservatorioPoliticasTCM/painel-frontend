<template>
  <div class="glossary-bg">
    <h1 class="glossary-title">GLOSSÁRIO</h1>
    <div class="glossary-instruction">Digite abaixo o termo que deseja encontrar</div>
    <SearchBar v-model:searchValue="searchValue" />
    <div class="glossary-list">
      <div class="glossary-columns">
        <div
          v-for="(letterGroup, idx) in columns"
          :key="idx"
          class="glossary-column"
        >
          <GlossaryLetter v-for="item in letterGroup" :key="item.letter" :letter="item.letter">
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import GlossaryLetter from '../components/GlossaryLetter.vue'
import GlossaryTerm from '../components/GlossaryTerm.vue'
import Footer from '../components/Footer.vue'
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

// Divide em 3 colunas equilibradas
const columns = computed(() => {
  const arr = glossaryArray.value
  const colCount = 3
  const cols: Array<Array<{ letter: string, terms: any[] }>> = [[], [], []]
  arr.forEach((item, idx) => {
    cols[idx % colCount].push(item)
  })
  return cols
})
</script>
