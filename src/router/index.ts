import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AppLayout from '../layouts/AppLayout.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/place',
          name: 'place',
          component: () => import('../views/PlaceHolder.vue')
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginView.vue')
    }
  ]
})

export default router
