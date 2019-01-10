/**
 * Created by zhongzihuan on 2018/12/28.
 */
import { getBundleRecordByModuleCode } from '../../services/HotUpdateService';
import ModelCode from '../../ModelCode';
import { DateUtils } from 'mango-web';
import AppCode from '../../../../config/AppCode';

export default {
	namespace: ModelCode.module_detail,
	state: {
		//更新记录
		data: [],
	},

	reducers: {

		//处理根据模块唯一码查询模块更新记录
		pureGetBundleRecordByModuleCode(state, action) {
			const {response} = action.payload;
			response.obj.map((item) => {
				item.createTime = DateUtils(item.createTime).format('YYYY-MM-DD HH:mm');
			});
			return {
				...state,
				data: response.obj
			};
		},
	},

	effects: {

		//根据模块唯一码查询模块更新记录
		* onGetBundleRecordByModuleCode({payload}, {call, put, select}) {

			const {platform, moduleCode} = payload;

			let req = {};
			req.appId = platform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;
			req.moduleCode = moduleCode;
			req.pageNo = '1';
			req.pageSize = '10';

			const response = yield call(getBundleRecordByModuleCode, req);
			yield put({
				type: 'pureGetBundleRecordByModuleCode',
				payload: {response: response}
			});
		}
	},

	subscriptions: {}
};
