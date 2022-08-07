<template>
	<view class="submitBookContainer">
		<view class="submitbox">
			<input class="inputStyle" type="text" placeholder="输入图书名称" v-model="bookName"/>
		</view>
		<view class="bookList">
			<SubmitBook v-for="item in bookList" :key="item.nid" :bookAuthor="item.author" :bookImg="item.imgUrl" :bookIntroduce="item.desc" :bookName="item.name" :bookState="item.status" :bookObjset="item"></SubmitBook>
		</view>
	</view>
</template>

<script>
	import SubmitBook from "../../conponents/submitBookList.vue"
	export default {
		components:{
			SubmitBook
		},
		data() {
			return {
				bookName: '',
				flag: null,
				bookList: null
			}
		},
		onReachBottom() {
			console.log('111')
		},
		methods: {
			enterBook() {
				console.log(this.bookName)
			},
			getSubmitBooks() {
				wx.request({
					method:"get",
					url: "http://api.easou.com/api/bookapp/searchdzh.m",
					data: {
						word: this.bookName,
						page_id: 1,
						count: 20,
						cid: "eef_",
						os: "ios",
						appverion: 1049
					},
					success: (res) => {
						if(res.statusCode === 200) {
							console.log(res.data.all_book_items)
							this.bookList = res.data.all_book_items
						} else {
							wx.showToast({
								title:"获取数据失败"
							})
						}
					}
				})
			}
		},
		watch:{
			bookName() {
				if(this.bookName.length !== 0) {
					if(this.flag) {
						clearTimeout(this.flag)
					}
					this.flag = setTimeout(() => {
						this.getSubmitBooks()
					}, 1000)
				}
			}
		},
		created() {
			uni.$once("bookAbout", num => {
				console.log(num)
			})
		}
	}
</script>

<style lang="less" scoped>
	.submitBookContainer{
		height: 100vh;
		background: -webkit-linear-gradient(top, #1F212D, #999);
		padding-top: 30rpx;
		overflow-y: scroll;
		.submitbox{
			width: 700rpx;
			margin: 0 auto 30rpx;
			height: 70rpx;
			// background-color: #eee;
			.inputStyle{
				height: 70rpx;
				border-radius: 30rpx;
				background-color: #eee;
				border: 0;
				padding-left: 50rpx;
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
