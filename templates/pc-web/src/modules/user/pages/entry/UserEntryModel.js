/**
 * Created by zhongzihuan on 2018/11/28.
 */
import { MangoUtils, RouterUtils } from 'mango-web';
import Strings from '../../Strings';
import { registry, login } from '../../services/UserService';
import AuthorityUtils from '../../../../utils/AuthorityUtils';

export default {
	namespace: 'user_entry',
	state: {
		notice: '',
		type: 'tab_phone',	//tab_phone  tab_username
		autoLogin: true,
		showFragmentId: 1,
		//注册
		confirmDirty: false,
		visible: false,
		count: 0,
		help: '',
		prefix: '86',
	},
	/**
	 * 以key/value格式定义reducer，处理同步操作，唯一可以修改state的地方，由action触发
	 */
	reducers: {


		//启动倒计时
		pureGetCaptcha(state, action) {
			const {count} = action.payload;
			return {
				...state,
				count: count
			};
		},

		//更换手机号区号
		pureChangePrefix(state, action) {
			const {value} = action.payload;
			return {
				...state,
				prefix: value
			};
		},

		//注册-校验密码
		pureCheckPassword(state, action) {
			const {form, value, callback} = action.payload;
			let {visible, confirmDirty, help} = state;
			if (!value) {
				help = Strings.pwd_required;
				visible = !!value;
				callback('error');
			} else {
				help = '';
				if (!visible) {
					visible = !!value;
				}
				if (value.length < 6) {
					callback('error');
				} else {
					if (value && confirmDirty) {
						form.validateFields(['confirm'], {force: true});
					}
					callback();
				}
			}
			console.log('注册-校验密码' + JSON.stringify(action.payload) + '===' + help + '===' + visible);
			return {
				...state,
				help: help,
				visible: visible,
			};
		},

		//处理注册响应
		pureHandleRegistry(state, action) {
			console.log('处理注册响应' + JSON.stringify(action.payload));
			const {registryRsp} = action.payload;
			return {
				...state,
				registryRsp: registryRsp
			};
		},

		//处理登录响应
		pureHandleLogin(state, action) {
			const {loginRsp} = action.payload;
			return {
				...state,
				loginRsp: loginRsp
			};
		},
	},

	effects: {
		//提交登录
		* onLogin({payload}, {call, put, select}) {
			// let req = payload.req;
			// // alert(JSON.stringify(payload))
			// const response = yield call(login, req);
			// yield put({
			// 	type: 'pureHandleLogin',
			// 	payload: {loginRsp: response}
			// });

			AuthorityUtils.setToken('token');
			RouterUtils.push('/hotUpdate/ManagerModulePage');
		},

		//提交注册
		* onRegistrySubmit({payload}, {call, put, select}) {
			//组装信息，发送接口请求
			let values = payload.values;
			let req = values;
			const rsp = yield call(registry, req);
			console.log('注册响应' + JSON.stringify(rsp));
			//处理响应
			yield put({
				type: 'pureHandleRegistry',
				payload: {registryRsp: rsp}
			});
		},

		//获取验证码
		* onGetCaptcha({payload}, {call, put, select}) {
			let count = 5;
			// this.setState({count})
			yield put({
				type: 'pureGetCaptcha',
				payload: {count}
			});
			count = yield select(state => state.user_entry.count);
			while (true) {
				yield call(MangoUtils.delay(1000));
				count -= 1;
				yield put({
					type: 'pureGetCaptcha',
					payload: {count}
				});
				if (count === 0) {
					break;
				}
			}
		},
	},
	subscriptions: {}
};
