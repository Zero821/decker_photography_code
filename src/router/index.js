import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Galleries from '../views/Galleries.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/galleries',
    Name: 'Galleries',
    component: Galleries
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
