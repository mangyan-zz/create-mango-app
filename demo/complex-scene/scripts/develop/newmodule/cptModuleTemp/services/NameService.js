/**
 * 注释
 */

import { requestPost } from '../../../utils/RequestUtils';

/**
 * API
 * @param req
 * @returns {Promise<void>}
 */
export async function toName(req) {
	return requestPost('/toName/toName', req);
}
