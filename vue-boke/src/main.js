import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './assets/js/http'
import './assets/styles/reset.css'



Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
