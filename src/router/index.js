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
      },
      {

        path: '/dynamicForm',
        name: 'dynamicForm',
        component: () => import('@/views/demo/dynamicForm.vue'),
        meta: {
          keepAlive: false,
          title: ' 测试动态表单 form-create'
        }
      },
      // 自己写动态表单
      {

        path: '/OwndynamicForm',
        name: 'OwndynamicForm',
        component: () => import('@/views/demo/OwndynamicForm.vue'),
        meta: {
          keepAlive: false,
          title: ' 自己写动态表单'
        }
      },
      {

        path: '/collapse',
        name: 'collapse',
        component: () => import('@/views/demo/collapse.vue'),
        meta: {
          keepAlive: false,
          title: ' 折叠面板点击动态加载'
        }
      },
      {

        path: '/form',
        name: 'form',
        component: () => import('@/views/demo/form.vue'),
        meta: {
          keepAlive: false,
          title: ' form'
        }
      },
      // 复制按钮
      {
        path: '/copy',
        name: 'copy',
        component: () => import('@/views/demo/copy.vue'),
        meta: {
          keepAlive: false,
          title: ' 复制按钮'
        }
      },
      // vis
      {
        path: '/vis',
        name: 'vis',
        component: () => import('@/views/demo/vis.vue'),
        meta: {
          keepAlive: false,
          title: ' 拓扑图'
        }

      },
      // this.set
      {
        path: '/set',
        name: 'set',
        component: () => import('@/views/demo/set.vue')
      },
      {
        path: '/clickBlankPage',
        name: 'clickBlankPage',
        component: () => import('@/views/demo/clickBlankPage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
