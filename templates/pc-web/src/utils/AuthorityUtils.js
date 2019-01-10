/**
 * Created by zhongzihuan on 2018/12/5.
 * 权限验证
 */
const AuthorityUtils = {

	/**
	 * 获取token
	 * @returns {string}
	 */
	getToken() {
		return localStorage.getItem('token');
	},

	/**
	 * 设置token
	 */
	setToken(token) {
		return localStorage.setItem('token', token);
	}

};

export default AuthorityUtils;
