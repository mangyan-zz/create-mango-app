/**
 * Created by zhongzihuan on 2018/12/26.
 * 热更新API
 */
import { requestPost } from '../../../utils/request';

/**
 * 创建新的模块
 * @param req
 * @returns {Promise<void>}
 */
export async function createNewModule(req) {
	return requestPost('/api/hotUpdate/createNewModule', req);
}

/**
 * 创建新的更新
 * @param req
 * @returns {Promise<void>}
 */
export async function createUpdate(req) {
	return requestPost('/api/hotUpdate/createUpdate', req);
}

/**
 * 根据模块唯一码查询模块更新记录
 * @param req
 * @returns {Promise<void>}
 */
export async function getBundleRecordByModuleCode(req) {
	return requestPost('/api/hotUpdate/getBundleRecordByModuleCode', req);
}

/**
 * 根据APPID分页查询所有模块
 * @param req
 * @returns {Promise<void>}
 */
export async function getModuleInfoByAppId(req) {
	return requestPost('/api/hotUpdate/getModuleInfoByAppId', req);
}

/**
 * 获取APP打包的配置信息
 * @param req
 * @returns {Promise<void>}
 */
export async function getAppBundleConfig(req) {
	return requestPost('/api/hotUpdate/getAppBundleConfig', req);
}

