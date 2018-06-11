<template>
	<div class="footer">
		<router-link active-class="active" tag="p" to="/home">
			<dl>
				<dt><i class="icon iconfont icon-shouye"></i></dt>
				<dd>首页</dd>
			</dl>
		</router-link>
		<router-link active-class="active" tag="p" to="/member">
			<dl>
				<dt><i class="icon iconfont icon-dianzan"></i></dt>
				<dd>会员+</dd>
			</dl>
		</router-link>
		<router-link active-class="active" tag="p" :to='{name:"shop",params:{item:carts}}'>
			<!-- <router-link active-class="active" tag="p" to="/shop"> -->
			<dl>
				<dt>
					<i class="icon iconfont icon-gouwuche-xuanzhong"></i>
					<span v-if="count" id="count">{{count}}</span>
				</dt>
				<dd>购物车</dd>
			</dl>
		</router-link>
		<router-link active-class="active" tag="p" to="/mine">
			<dl>
				<dt><i class="icon iconfont icon-wode-xuanzhong"></i></dt>
				<dd>我的</dd>
			</dl>
		</router-link>
	</div>
</template>
<script>
import Dispatch from '../../dispatch.js';
export default {
	data () {
		return {
			carts: [],
			count: 0
		}
	},

	mounted () {
		Dispatch.on(this, 'changeCart', res=> {
			// 购物车的数量
			let num = 0;
			res.map(item=>{
				num += item.count;
			})
			this.count = num;
		})
	}	
}
</script>
<style type="text/css" scoped>
	.footer {
		width: 100%;
		height: .5rem;
		display: flex;
		border-top: 1px solid #ccc;
	}
	
	p {
		width: 25%;
		height: 100%;
	}

	p dl {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content:center;
	}
	p dl dt{
		position: relative;
	}
	p dl dt span{
		position: absolute;
		right: -15px;
		top: -5px;
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background: red;
		color: #fff;
		text-align: center;
		line-height: 15px;
	}
	.active {
		color: #FF67AF;
	}
</style>