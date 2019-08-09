import Vue from 'vue'
import App from './App.vue'
import router from './router/router' //路由引入
import Vant from './vant/vant'  //第三方组件
Vant()
import './lib/rem' //移动端字体配置

import axios from 'axios' //配置axios
Vue.prototype.$axios = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //解决跨域








Vue.config.productionTip = false

new Vue({

  router,
  
  render: h => h(App)
}).$mount('#app')
