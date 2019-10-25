import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
const bus = new Vue()
Vue.prototype.bus = bus
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
