import Vue from 'vue';
Vue.component('alert', {
    data () {
        return {
            msg: "",
            isActive: false
        }
    },
    template: `<div class="tips" v-if="isActive">{{msg}}</div>`,
    watch: {
        isActive (n) {
            // console.log(n); true 
            setTimeout (()=>{
                this.isActive = false
            }, 3000);
        }
    },
    methods: {
        show (msg) {
            this.isActive = true;
            this.msg = msg;
        }
    }
})

