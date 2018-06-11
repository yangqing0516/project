<template>
	<b @click="clickActive" :class="{'selected': selected}">
        <em></em>
    </b>
</template>
<script>
	export default {
		data() {
			return {
				selected: false,
				actived: false
			}
		},
		methods: {
			clickActive() {
				this.selected = !this.selected;
				this.actived = !this.actived;
			}
		}
	}
</script>
<style lang="" scoped>
	b {
		display: inline-block;
		width: 80px;
		height: 40px;
		border-radius: 20px;
		box-shadow: 1px 1px 2px #ccc;
		border: 1px solid #ccc;
		background: #ccc;
	}
	
	b em {
		display: inline-block;
		width: 37px;
		height: 37px;
		margin-top: 1.5px;
		margin-left: 1.5px;
		border-radius: 37px;
		box-shadow: 1px 1px 2px #ccc;
		background: #fff;
		transition: transform 2s;
	}
	
	b.selected {
		background: #21DD63;
	}
	
	b em {
		transform: translate3d(0, 0, 0);
	}
	
	b.selected em {
		transform: translate3d(40px, 0, 0);
	}
</style>