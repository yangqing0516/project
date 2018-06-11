<template>
  <div id="app">
    <Head :tit="title"></Head>
	  <Product></Product>
  </div>
</template>
<script>
	import './common/fonts(1)/iconfont.css';
	import './common/add&del/iconfont.css';
	import Head from './components/header/Header.vue';
	import Product from './components/section/product/Product.vue';
	import './components/mark/Mark.js'
	export default {
	  name: 'App',
	  data () {
	    return {
	        title: "订单支付"
	    }
	  },
	  components: {
	    Head,
			Product
		}
	}
</script>

<style>
	*{
	  padding: 0;
	  margin: 0;
	  list-style: none;
	  text-decoration: none;
	}
	
	body,html {
		 width: 100%;
	   height: 100%;
	   background: #EEEEEE;
	}
	
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  color: #2c3e50;
	  width: 100%;
	  height: 100%;
	  background: #EEEEEE;
	  display: flex;
	  flex-direction: column;
	}


</style>


