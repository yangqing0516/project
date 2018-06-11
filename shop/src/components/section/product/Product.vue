<template>
    <div class="product">
		<div class="main">
			<Location></Location>
			<div class="list">
				<Things v-for="(items, index) in store" 
					:key="index" 
					:num="sum"
					:cost="items" 
					:sprice="dataInfo" 					
					v-on:changePrice="getPrice"></Things>
			</div>
			<div class="payMent">
				<p>
					<span>余额不足￥{{balance}}.00</span>
					<Pay></Pay>
				</p>
				<p>
					<span>奖金支付￥{{bonus}}.00</span>
					<Pay></Pay>
				</p>
				<p>
					<span>其他支付方式</span>
					<span><i class="icon iconfont icon-angle-right"></i></span>
				</p>
			</div>
		</div>
		<Foot :footerPrice="fooPrice"></Foot>
    </div>
</template>
<script>
	import Location from '../location/Location.vue'
	import Things from '../things/Things.vue';
	import Pay from '../pay/Pay.vue';
	import Foot from '../../footer/Footer.vue';

    export default {
		data () {
        	return {
        		sum: [
					1,2,3
				],
				// footer中的总价格
        		fooPrice: 0,
				// 用来接收子组件传来的数据
				dataInfo: {},
				// 支付方式中的余额
				balance: 100,
				//支付方式中的奖金
				bonus: 130,
				// 商品价格|运费
				store: [
					{
						price: 12,
						runPrice: 5
					},{
						price: 5,
						runPrice: 2
					},{
						price: 21,
						runPrice: 4
					},{
						price: 72,
						runPrice: 15
					}
				]
        	}
        },
		// 结构
        components: {
			Location,
			Things,
			Pay,
			Foot
        },
        methods: {
			getPrice (data) {
				console.log(data)
				this.dataInfo = data;
				if (data.type === 'add') {
					this.fooPrice += this.dataInfo.cost;
				} else {
					this.fooPrice -= this.dataInfo.cost;
				};
			},
			clickActive () {
				this.selected = !this.selected;
				this.actived = !this.actived;
			}
        }
    }
</script>
<style lang="" scoped>
    .product {
    	margin-top: 10px;
		flex: 1;
		display: flex;
		flex-direction: column;
    }
    
	.main {
		overflow-y: scroll;
		flex: 1;
	}

    .payMent {
    	background: #fff;
    	display: flex;
    	flex-direction: column;
    	padding: 7px;
		margin-bottom: 10px;
    }
    
    .payMent p {
    	display: flex;
    	justify-content: space-between;
		border-bottom:1px solid #ccc;
    	height: 50px;
		align-items: center;
    }

	.payMent p:last-child {
		border-bottom: 0;
	}
</style>