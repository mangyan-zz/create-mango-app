/**
 * 用户公共模型
 * （1）注册
 * （2）登录
 * （3）退出登录
 * （4）创建邀请
 * （5）获取邀请数据
 */
import ModuleCode from '../conf/ModuleCode';

import LocalStorageUtils from '../../../utils/LocalStorageUtils';
import ApiConfig from '../conf/ApiConfig';

export default {
	namespace: ModuleCode.userPublic,
	state: {
		data: [], //查询所有模块
		dataLoginRsp: null, //登录数据响应
		token: '',	//用户登录token

	},

	reducers: {
		//处理登录响应
		pureLogin(state, action) {
			const {data} = action.payload;
			return {
				...state,
				dataLoginRsp: data
			};
		},
	},

	effects: {
		//登录
		* login({payload}, {call, put, select}) {
			let req = payload.req;
			const response = yield call(ApiConfig.user.login, req);
			if (response) {
				LocalStorageUtils.setUserName(response.data.userName);
				yield put({
					type: 'pureLogin',
					payload: {data: response.data}
				});
			}

		},

	},

	subscriptions: {
		setup({dispatch, history}) {
			return history.listen(({pathname, query}) => {
				if (pathname === '') {
					//页面进入执行
				}
			});
		}
	}
};
