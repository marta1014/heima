import asideIn from './aside/aside.vue'
import headerIn from './header/heaeder.vue'

export default {
  install (Vue) {
    Vue.component('asideIn', asideIn)
    Vue.component('headerIn', headerIn)
  }
}
