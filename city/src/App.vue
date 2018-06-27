<template>
	<div id="app">
		<div class="header">
			<span>
        <i class="icon iconfont icon-angle-left"></i>
      </span>
			<span>选择城市</span>
		</div>
		<div class="section">
			<div class="nav">
				<span>您的上牌地址</span>
				<span>
          <i class="icon iconfont icon-angle-right"></i>
        </span>
			</div>
			<Selected></Selected>
			<City :data="cityData"></City>
		</div>

	</div>
</template>

<script>
	import Selected from "./components/select/Selected";
	import City from "./components/cityList/CityList";
	import axios from 'axios';
	import Data from './common/data.js';
	export default {
		name: 'App',
		data() {
			return {
				cityData: ''
			}
		},
		components: {
			City,
			Selected
		},
		mounted() {
			this.cityData = Data;
		}
	}
</script>

<style lang="scss">
	@import "./common/css/style.css";
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.header {
		width: 100%;
		height: .5rem;
		background: skyblue;
		display: flex;
		align-items: center;
		span {
			margin-left: .08rem;
			font-size: .14rem;
			.icon {
				font-size: .18rem;
			}
		}
	}
	
	.section {
		flex: 1;
		overflow-y: scroll;
	}
	
	.nav {
		width: 100%;
		height: .5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 .1rem;
		span {
			font-size: .14rem;
		}
	}
</style>