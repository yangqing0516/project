<template>
	<div class="footer">
		<div class="price">
			<span>总计</span><em>￥{{footerPrice}}.00</em>
			<p>（不含运费）</p>
		</div>
		<button @click="clickFn">提交订单</button>
		<transition name="trans"><alert ref="marks"></alert></transition>
	</div>
</template>
<script>
	export default {
		props: ["footerPrice"],
		methods: {
			clickFn () {
				// console.log(this.$refs.marks);
				// 本身带有的show方法
				this.$refs.marks.show('金额不足,请选择其他的方式')
			}
		}
	}
</script>

<style type="text/css" scoped>
	.footer {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		background:#fff;
	}
	
	.footer button {
		height: 50px;
		flex: 3;
		background: #FC4141;
		border: 0;
		color: #fff;
		font-size: 16px;
	}
	
	.footer .price {
		flex: 7;
		text-align: right;
		margin-right: 20px;
	}
	
	.footer .price span, .footer .price em{
		color: #F71919;
	}
	
	.footer .price p {
		color: #666666;
	}

	.tips {
		position: fixed;
		width: 80%;
		left: 10%;
		bottom:50px;
		height: 40px;
		border-radius: 40px;
		background: rgba(0, 0, 0, .5);
		line-height: 40px;
		text-align: center;
		color: #fff;
		transition: transform 3s linear;
	}

	.trans-enter {
		transform: translate3d(0, 100%, 0)
	}

	.trans-enter-to {
		transform: translate3d(0, 0, 0)
	}

	.trans-enter-active {
		transition: transform 3s;
	}

	.trans-leave {
		transform: translate3d(0, 0, 0)
	}

	.trans-leave-to {
		transform: translate3d(0, -100%, 0)
	}

	.trans-leave-active {
		transition: transform 3s;
	}

	.trans-leave-to {
		transform: translate3d(0, -100%, 0)
	}

</style>