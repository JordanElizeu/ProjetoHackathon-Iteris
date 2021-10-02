import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jogos from '../views/Jogos.vue'
import Animes from '../views/Animes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jogos',
    name: 'Jogos',
    component: Jogos
  },
  {
    path: '/animes',
    name: 'Animes',
    component: Animes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
