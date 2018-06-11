<template>
	<div class="detail">
		 {{item}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				item: []
			}
		},
		mounted() {
			 this.item = this.$route.params.item
		}
	}
</script>

<style>
	
</style>