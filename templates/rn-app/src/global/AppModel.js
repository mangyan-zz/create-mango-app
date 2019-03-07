/**
 * 整个应用的Model管理
 */
import AppCode from './AppCode';

export default {
	namespace: 'app',
	state: {
		name: 'AppModel',

		//当前面包屑
		breadcrumbList: [
			{
				title: AppCode.menu[0].name,
				href: '/',
				key: AppCode.menu[0].name
			},
			{
				title: AppCode.menu[0].child[0].name,
				href: '/',
				key: AppCode.menu[0].name
			}
		],

		//选中的侧边菜单
		selectSliderMenu: AppCode.menu[0].key,

		//选中的侧边菜单子项
		selectSliderMenuItem: AppCode.menu[0].child[0].key,

	},
	reducers: {

		//更新当前设备屏幕类型
		pureUpdateScreen(state, action) {
			const {mobile} = action.payload;
			return {
				...state,
				isMobile: mobile
			};
		},

		//更新设备屏幕下的布局
		pureChangeLayoutCollapsed(state, action) {
			const {collapsed} = action.payload;
			return {
				...state,
				collapsed: collapsed
			};
		},

		//改变侧边栏状态
		pureChangeSliderCollapsed(state, action) {
			return {
				...state,
				collapsed: !state.collapsed
			};
		},

		//侧边栏按钮点击
		pureChangeMenu(state, action) {
			const {selectSliderMenu, selectSliderMenuItem} = action.payload;

			//面包屑处理

			let breadcrumbList = [
				{
					title: selectSliderMenu || state.selectSliderMenu,
					href: '/',
					key: '1',
				},
				{
					title: selectSliderMenuItem,
					href: '/',
					key: '2',
				}
			];

			return {
				...state,
				selectSliderMenu: selectSliderMenu || state.selectSliderMenu,
				selectSliderMenuItem: selectSliderMenuItem || state.selectSliderMenuItem,
				breadcrumbList: breadcrumbList
			};
		},

	},
	effects: {},
	subscriptions: {}
};
