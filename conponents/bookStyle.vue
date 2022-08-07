<template>
	<view class="bookStyleContainer">
		<view class="bookImgBox">
			<image class="bookImg" src="http://image.book.appeasou.com/i/chargebook/easou_cp_1/2/22344671000280502/2.jpg" mode="scaleToFill"></image>
		</view>
		<text class="bookTitle">斗破苍穹</text>
	</view>
</template>

<script>
	export default {
		props: {
			// 图书名称
			bookTitle: {},
			// 图书封面
			bookImg: {}
		}
	}
</script>

<style lang="scss" scoped>
	.bookStyleContainer{
		width: 210rpx;
		height: 355rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// background-color: red;
		margin: 20rpx 0;
		color: #fff;
		.bookImgBox{
			width: 210rpx;
			height: 300rpx;
			border-radius: 30rpx;
			.bookImg{
				width: 100%;
				height: 100%;
			}
		}
		.bookTitle{
			height: 55rpx;
			width: 210rpx;
			// display: flex;
			font-size: 32rpx;
			text-align: center;
			line-height: 55rpx;
			// justify-content: center;
			// align-items: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
