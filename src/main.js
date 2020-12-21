import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI, { Button, Select, Tree } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import plugin from '@/components/index.js'
import axios from '@/utils/request.js'
import './mock.js'
Vue.use(ElementUI)
// 使用全局组件
Vue.use(plugin)
// 组件
Vue.use(Button)
Vue.use(Select)
Vue.use(Tree)

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
