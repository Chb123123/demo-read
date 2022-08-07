<template>
	<view class="submitBook" @click="getBookAbout">
		<image class="bookImg" :src="bookImg"></image>
		<view class="bookintroduce">
			<view class="introduceHead">{{ bookName }}</view>
			<text class="author">作者:{{bookAuthor}}</text>
			<view class="bookcontent">{{ bookIntroduce }}</view>
		</view>
		<view class="bookState">{{ bookState }}</view>
	</view>
</template>

<script>
	export default {
		props: {
			// 作品作者
			bookAuthor: {
				default: '123'
			},
			// 图书封面
			bookImg: {},
			// 图书简介
			bookIntroduce: {},
			bookName: {},
			// 图书连载状态
			bookState: {},
			// 整个图片信息
			bookObjset: {}
		},
		methods: {
			getBookAbout() {
				console.log(this.bookObjset)
			}
		}
	}
</script>

<style lang="less" scoped>
	.submitBook{
		position: relative;
		width: 700rpx;
		height: 300rpx;
		background-color: #fff;
		border-radius: 30rpx;
		margin: 30rpx auto;
		padding: 25rpx 30rpx;
		display: flex;
		justify-content: space-between;
		.bookImg{
			width: 250rpx;
			height: 250rpx;
			border-radius: 30rpx;
		}
		.bookintroduce{
			width: 370rpx;
			height: 250rpx;
			// background-color: red;
			// padding-left: 20rpx;
			.introduceHead{
				height: 60rpx;
				line-height: 60rpx;
				font-size: 44rpx;
				text-overflow: ellipsis;
				overflow: hidden;
				white-space: nowrap;
			}
			.author{
				height: 30rpx;
				line-height: 30rpx;
				font-size: 30rpx;
			}
			.bookcontent{
				height: 140rpx;
				// background-color: red;
				font-size: 28rpx;
				overflow: hidden;
			}
		}
		.bookState{
			position: absolute;
			top: 15rpx;
			right: 0rpx;
			width: 80rpx;
			height: 40rpx;
			font-size: 32rpx;
			text-align: center;
			line-height: 40rpx;
			background-color: #FFDEAD;
			border-radius: 20rpx;
			color: #F00;
			transform: rotateZ(30deg);
		}
	}
</style>
