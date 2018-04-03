import Vue from 'vue'
import App from './App'
import router from './router'

import 'commom/less/main.less'

import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

router.push('/goods')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
