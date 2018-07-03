import Vue from 'vue'
import Router from 'vue-router'
import Guide from '@/components/guide/Guide'
import Home from '@/components/home/Home'
import Idea from '@/components/idea/Idea'
import College from '@/components/college/College'
import Msg from '@/components/msg/Msg'
import Mine from '@/components/mine/Mine'
import Follow from '@/components/follow/Follow'
import Recommend from '@/components/recommend/Recommend'
import HotList from '@/components/hotlist/HotList'
import Detail from '@/components/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: "/",
    redirect: "/guide"
  }, {
    path: '/guide',
    name: 'Guide',
    component: Guide,
    children: [{
      path: "/home",
      redirect: "home"
    }, {
      path: 'home',
      name: 'Home',
      component: Home,
      children: [{
          path: "/follow",
          redirect: "follow"
        },
        {
          path: "follow",
          name: "Follow",
          component: Follow
        },
        {
          path: "recommend",
          name: "Recommend",
          component: Recommend
        },
        {
          path: "hotList",
          name: "HotList",
          component: HotList
        }
      ]
    }, {
      path: 'idea',
      name: 'Idea',
      component: Idea
    }, {
      path: 'college',
      name: 'College',
      component: College
    }, {
      path: 'msg',
      name: 'Msg',
      component: Msg
    }, {
      path: 'mine',
      name: 'Mine',
      component: Mine
    },{
      path: "/detail",
      name: "Detail",
      component: Detail
    }]
  }]
})
