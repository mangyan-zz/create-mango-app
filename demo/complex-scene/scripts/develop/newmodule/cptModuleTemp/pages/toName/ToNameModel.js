/**
 * 模块管理
 */
export default {
	namespace: '',
	state: {
		data: [], //查询所有模块
	},

	reducers: {},

	effects: {},

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
