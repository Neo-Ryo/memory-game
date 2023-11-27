import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:notFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
