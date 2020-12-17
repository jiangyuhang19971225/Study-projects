import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {

        path: '/home',
        name: 'one',
        component: () => import('@/views/demo/one.vue')
      },
      {
        path: '/slot',
        name: 'slot',
        component: () => import('@/views/demo/slot.vue')
      },
      {

        path: '/countDown',
        name: 'countDown',
        component: () => import('@/views/demo/countDown.vue')
      },
      // 树状图select组合使用
      {

        path: '/treeSelect',
        name: 'treeSelect',
        component: () => import('@/views/demo/treeSelect.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
