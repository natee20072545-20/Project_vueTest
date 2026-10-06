import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  
    },
  {
    path: '/grade',
    name: 'grade',

    component: () => import(/* webpackChunkName: "about" */ '../views/Grade.vue')
  

  },
  {
    path: '/golds',
    name: 'golds',

    component: () => import(/* webpackChunkName: "about" */ '../views/Api_golds.vue')
  }
  ,
  {
    path: '/product_api',
    name: 'product_api',

    component: () => import(/* webpackChunkName: "about" */ '../views/Product_api.vue')
  }
    ,
  {
    path: '/users1',
    name: 'users1',

    component: () => import(/* webpackChunkName: "about" */ '../views/Users1.vue')
  }
    ,
  {
    path: '/product_table',
    name: 'product_table',
 component: () => import(/* webpackChunkName: "about" */ '../views/Product_table.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
