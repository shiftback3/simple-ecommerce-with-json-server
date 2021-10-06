import Vue from 'vue'
// import './plugins/axios'
import App from './App.vue'
import router from './router'
// import axios from 'axios'



//Script
// import "assets/js/vendors/plugins.min.js"

// import "assets/js/main.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
