import Vue from 'vue'
import router from './router'
import App from './App'
Vue.config.productionTip = false;
import store from "./store/store";
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
