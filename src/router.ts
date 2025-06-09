import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import EducacaoView from './views/EducacaoView.vue'
import NotFound from './views/NotFoundView.vue'
import GeneroView from './views/GeneroView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/educacao', name: 'educacao', component: EducacaoView },
  { path: '/genero', name: 'genero', component: GeneroView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
