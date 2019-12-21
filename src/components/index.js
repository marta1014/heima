import asideIn from './aside/aside.vue'
import headerIn from './header/heaeder.vue'
import breadcrumb from './common/bread-crumb.vue'
export default {
  install (Vue) {
    Vue.component('asideIn', asideIn)
    Vue.component('headerIn', headerIn)
    Vue.component('breadcrumb', breadcrumb)// 全局注册面包屑组件
  }
}
