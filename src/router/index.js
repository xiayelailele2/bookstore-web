import Vue from 'vue'
import VueRouter from 'vue-router'
import BookStore from '../views/BookStore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bookstore',
    name: 'BookStore',
    component: BookStore
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
