import whoAjax from '../index.js'
console.log(whoAjax)

document.querySelector('#get-topic-list').onclick = function () {
	whoAjax({
		url: 'https://cnodejs.org/api/v1/topics',
		method: 'get',
		success: function (data) {
			console.log(data)
		}
	})
	whoAjax.get()
}