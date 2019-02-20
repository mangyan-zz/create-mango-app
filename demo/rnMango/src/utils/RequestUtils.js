/**
 * 应用数据请求
 */
import fetch from 'mango-native/fetch';

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
	return fetch(url, optionConfig)
		.then((response) => response.json())
		.then(data => {
			return data;
		})
		.catch(err => ({err}));
}

export { requestUtils, requestGet, requestPost };
