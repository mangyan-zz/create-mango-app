/**
 * Created by zhongzihuan on 2019/3/3.
 */
import { Router } from 'mango-rn';

import ModuleCode from '../../res/ModuleCode';

/**
 * 头注释
 */
export default {
	namespace: ModuleCode.setting,
	state: {
		showLogoutTip: false,	//显示退出登录提示
	},

	reducers: {
		//显示退出登录提示
		pureShowLogoutTip(state, action) {
			return {...state, showLogoutTip: true};
		},
	},

	effects: {
		//注释
		* logout({payload}, {call, put, select}) {
			//判断当前是否有未完成
			if (true) {
				//如果还有未完成，则提示退出登录
				yield put({type: 'pureShowLogoutTip'});
			} else {
				//执行退出登录 1.调用退出登录接口 1.删除本地用户信息  2.跳转到登录页面
				yield[
					call(),
					call()
				];
				Router.navigate('UserEntryPage');
			}

			let req = payload.req;
			const response = yield call('异步操作', req);
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

