import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'
import router from '@/router/index.js'
import axios from 'axios'
// import path from 'path'
Vue.prototype.$http = axios
// Vue.prototype.$path = path
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
