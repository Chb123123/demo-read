<template>
	<view class="navStyleContainer">
		导航栏
	</view>
</template>

<script>
	export default {
		created() {
			uni.$on("bookAbout", num => {
				console.log(num)
			})
		}
	}
</script>

<style lang="less" scoped>
	.navStyleContainer{
		
	}
</style>
