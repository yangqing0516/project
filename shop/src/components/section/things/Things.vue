<template>
	<div class="thing">
		<p>
			<span><i class="icon iconfont icon-03"></i></span>
			<span>恒指然旗舰店</span>
		</p>
		<dl>
			<dt><img src="../../../assets/1.png" alt=""/></dt>
			<dd>
				<h5>地发表爱上都很方便安理卢卡申科解放碑</h5>
				<h6>
                    <div class="left">
                        <span>￥<em>{{cost.price}}.00</em></span>
                        <span style="text-decoration:line-through">
                        	￥<em>5.00</em>
                        </span>
                    </div>
                    <div class="right">
                        <span @click="changeNum('reduce')">
                        	<i class="icon iconfont icon-jian"></i>
                        </span>
                        <span>{{count}}</span>
                        <span @click="changeNum('add')">
                        	<i class="icon iconfont icon-jia"></i>
                        </span>
                    </div>
                </h6>
			</dd>
		</dl>
		<div class="price">
			<span>商品总金额：</span>
			<span>￥{{allPrice}}</span>
		</div>
		<div class="price">
			<span>运费：</span>
			<span>￥{{cost.runPrice}}.00</span>
		</div>
		<div class="price">
			<span>总额（含运费）：</span>
			<span>￥{{allPrice + cost.runPrice}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				count: 1,
				allPrice: 0
			}
		},
		props: {
			// 单价--->如果父级传来的参数是对象,在这里需要写成对象格式
			cost: {
				required: true,
				type: Object
			},
			num: {
				required: true,
				type: Array
			}
		},
		//  传值
		created () { // 或者 mounted(速度慢--挂载完DOM之后才完成,created在虚拟DOM完成之后在计算)
			// 初始为1的时候，价格为1个的单价
			this.allPrice = this.cost.price * this.count;
			this.$emit('changePrice', {
				cost: this.cost.price, // 单价
				count: this.count, // 数量
				allPrice: this.allPrice, // 单个商品的总价
				type: 'add' // 加加 || 减减
			})
		},
		methods: {
			changeNum: function (type) {
				//  三目表达式--判断如果是add则加，不是则减
				type === 'add' ? this.count++ : this.count--;
				// 判断如果小于1的情况下，数量等于1
				if (this.count < 1) {
					this.count = 1;
					return; // 如果等于1,退出这个函数changeNum,不执行
				};
				// 计算 数量*单价 总价
				this.allPrice = this.cost.price * this.count;
				// 传值，子集给父集传值，在父集中使用v-on监听，使用到的变量
				this.$emit('changePrice', {
					cost: this.cost.price, // 单价
					count: this.count, // 数量
					allPrice: this.allPrice, // 单个商品的总价
					type: type // 加加 || 减减
				});
			}
		}
	}
</script>
<style lang="" scoped>
	* {
		box-sizing: border-box;
	}

	.thing {
		width: 100%;
		height: auto;
		padding: 10px;
		margin-bottom: 10px;
		border-bottom: 1px solid #ccc;
		background: #fff;
	}
	
	.thing p {
		width: 100%;
		height: auto;
		padding: 10px 0 10px 0;
	}
	
	.thing p span .icon {
		color: #FF6D1F;
		font-size: 18px;
	}
	
	.thing dl {
		width: 100%;
		display: flex;
	}
	
	.thing dl dt {
		width: 105px;
		height: 105px;
		border: 1px solid #ccc;
	}
	
	.thing dl dt img {
		width: 100%;
		height: auto;
	}
	
	.thing dl dd {
		flex: 1;
		padding-left: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.thing dl dd h5 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		word-break: break all;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: normal;
	}
	
	.thing dl dd h6 {
		display: flex;
		justify-content: space-between;
		padding-right: 10px;
	}
	
	.thing dl dd h6 .left {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
	
	.thing dl dd h6 .right span {
		display: inline-block;
		width: 20px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		border: 1px solid #ccc;
		vertical-align: middle;
	}
	
	.thing dl dd h6 .right span:nth-of-type(2) {
		font-size: 16px;
	}

	.thing .price {
		width: 100%;
		padding: 5px 0;
		display: flex;
		justify-content: space-between;
	}
	
	.thing .price span {
		color: #666666;
	}
	
	.thing .price:last-child span:last-child {
		color: #FC4141;
	}
</style>