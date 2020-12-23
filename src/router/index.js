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
      },
      // 使用mock
      {

        path: '/textMock',
        name: 'textMock',
        component: () => import('@/views/demo/textMock.vue')
      },
      // 练习使用keepAlive
      {

        path: '/keepalive',
        name: 'keepalive',
        component: () => import('@/views/demo/testKeepAlive.vue'),
        meta: {
          keepAlive: true,
          title: '测试使用actived生命周期'
        }
      },
      // 使用自定义指令测试权限
      {

        path: '/udi',
        name: 'udi',
        component: () => import('@/views/demo/udi.vue'),
        meta: {
          keepAlive: false,
          title: '使用自定义指令实现表格操作的权限demo'
        }
      },
      // vuex语法糖
      {

        path: '/vuex',
        name: 'vuex',
        component: () => import('@/views/demo/vuexFunction.vue'),
        meta: {
          keepAlive: false,
          title: ' vuex语法糖的使用'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
