import module1 from './module1/module1';
import module2 from './module2/module2';
import style from  '../css/style.css';
import '../fonts(1)/iconfont.css';
import '../css/style.scss';
import Vue from 'vue';
import Index from '../components/index.vue';
import Login from '../components/login.vue'
new Vue({
    el: '#app',
    render: h=>h(Login)
})