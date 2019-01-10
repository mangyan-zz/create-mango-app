/**
 * Created by mangyan on 2018/11/28.
 */
import { requestGet, requestPost } from '../../../utils/request';

/**
 * 注册
 * @param req
 * @returns {Promise<void>}
 */
export async function registry(req) {
	return requestGet('/api/user/registry', req);
}

/**
 * 登录
 * @returns {Promise<void>}
 */
export async function login(req) {
	return requestGet('/api/user/login', req);
}

/**
 * 当前用户
 * @returns {Promise<void>}
 */
export async function currentUser(req) {
	return requestGet('/api/user/currentUser', req);
}

export async function testApi(req) {
	return requestGet('/api');
}
