import fetch from 'mango-web/fetch';
import { RouterUtils } from 'mango-web';
import { notification, message } from 'antd';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function request(url, options) {
	//发送请求获取响应
	const response = await fetch(url, options);

	//响应统一处理
	if (response && response.status == 200) {

		//请求成功判断
		const data = await response.json();

		if (data.code === 1) {
			//请求数据成功
			console.log('请求数据成功', data);
			return data;
		} else {
			//请求数据失败
			message.error(data.msg);
		}
	} else {
		//请求失败统一处理——异常界面跳转,响应失败的统一处理跳转到界面
		RouterUtils.push('/ErrorPage', {type: response.status}, true);
	}
}

/**
 * POST请求
 * @param url
 * @param req
 * @param optionConfig
 * @returns {Promise<Object>}
 */
async function requestPost(url, req, optionConfig) {
	let options = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(req)
	};
	return request(url, options);
}

/**
 * GET请求
 * @param url
 * @param req
 * @param optionConfig
 * @returns {Promise<T | never | {err: any}>}
 */
async function requestGet(url, req, optionConfig) {
	return fetch(url, optionConfig)
		.then((response) => response.json())
		.then(data => {
			return data;
		})
		.catch(err => ({err}));
}

export { request, requestGet, requestPost };
