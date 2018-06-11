<template>
	<div class="home">
		<!--  头部 -->
		<div class="header">
			<p class="null"></p>
			<p @click="detailCity">
				<span>
				<img src="https://j-image.missfresh.cn/img_20161026155951214.png" />
			</span>
				<span>北京市</span>
				<span>
				<i class="icon iconfont icon-angle-down"></i>
			</span>
			</p>
			<div class="search">
				<dl>
					<dt><i class="icon iconfont icon-fangdajing"></i></dt>
					<dd>搜索</dd>
				</dl>
			</div>
		</div>
		<!-- 列表分类 -->
		<NavList :list="listData"></NavList>
		<div class="content">
			<div class="content_page">
				<!-- 轮播 -->
				<Slide :banner="slideData"></Slide>
				<!-- 详情 -->
				<div class="recommend-title">
					<dl v-for="(items, index) in details" :key="index">
						<dt>
						<img :src="items.image" alt="">
					</dt>
						<dd>{{items.name}}</dd>
					</dl>
				</div>
				<!-- 新人专享 -->
				<NewPerson></NewPerson>
				<!-- 今日热卖 -->
				<div class="all-products-wrap">
					<div class="product-container">
						<div class="product-list-driver-wrap">
							<img src="https://image.missfresh.cn/category_group_images/B8B9F8169D12314ED4558672F8F19A14.PNG" alt="">
						</div>
						<!-- 商品 -->
						<div class="product">
							<div class="product-list-item-wrap">
								<div class="product-item" v-for="(item, index) in page_data" :key="index" @click="hrefDemo(item)">
									<div class="item-img">
										<div class="promotion">
											<img :src="item.image" alt="">
										</div>
										<div class="product-item-image">
											<img :src="item.promote_tag" alt="">
										</div>
									</div>
									<div class="item-detail">
										<div class="item-title">{{item.name}}</div>
										<div class="item-tag">{{item.subtitle}}</div>
										<div class="item-price">
											<div class="up-price">
												<em>￥</em>
												<span>
												${{item.vip_price_pro && ((item.vip_price_pro.price_up.price)/100).toFixed(2)}}
											</span>
											</div>
											<div class="down-price" v-for="(data,index) in item.product_tags" :key="index">
												<span class="describe" v-if="data.name">{{data.name}}</span>
												<p>
													<em>￥</em>
													<span>${{((item.vip_price_pro.price_down.price)/100).toFixed(2)}}</span>
												</p>
											</div>
										</div>
										<div class="item-cart">
											<img v-if="item.showCart" :src="item.cart_image" @click.stop="clickCart(item)">
											<div v-else class="count">
												<span @click.stop="reduceFn(index)">-</span>
												<span>{{item.count}}</span>
												<span @click.stop="addFn(index)">+</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Slide from "../../view/slide/Slide.vue";
	import NavList from "../../view/nav/navList.vue";
	import NewPerson from "../../view/newPerson/Newperson.vue";
	import Common from '../../view/common/Common.vue';
	import Dispatch from '../../dispatch.js';
	export default {
		data() {
			return {
				count: 1,
				// 总数据
				data: [],
				// 轮播数据
				slideData: [],
				// 列表数据
				listData: [],
				// 详情
				details: [],
				// 产品数据 product_Data
				product_Data: [],
				// 每一页的数据
				page_data: [],
				// 上拉加载数据
				isLoading: false,
				// 当前页面的下标
				current_page: 1
			};
		},
		props: {
			load: {
				type: Boolean
			}
		},
		components: {
			Common,
			Slide,
			NavList,
			NewPerson
		},
		methods: {
			init() {
				// 请求数据
				this.axios.get("/items/list").then(res => {
					let data = JSON.parse(res.data);
					// 所有数据
					this.data = data;
					// 分类数据
					this.listData = this.data.category_list;
					// 轮播数据
					this.slideData = this.data.product_list.banner;
					// 详情数据
					this.details = this.data.product_list.brands;
					// 获取产品数据
					this.product_Data = this.data.product_list.products.slice(1);
					this.product_Data.forEach(items => {
						// 是否显示购物车
						items.showCart = true;
						items.count = 0;
					});
					this.page_data = this.product_Data.slice(0, 20);
					this.isLoading = false;
				});
			},
			// 获取每一页的数据添加内容
			clickCart(item) {
				// this.page_data[index].showCart = false;
				this.page_data.forEach(value => {
					if(value.name === item.name) {
						value.showCart = false;
						value.count = 1;
					}
				});
				// 强制刷新
				this.$forceUpdate();
				this.changeCart()
			},
			reduceFn(index) {
				console.log(this.page_data[index]);
				if(this.page_data[index].count === 1) {
					this.page_data[index].showCart = true;
				} else {
					this.page_data[index].count -= 1;
				}
				this.changeCart()
			},
			addFn(index) {
				this.page_data[index].count += 1;
				this.changeCart()
			},
			changeCart() {
				let carts = [];
				this.page_data.forEach((item) => {
					// 判断数量得至少是一件,传数据到首页数量个数
					if(item.count) {
						carts.push(item);
					}
				})
				// 改变数据,强制刷新
				this.$forceUpdate();
				Dispatch.emit('changeCart', carts);
				// 将数据存储到本地
				window.localStorage.setItem('shop', JSON.stringify(carts));
			},
			hrefDemo(item) {
				this.$router.push({
					name: 'Detail',
					params: {
						item: item
					}
				})
			},
			detailCity() {
				this.$router.push({
					name: 'DetailCity',
					params: {
						id: 1
					}
				})
			}
		},
		mounted() {
			this.init();
			const content = document.querySelector(".content");
			const contentPage = document.querySelector(".content_page");
			content.onscroll = (e) => {
				if(content.scrollTop > (contentPage.clientHeight - document.documentElement.clientHeight - 30)) {
					console.log("加载下一页");
					this.isLoading = true;
					// 请求数据
					this.current_page += 1;
					this.page_data = this.page_data.concat(this.product_Data.slice((this.current_page - 1) * 20, this.current_page * 20));
					this.isLoading = false;
				}
			};
		}
	};
</script>

<style scoped>
	.home {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	
	.header {
		width: 100%;
		height: 0.35rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	p:nth-of-type(2) span:nth-of-type(1)>img {
		width: 0.53rem;
		height: 0.12rem;
	}
	
	.null {
		width: 0.34rem;
		height: 0.34rem;
	}
	
	.search {
		width: 0.34rem;
		height: 0.34rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.search dl {
		color: #666666;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.content {
		flex: 1;
		overflow-y: scroll;
	}
	
	.recommend-title {
		width: 100%;
		height: 0.5rem;
		display: flex;
	}
	
	.recommend-title dl {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.recommend-title dl dt img {
		width: 0.12rem;
		height: 0.12rem;
		vertical-align: middle;
		color: #4d4d4d;
	}
	
	.recommend-title dl dd {
		font-size: 0.12rem;
		color: #4d4d4d;
	}
	
	.product-list-driver-wrap img {
		width: 100%;
		height: auto;
		padding: 0.1rem 0;
	}
	
	.product-list-item-wrap {
		width: 100%;
		height: auto;
	}
	
	.product-item {
		width: 92%;
		margin: 0 auto;
		height: 1.2rem;
		display: flex;
		align-items: center;
		margin-bottom: 0.05rem;
		border-bottom: 1px solid #f5f5f5;
	}
	
	.product-item:last-child {
		border-bottom: 0;
	}
	
	.item-img {
		position: relative;
		flex: 4;
	}
	
	.promotion img {
		width: 1.02rem;
		height: 1.02rem;
	}
	
	.product-item-image {
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.product-item-image img {
		width: 0.21rem;
		height: 0.23rem;
	}
	
	.item-detail {
		position: relative;
		flex: 6;
		height: 100%;
		padding-left: 0.04rem;
		display: flex;
		flex-direction: column;
	}
	
	.item-title {
		color: #474245;
		font-size: 0.14rem;
		width: 1.5rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	
	.item-tag {
		color: #969696;
	}
	
	.describe {
		border: 1px solid rgb(245, 159, 193);
		color: rgb(245, 159, 193);
	}
	
	.up-price em {
		color: rgb(241, 21, 94);
		font-size: 0.12rem;
	}
	
	.up-price span {
		color: rgb(241, 21, 94);
		font-size: 0.13rem;
	}
	
	.item-price {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	
	.item-cart {
		position: absolute;
		right: 0;
		bottom: 0.05rem;
	}
	
	.item-cart img {
		width: 0.45rem;
		height: 0.45rem;
	}
	
	.count span:nth-of-type(1),
	.count span:nth-of-type(3) {
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		border: 1px solid #ff4891;
		text-align: center;
		border-radius: 50%;
		color: #ffffff;
	}
	
	.count span:nth-of-type(3) {
		background: #ff4891;
		color: #fff;
	}
	
	.count span {
		margin: 0.15rem 0.05rem;
	}
	
	.count span:nth-of-type(1) {
		border: 1px solid #ff4891;
		color: #ff4891;
	}
	
	.count span:nth-of-type(2) {
		font-weight: bolder;
	}
</style>