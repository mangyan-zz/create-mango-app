/**
 * Created by zhongzihuan on 2018/12/29.
 */
import ModelCode from '../../ModelCode';
import { getAppBundleConfig, getModuleInfoByAppId } from '../../services/HotUpdateService';
import AppCode from '../../../../config/AppCode';

export default {
	namespace: ModelCode.packageConfig,
	state: {
		//模块集合
		dataModules: [],
		//配置
		config: '',
		//选中的平台
		selectPlatform: 'android',
		//显示配置复制modal
		showConfigModel: false,
		//是否全部选中
		isCheckAll: false,
		//选中的模块
		checkedModuleCode: []
	},

	reducers: {

		//平台菜单选择
		pureMenuRadioChange(state, action) {
			const {value} = action.payload;
			return {
				//模块集合
				dataModules: [],
				//配置
				config: '',
				//显示配置复制modal
				showConfigModel: false,
				//是否全部选中
				isCheckAll: false,
				//选中的模块
				checkedModuleCode: [],
				selectPlatform: value,
			};
		},

		//控制配置展示modal
		pureShowConfigModal(state, action) {
			if (action.payload) {
				const {value} = action.payload;
				return {
					...state,
					showConfigModel: !state.showConfigModel,
					config: value.config
				};
			} else {
				return {
					...state,
					showConfigModel: !state.showConfigModel,
				};
			}

		},

		//todo 根据APPID分页查询所有模块
		pureGetModuleInfoByAppIdRsp(state, action) {
			const {value} = action.payload;
			return {
				...state,
				dataModules: value
			};
		},

		//全选
		pureToggleCheckAll(state, action) {
			let checkedModuleCode = [];

			if (!state.isCheckAll) {
				state.dataModules.map((item) => {
					checkedModuleCode.push(item.moduleCode);
				});
			}
			return {
				...state,
				isCheckAll: !state.isCheckAll,
				checkedModuleCode: checkedModuleCode
			};
		},

		//刷新选中要更新模块列表
		pureRefreshCheckList(state, action) {
			const {value} = action.payload;
			return {
				...state,
				checkedModuleCode: value
			};
		},
	},

	effects: {

		//todo 这边与另外的model代码重复   根据APPID分页查询所有模块
		* onQueryUpdate({payload}, {call, put, select}) {
			let req = {
				'appId': '111111',
				'pageNo': 1,
				'pageSize': 10
			};
			let selectPlatform = yield select(state => state.packageConfig.selectPlatform);

			req.appId = selectPlatform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;


			const response = yield call(getModuleInfoByAppId, req);

			if (response) {
				yield put({
					type: 'pureGetModuleInfoByAppIdRsp',
					payload: {value: response.obj}
				});
			}

		},

		//获取APP打包的配置信息
		* onGetAppBundleConfig({payload}, {call, put, select}) {
			const {values} = payload;
			let req = {
				'appId': '111111',
				'appVersionCode': values.appVersionCode,
				'moduleCode': values.moduleCode
			};

			let selectPlatform = yield select(state => state.managerModule.selectPlatform);

			req.appId = selectPlatform === 'android' ? AppCode.appAndroidId : AppCode.appIosId;

			const response = yield call(getAppBundleConfig, req);
			if (response) {
				yield put({
					type: 'pureShowConfigModal',
					payload: {value: response.obj}
				});
			}

		}
	},

	subscriptions: {}
};
