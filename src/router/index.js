import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import homeS from '../views/home/home-view.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [{ path: '', component: homeS },
      { path: '/home/comment', component: () => import('../views/comment') },
      { path: '/home/material', component: () => import('../material/index.vue') }
    ]
  },
  {
    path: '/login',
    component: Login
  }

]

const router = new VueRouter({
  routes
})

export default router
