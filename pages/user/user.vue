<template>
	<view>
		用户
		<button @click="grt">发送</button>
		<rich-text :nodes="backImg"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				backImg: null
			}
		},
		methods:{
			grt () {
				wx.request({
					method: "GET",
					url: "http://api.btstu.cn/sjbz/",
					data: {
						m_lx: "suiji"
					},
					success: (res) => {
						console.log(res)
						this.backImg = res.data
					}
				})
			}
		}
	}
</script>

<style>
</style>
