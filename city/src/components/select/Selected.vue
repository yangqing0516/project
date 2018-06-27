<template>
	<div class="selected">
		<h1>您已选择的城市：</h1>
		<ul>
			<li v-for="(item,index) in selectCity" :key="index" @click="cancelHighLight(item,index)">
				{{item.name}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectCity: []
			}
		},
		methods: {
			cancelHighLight (item,index) {
				item.cla = false;
				this.selectCity.splice(index, 1);
				console.log(this.selectCity)
				this.$Bus.$emit('deleteCity',this.selectCity)
			}
		},
		mounted() {
			this.$Bus.$on('sendCity', (res) => {
				this.selectCity = res;
			});
		}
	}
</script>

<style scoped lang="scss">
	h1 {
		padding-left: .1rem;
		font-weight: bolder;
		font-size: .14rem;
	}
	
	ul {
		width: 100%;
			li {
				display: inline-block;
				margin-left: 0.1rem;
				height: .3rem;
				line-height: .3rem;
				padding: .04rem 0;
				font-size: .14rem;
			}
		}
</style>