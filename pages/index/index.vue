<template>
	<view class="content" :style="'background-image: url('+ indexWallpaper +');'">
		<view class="booksBox">
			<BookStyle></BookStyle>
			<view class="gotoBookCity" @click="gotoBooxCity">
				<uni-icons type="plusempty" size="150rpx" color="#fff"></uni-icons>
			</view>
		</view>
		<!-- <button class="wallpaper" size="default" plain="true" @click="taggerWallpaper">点击切换壁纸</button> -->
	</view>
</template>

<script>
	import BookStyle from "../../conponents/bookStyle.vue"
	export default {
		components: {
			BookStyle
		},
		data() {
			return {
				title: 'Hello',
				indexWallpaper: "https://tva4.sinaimg.cn/large/005BYqpggy1fwres8oz4tj31hc0xc1kx.jpg"
			}
		},
		onLoad() {
			// this.submitBooks()
		},
		onPullDownRefresh() {
			setTimeout(() => {
				wx.stopPullDownRefresh()
				uni.showToast({
					title: "刷新成功"
				})
			}, 1000)
		},
		methods: {
			// 搜索api
			// async submitBooks() {
			// 	uni.request({
			// 		method: "GET",
			// 		url: "http://api.zhuishushenqi.com/cats/lv2/statistics",
			// 		success: (res) => {
			// 			console.log(res)
			// 		}
			// 	})
			// }
			// 点击前往书城
			gotoBooxCity() {
				wx.navigateTo({
					url: "../bookCity/bookCity"
				})
			},
			// 点击切换壁纸
			 taggerWallpaper() {
				wx.request({
					method: "get",
					url: "https://img.xjh.me/random_img.php",
					data: {
						return: "json"
					},
					header: {
					                'Authorization':uni.getStorageSync('Authorization'),
					                'content-type': 'application/x-www-form-urlencoded',
					            },
					success: (res) => {
						if(res.statusCode !== 200) {
							uni.showToast({
								title: "背景获取失败"
							})
						} else {
							console.log(res.data)
							this.indexWallpaper = "https//" + res.data.img
							console.log(this.indexWallpaper)
						}
					}
				})
			}
		},
		created() {
		}
	}
</script>

<style lang="less" scoped>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-content: center; */
		overflow-y: scroll;
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-color: #333;
		color: #fff;
		.wallpaper{
			position: fixed;
			left: 50%;
			bottom: 0;
			transform: translateX(-50%);
			width: 750rpx;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 32rpx;
			margin-bottom: 30rpx;
			color: #fff;
		}
	}
	.gotoBookCity{
		// flex: 1;
		width: 210rpx;
		height: 355rpx;
		background-color: #708090;
		// margin-left: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.booksBox{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		padding: 20rpx 30rpx;
		width: 750rpx;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
