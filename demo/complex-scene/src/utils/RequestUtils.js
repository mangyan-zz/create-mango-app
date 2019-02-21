/**
 * 应用数据请求
 */
import fetch from 'mango-web/fetch';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
async function requestUtils(url, options) {
	//发送请求获取响应
	const response = await fetch(url, options);
	//响应统一处理
	if (response && (response.status == 200 || response.status == 201)) {
		//请求成功判断
		const data = await response.json();
		return data;
	} else {
		//请求失败统一处理——异常界面跳转,响应失败的统一处理跳转到界面
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
	const BASE_API = process.env.REACT_APP_BASE_API;
	let options = {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(req)
	};
	return requestUtils(BASE_API + url, options);
}

/**
 * GET请求
 * @param url
 * @param req
 * @param optionConfig
 * @returns {Promise<T | never | {err: any}>}
 */
async function requestGet(url, req, optionConfig) {
	const BASE_API = process.env.REACT_APP_BASE_API;
	return fetch(BASE_API + url, optionConfig)
		.then((response) => response.json())
		.then(data => {
			return data;
		})
		.catch(err => ({err}));
}

export { requestUtils, requestGet, requestPost };
