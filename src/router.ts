import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import EducacaoView from './views/EducacaoView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/educacao', name: 'educacao', component: EducacaoView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
