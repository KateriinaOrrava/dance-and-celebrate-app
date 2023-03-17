import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import BeginningView from '../components/BeginningView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/celebrate',
      name: 'celebrate',
      component: HomeView
    },
    {
      path: '/',
      name: 'beginning', component: BeginningView
    }
  ]
})

export default router
