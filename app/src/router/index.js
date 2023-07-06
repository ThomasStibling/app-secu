import { createRouter, createWebHistory } from 'vue-router'
import SigninView from '../views/SigninView.vue'
import SignupView from '../views/SignupView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      component: SigninView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    }
  ]
})

export default router
