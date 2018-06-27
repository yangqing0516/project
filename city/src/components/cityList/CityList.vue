<template>
	<div class="cityList">
		<div class="city" v-for="(item,index) in tempCity" :key="index">
			<h1>{{item.letter}}</h1>
			<ul>
				<li v-for="(val, ind) in item.city" :key="ind" :class="val.cla?'active':null" @click="clickFn(val)">{{val.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tempCity: [],
				deleteCity: []
			};
		},
		props:["data"],
		mounted() {
			console.log(this.data)
			setTimeout(() => {
				this.tempCity = this.data.cityArr;
			});
			this.$Bus.$on('deleteCity',(res)=>{
				this.deleteCity = res;
			})
		},
		methods: {
			clickFn(val) {
				val.cla = !val.cla;
				this.select();
			},
			select() {
				let arr = []
				this.tempCity.forEach(item => {
					item.city.forEach(value => {
						if(value.cla) {
							arr.push(value);
						}
					})
				});
				this.$Bus.$emit('sendCity', arr)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.cityList {
		width: 100%;
		height: auto;
		h1 {
			width: 100%;
			height: 0.4rem;
			padding-left: 0.1rem;
			line-height: 0.4rem;
			font-weight: bolder;
			font-size: 0.2rem;
		}
		ul {
			width: 100%;
			li {
				display: inline-block;
				margin-left: 0.1rem;
				margin-top: .02rem;
				padding: .04rem .04rem;
				font-size: .14rem;
			}
		}
	}
	
	li.active{
		border: 2px solid #F9CF85;
		border-radius: .04rem;
	}
</style>