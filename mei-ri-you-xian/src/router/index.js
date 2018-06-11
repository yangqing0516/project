import Vue from "vue";
import Router from "vue-router";
import Home from "../components/home/Home.vue";
import Member from "../components/member/Member.vue";
import Mine from "../components/mine/Mine.vue";
import Shop from "../components/shop/Shop.vue";
import Detail from '../components/detail/Detail.vue';
import DetailCity from '../components/detailCity/DetailCity.vue';
Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: "/",
      redirect: "home"
    },
    {
      path: "/home",
      name: Home,
      component: Home
    },
    {
      path: "/member",
      name: "member",
      component: Member
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine
    },
    {
      path: "/detail",
      name: "Detail",
      component: Detail
    },
    {
      path: '/detailCity',
      name: 'DetailCity',
      component: DetailCity
    }
  ]
});
