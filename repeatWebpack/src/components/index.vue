<template>
	<div class="box">
		<div class="carBox">
			<div class="data" v-for="(items, index) in newCityWord" :data-id="index" :key="index" :id="items.cityWord">
				<p>{{items.cityWord}}</p>
				<ul>
					<li v-for="(car_find, ind) in items.list" :data-id="index+'_'+ind" :key="ind" @click="clickFn">
						<dl>
							<dt>
                            <img :src="car_find.CoverPhoto" alt/>
                        </dt>
							<dd>
								{{car_find.Name}}
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
		<div class="rightWord">
			<a :href='"#"+word' v-for="(word, $index) in cityWord" :key="$index">{{word}}</a>
		</div>
	</div>
</template>
<script>
	import axios from "axios";
	export default {
		data() {
			return {
				carData: [],
				cityWord: [], // 首字母
				newCityWord: [], // 所有的数据
				numInd: 1
			};
		},
		methods: {
			getData() {
				axios.get("/items/list").then(res => { // 返回值是一个promise对象，使用then方法来调用
					// 所有的数据
					this.carData = JSON.parse(res.data).data;
					const cityWord = [];
					const newCityWord = [];
					this.carData.map((val, ind) => {
						let firstWord = val.Spelling.slice(0, 1);
						if(cityWord.indexOf(firstWord) === -1) {
							cityWord.push(firstWord);
							newCityWord.push({
								cityWord: firstWord,
								list: [val]
							})
						} else {
							newCityWord.map((value, ind) => {
								if(firstWord === value.cityWord) {
									value.list.push(val)
								}
							})
						}
					});
					this.cityWord = cityWord;
					this.newCityWord = newCityWord;
					console.log(this.cityWord);
				});
			},
			clickFn (e) {
				console.log()
			}
		},
		mounted() {
			this.getData();
		}
	};
</script>
<style scoped>
	.box {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	.data {
		width: 100%;
		height: auto;
		margin: 0 auto;
	}
	
	.data p {
		width: 100%;
		height: .2rem;
		padding-left: .04rem;
		line-height: .2rem;
		background: #cccccc;
	}
	
	.data ul {
		width: 100%;
		height: auto;
	}
	
	.data ul li {
		width: 100%;
		height: .5rem;
		border-bottom: 1px solid #ccc;
		padding: 0 .02rem;
	}
	
	.data ul li:last-child {
		border-bottom: none;
	}
	
	.data ul li dl {
		width: 100%;
		height: .5rem;
		display: flex;
		align-items: center;
	}
	
	.data ul li dl dt img {
		width: .4rem;
		height: .4rem;
		border-radius: 50%;
	}
	
	.data ul li dl dd {
		margin-left: .1rem;
	}
	
	.rightWord {
		position: fixed;
		right: .03rem;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
		top: 0;
		z-index: 99;
	}
	
	.rightWord a {
		color: #999999;
		font-size: .12rem;
	}
	
	.active {
		background: pink;
	}
</style>