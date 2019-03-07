/**
 * Created by zhongzihuan on 2019/2/26.
 */
import ModuleCode from '../../res/ModuleCode';
import { requestPost } from '../../../../utils/RequestUtils';
import ModuleApi from '../../res/ModuleApi';

export default {
	namespace: ModuleCode.userPublic,
	state: {
		entryType: 1,	//1 登录 2注册
	},

	reducers: {

		//切换登录栏
		changeLoginTab(state, action) {
			const {value} = action.payload;
			return {
				...state,
				entryType: value
			};
		},

	},

	effects: {

		//通过账户密码登录
		* loginIn({payload}, {call, put, select}) {
			let req = payload.req;
			const response = yield call(() => requestPost(ModuleApi.user.login, req));
			if (response) {
				yield put({
					type: 'pure',
					payload: {value: response}
				});
			}
		}
	},

	subscriptions: {}
};
