/**
 * Created by zhongzihuan on 2018/12/5.
 * 权限验证
 */
const USERNAME = 'username';
const LocalStorageUtils = {

	/**
	 * 获取用户名称
	 * @returns {string}
	 */
	getUserName() {
		return localStorage.getItem(USERNAME);
	},

	/**
	 * 用户名称
	 */
	setUserName(username) {
		return localStorage.setItem(USERNAME, username);
	}

};

export default LocalStorageUtils;
