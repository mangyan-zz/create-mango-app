/**
 * Created by zhongzihuan on 2018/12/25.
 * 模块管理
 */
import { message } from 'antd';

import { getModuleInfoByAppId, createNewModule, createUpdate } from '../../services/HotUpdateService';

import AppCode from '../../../../config/AppCode';

export default {
	namespace: 'managerModule',
	state: {
		//查询所有模块
		data: [],
		//新增模块弹框显示
		showAddModuleModal: false,
		//上传更新modal
		showUpdateModal: false,
		//重新刷新
		reload: false,
		//当前选中平台
		selectPlatform: 'android',
		//当前选中的模块code
		selectModuleCode: '',
		//当前选中的模块名
		selectModuleName: '',
		//loading 新增模块
		submitCreateModuleLoading: false
	},

	reducers: {

		//平台菜单选择
		pureMenuRadioChange(state, action) {
			const {value} = action.payload;
			return {
				...state,
				selectPlatform: value
			};
		},

		//根据APPID分页查询所有模块
		pureGetModuleInfoByAppIdRsp(state, action) {
			const {response} = action.payload;
			return {
				...state,
				data: response.obj,
				showAddModuleModal: false,
				showUpdateModal: false
			};
		},

		//控制新增模块的显示隐藏
		pureShowAddModuleModal(state, action) {
			return {
				...state,
				showAddModuleModal: !state.showAddModuleModal
			};
		},

		//控制上传更新模块的显示隐藏
		pureUpdateModal(state, action) {
			if (action.payload) {
				const {selectModuleCode, selectModuleName} = action.payload;
				return {
					...state,
					showUpdateModal: !state.showUpdateModal,
					selectModuleCode: selectModuleCode,
					selectModuleName: selectModuleName,
				};
			} else {
				return {
					...state,
					showUpdateModal: !state.showUpdateModal,
				};
			}

		},
	},

	effects: {

		//根据APPID分页查询所有模块
		* onQueryUpdate({payload}, {call, put, select}) {
			let req = {
				'appId': '111111',
				'pageNo': 1,
				'pageSize': 10
			};
			let selectPlatform = yield select(state => state.managerModule.selectPlatform);
			req.appId = selectPlatform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;
			const response = yield call(getModuleInfoByAppId, req);

			yield put({
				type: 'pureGetModuleInfoByAppIdRsp',
				payload: {response: response}
			});
		},

		//创建新的模块
		* onCreateNewModule({payload}, {call, put, select}) {
			let req = payload.req;
			let selectPlatform = yield select(state => state.managerModule.selectPlatform);

			req.appId = selectPlatform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;

			const response = yield call(createNewModule, req);
			message.success('新增成功');
			yield put({
				type: 'onQueryUpdate',
			});
		},

		//创建新的更新
		* onCreateUpdate({payload}, {call, put, select}) {
			let req = payload.req;
			let selectPlatform = yield select(state => state.managerModule.selectPlatform);
			req.appId = selectPlatform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;
			req.platform = selectPlatform;
			const response = yield call(createUpdate, req);
			if (response) {
				message.success('上传更新成功');
				yield put({
					type: 'onQueryUpdate',
				});
			}
		}

	},

	subscriptions: {}
};
