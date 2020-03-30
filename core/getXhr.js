/**
 * getXhr()
 * @description 获取Ajax对象XHR，兼容IE
 * */
const getXhr = (function () {
	if (window.XMLHttpRequest) {
		return function () {
			return new XMLHttpRequest()
		}
	} else {
		return function () {
			return new ActiveXObject('Microsoft.XMLHTTP')
		}
	}
})()

export default getXhr()