import Vue from 'vue'
import VueRouter from 'vue-router'
import Rank from '@/components/Rank'
import Rankdetail from '@/components/Rankdetail'
import List from '@/components/List'
import Hot from '@/components/Hot'
Vue.use(VueRouter)
let router = new VueRouter({
    routes: [{
        path: '/',
        redirect: '/rank'
    }, {
        path: '/rank',
        name: 'rank',
        component: Rank
    }, {
        path: '/rankdetail',
        name: 'rankdetail',
        component: Rankdetail
    }, {
        path: '/list',
        name: 'list',
        component: List
    }, {
        path: '/hot',
        name: 'hot',
        component: Hot
    }]
})
export default router