import Vue from 'vue'
import Router from 'vue-router'
import ShopCar from '../route/shopCar/ShopCar'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'shopCar',
      component: ShopCar
    }
  ]
})
