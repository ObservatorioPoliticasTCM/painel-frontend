import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import EducacaoView from './views/EducacaoView.vue'
import NotFound from './views/NotFoundView.vue'
import GeneroView from './views/GeneroView.vue'
import UrbanismoView from './views/UrbanismoView.vue'
import SaudeView from './views/SaudeView.vue'
import GlossaryView from './views/GlossaryView.vue'
import OrcamentoView from './views/OrcamentoView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/educacao', name: 'educacao', component: EducacaoView },
  { path: '/genero', name: 'genero', component: GeneroView },
  { path: '/saude', name: 'saude', component: SaudeView },
  { path: '/urbanismo', name: 'urbanismo', component: UrbanismoView },
  { path: '/orcamento', name: 'orcamento', component: OrcamentoView },
  { path: '/glossario', name: 'glossario', component: GlossaryView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
