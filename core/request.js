/**
 * 定义请求
 * */
import xhr from './getXhr.js'

function request (options = {
	url: '',
	method: '',
	data: {},
	headers: {},
	success: function () {},
	error: function () {},
	complete: function () {}
}) {
	// 判断是get还是post方法
	let {
		url,
		method = 'get',
		success
	} = options
	
	// 准备发送请求，配置相关信息
	xhr.open(method, url)
	
	// 发送请求
	xhr.send()
	
	// 监听状态变化
	xhr.onreadystatechange = function () {
		// 服务器响应完成
		if (xhr.readyState === 4) {
			// 200 请求成功
			if (xhr.status === 200) {
				success(JSON.parse(xhr.responseText))
			}
		}
	}
}

export default request