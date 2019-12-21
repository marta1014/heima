import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/style/index.less' // 引入初始化样式
import axios from 'axios'
import component from './components'
import './promision'// 引入前置路由守卫
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(component)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
