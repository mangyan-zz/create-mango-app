import AppCode from './config/AppCode';
/**
 * Created by zhongzihuan on 2018/11/8.
 * 整个应用的Model管理
 * 应用场景
 * （1）应用路由间跳转，model在路由间共享数据
 *
 */
export default {
	namespace: 'app',
	state: {
		name: 'APPModel',
		//当前设备是否为移动端
		isMobile: false,
		//不同设备屏幕下的菜单变化
		collapsed: false,
		//选中的侧边菜单
		select_slider_menu: AppCode.menu[0].key,

		//选中的侧边菜单子项
		selectSliderMenuItem: AppCode.menu[0].child[0].key,
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
			const {select_slider_menu, selectSliderMenuItem} = action.payload;

			//面包屑处理

			let breadcrumbList = [
				{
					title: select_slider_menu || state.select_slider_menu,
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
				select_slider_menu: select_slider_menu || state.select_slider_menu,
				selectSliderMenuItem: selectSliderMenuItem || state.selectSliderMenuItem,
				breadcrumbList: breadcrumbList
			};
		},

	},
	effects: {},
	subscriptions: {
		setup({dispatch, history}) {
			// history.listen(({pathname}) => {
			//
			// 	let selectSliderMenuItem = '';
			//
			// 	alert(pathname+"===="+JSON.stringify(pathname.split('/'))+"====="+pathname.split('/').length)
			//
			// 	AppCode.menu.map((item)=>{
			//
			// 		// if(item.key===)
			// 		// alert(JSON.stringify(item)+"===="+pathname)
			// 	})
			//
			// 	dispatch({
			// 		type: 'app/pureChangeMenu',
			// 		payload: {selectSliderMenuItem: key}
			// 	});
			//
			// });
		},
	}
};
