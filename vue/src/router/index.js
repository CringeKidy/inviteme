import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Test from '../views/Test.vue'
import Login from '../views/Login.vue'

const routes = [
  {path:'/', component: Home},
  {path:'/about', component: About},
  {path:'/test', component: Test},
  {path:'/login', component: Login}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
