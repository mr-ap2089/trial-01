import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import config from '@/config'
import axios from  '@/axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
