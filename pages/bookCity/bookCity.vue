<template>
	<view class="bookCitycontainer">
		<view class="submitBooks" @click="submitInput">
			<view class="searchIcon">
				<uni-icons type="search" size="50rpx"></uni-icons>
			</view>
			搜索图书
		</view>
		<view class="navList">
			<view v-for="(item, index) in navList" :key="index" class="navStyle">
				<image class="navImg" src="../../static/nav.png"></image>
				<text class="navTitle">{{ item.name }}</text>
			</view>
		</view>
		<view class="merecommend">我的推荐</view>
		<view class="bookList">
			<BookAbout v-for="item in bookList" :key="item.nid" :bookAuthor="item.author" :bookImg="item.imgUrl" :bookIntroduce="item.desc" :bookName="item.name" :bookState="item.status" :bookObjset="item"></BookAbout>
		</view>
	</view>
</template>

<script>
	import BookAbout from "../../conponents/submitBookList.vue"
	export default {
		data() {
			return {
				navList: {},
				bookList: [],
				// 当前获取图书数量
				bookCount: 0
			}
		},
		components: {
			BookAbout
		},
		methods: {
			submitInput() {
				console.log('前往搜索组件')
				wx.navigateTo({
					url:"../submitBook/submitBook"
				})
			},
			// 获取图书导航栏数据
			getBookNav() {
				uni.request({
					method:"get",
					url: "http://api.zhuishushenqi.com/cats/lv2/statistics",
					success: (res) => {
						console.log(res.data.female)
						this.navList = res.data.female
					}
				})
			},
			getSubmitBooks() {
				wx.request({
					method:"get",
					url: "http://api.easou.com/api/bookapp/searchdzh.m",
					data: {
						word: "我",
						page_id: this.bookCount,
						count: 20,
						cid: "eef_",
						os: "ios",
						appverion: 1049
					},
					success: (res) => {
						if(res.statusCode === 200) {
							console.log(res.data.all_book_items)
							if(this.bookList.length === 0) {
								this.bookList = res.data.all_book_items
							}else{
								this.bookList = [...this.bookList, ...res.data.all_book_items]
							}
						} else {
							wx.showToast({
								title:"获取数据失败"
							})
						}
					}
				})
			}
		},
		onReachBottom() {
			this.bookCount += 20
			console.log('触底')
			this.getSubmitBooks()
		},
		created() {
			this.getBookNav()
			this.getSubmitBooks()
		}
	}
</script>

<style lang="less" scoped>
	.bookCitycontainer{
		// overflow-y: scroll;
		overflow: hidden;
		background-color: #363636;
		.submitBooks{
			position: relative;
			margin: 30rpx auto;
			width: 700rpx;
			height: 80rpx;
			font-size: 40rpx;
			background-color: #C8C7CC;
			border-radius: 40rpx;
			line-height: 80rpx;
			box-shadow: 0 0 10rpx rgba(255,255,255, 0.5);
			padding-left: 120rpx;
			.searchIcon{
				position: absolute;
				left: 30rpx;
				top: 50%;
				transform: translateY(-50%);
				border-right: 1rpx solid #777;
				width: 70rpx;
				height: 50rpx;
				line-height: 50rpx;
			}
		}
		.merecommend{
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			color: #444;
			letter-spacing: 30rpx;
			font-size: 46rpx;
			background-color: #F0F0F0;
			margin: auto;
			width: 700rpx;
			border-radius: 30rpx;
		}
		.navList{
			display: flex;
			flex-wrap: wrap;
			width: 700rpx;
			margin: 0 auto 30rpx;
			padding: 30rpx 0;
			background: -webkit-linear-gradient(left, red, blue);
			border-radius: 30rpx;
			.navStyle{
				width: 175rpx;
				height: 175rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// background-color: pink;
				.navImg{
					width: 100rpx;
					height: 100rpx;
					margin-bottom: 10rpx;
				}
				.navTitle{
					font-size: 32rpx;
					color: #fff;
				}
			}
		}
		.bookList{
			width: 700rpx;
			margin: auto;
			overflow: hidden;
			border-radius: 30rpx;
			// background-color: red;
		}
	}
</style>
