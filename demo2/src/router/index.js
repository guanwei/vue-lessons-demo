import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      }
    ]
  },
  {
    path: '/add',
    name: 'Add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "add" */ '../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
})

export default router
