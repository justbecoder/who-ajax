/**
 * 基于原生Ajax的封装
 * 	 支持get/post方法
 * */
import request from './core/request.js'
const whoAjax = request
whoAjax.get = function (url, config) {
	console.log(22222)
}
export default whoAjax