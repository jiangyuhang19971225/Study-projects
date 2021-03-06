import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI, { Button, Select, Tree, Table, Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import plugin from '@/components/index.js'
import axios from '@/utils/request.js'
import './mock.js'
// import './utils/btnPermission.js'

import has from './utils/btnPermission.js'
// import formCreate, { maker } from 'form-create/element'
import formCreate from 'form-create/element'

has(Vue)
Vue.use(formCreate)

Vue.use(ElementUI)
// 使用全局组件
Vue.use(plugin)
// 组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Tree)
Vue.use(Table)
Vue.use(Input)
Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
