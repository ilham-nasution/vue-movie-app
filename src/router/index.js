import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import MovieUpcoming from '../views/MovieUpcoming.vue'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upcoming-movie',
    name: 'MovieUpcoming',
    component: MovieUpcoming
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: MovieDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
