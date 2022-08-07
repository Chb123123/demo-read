// 设置默认url 地址
const defaultUrl = "http://api.zhuishushenqi.com"
export const axios = (objset) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: objset.method || "get",
			url: defaultUrl + objset.url,
			data: objset.date || {},
			success: (res) => {
				// console.log(res)
				if (res.code === 200) {
					return uni.showToast({
						title: '数据请求失败'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '获取数据失败'
				})
				reject(err)
			}
		})
	})
}
