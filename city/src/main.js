import Vue from 'vue'
import App from './App'
import router from './router'
import Data from './common/data.js'
import "./common/fonts(1)/iconfont.css"
import Bus from './bus'
Vue.prototype.$Bus = Bus;
Vue.config.productionTip = false
Vue.prototype.data = Data;
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
