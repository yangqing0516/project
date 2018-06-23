import Vue from 'vue'
import App from './App'
import router from './router'
new Vue({
    el: "#box",
    router,
    template: '<App/>',
    components: {
        App
    }
})