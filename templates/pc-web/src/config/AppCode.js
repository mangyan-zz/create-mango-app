/**
 * Created by zhongzihuan on 2018/12/26.
 * 应用全局变量
 */
const AppCode = {
	// menu: {
	//   hotUpdate: {
	//     key: 'hotUpdate',
	//     name: '热更新',
	//     item: [
	//       {key: 'android', name: 'android'},
	//       {key: 'ios', name: 'ios'},
	//     ]
	//   },
	// },

	//菜单管理,目前仅支持设置一级和二级菜单导航，如有需要再进行层级扩展
	menu: [
		{
			key: 'hotUpdate',
			name: '热更新',
			icon: 'cloud-upload',
			child: [
				{key: 'module_manager', name: '模块管理', router: 'ManagerModulePage'},
				{key: 'packageConfig', name: '获取打包配置文件', router: 'PackageConfigPage'},
			]
		},
		{
			key: 'user',
			name: '用户管理',
			icon: 'user',
			child: [
			]
		},
		{
			key: 'user',
			name: '文档',
			icon: 'read'
		},
	],

	//平台APPid
	appAndroidId: 'eax4kpvv3nsuk837',
	appIosId: 'washriwvd8c6r6nz',
};

export default AppCode;
