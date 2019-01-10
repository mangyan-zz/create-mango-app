/**
 * Created by zhongzihuan on 2018/11/28.
 * 用户登录页   容器组件
 * （1）主内容容器
 * （2）账户密码登录
 * （3）手机号登录
 * （4）联名登录
 */
import React, { Component } from 'react';
import { connect } from 'mango-web';

import { Alert, Button, Checkbox, Col, Form, Input, Row, Tabs } from 'antd';
import Strings from '../../../Strings';
import { Dimens, MangoUtils, RouterUtils } from 'mango-web';
import AuthorityUtils from '../../../../../utils/AuthorityUtils';
import LocalStorageUtils from '../../../../../utils/LocalStorageUtils';

const TabPane = Tabs.TabPane;

@connect(({user_entry, loading}) => ({user_entry, submitting: loading.effects['user_entry/onLogin']}))
@Form.create()
class LoginFragment extends Component {

	// 构造
	constructor(props) {
		super(props);

	}

	componentDidUpdate() {
		const {loginRsp} = this.props.user_entry;
		if (loginRsp) {
			if (loginRsp.code == 1) {
				//响应成功,跳转到首页,并保存当前的登录状态
				AuthorityUtils.setToken('token');
				RouterUtils.push('/HomePage');
			} else {
				//响应失败
				message.error('请求异常');
			}
		}
	}

	render() {
		const {validateFields} = this.props.form;

		return (
			<Form
				style={styles.container}
				onSubmit={(err, values) => {
					event.preventDefault();
					validateFields({force: true}, (err, values) => {
						if (!err) {
							LocalStorageUtils.setUserName(values.username);
							MangoUtils.dispatch(this, 'user_entry', 'onLogin', {req: values});
						}
					});
				}}>
				<Tabs
					style={styles.container_tabs}
					animated={false}
					defaultActiveKey={'tab_username'}
					onChange={(key) => {
						MangoUtils.dispatch(this, 'user_entry', 'pureChangeTab', {type: key});
					}}
				>
					{/*用户名密码登录*/}
					<TabPane key="tab_username" tab={Strings.login_account} tabBarStyle={{backgroundColor: 'red'}}
							 tabPosition={'right'}>
						{this.renderLoginByUsername()}
					</TabPane>

				</Tabs>

				{this.renderBottomLogin()}

			</Form>

		);
	}

	/**
	 * 用户名登录
	 */
	renderLoginByUsername = () => {
		const {notice,} = this.props.user_entry;
		const {getFieldDecorator} = this.props.form;

		return (
			<div>
				{
					notice &&
					<Alert style={{marginBottom: 24}} message={notice} type="error" showIcon closable/>
				}

				{/*用户名*/}
				<Form.Item>
					{
						getFieldDecorator('username', {
							rules: [
								{
									required: true,
									message: '用户名是必须输入的'
								}
							]
						})(
							<Input size={'large'} placeholder={'admin'}/>
						)
					}
				</Form.Item>

				{/*密码*/}
				<Form.Item>
					{
						getFieldDecorator('password', {
							rules: [
								{
									required: true,
									message: '密码是必须输入的'
								}
							]
						})(
							<Input size={'large'} placeholder={'123456'} type={'password'}/>
						)
					}
				</Form.Item>


			</div>
		);
	};

	/**
	 * 登录底部
	 */
	renderBottomLogin = () => {
		const {autoLogin} = this.props.user_entry;
		const {submitting} = this.props;
		return (
			<div>
				{/*/!*自动登录*!/*/}
				{/*<div style={styles.flex_line}>*/}
				{/*<Checkbox checked={autoLogin} onChange={(e) => {*/}
				{/*MangoUtils.dispatch(this, 'user_entry/changeAutoLogin', e.target.checked);*/}
				{/*}}>*/}
				{/*{Strings.keep_login}*/}
				{/*</Checkbox>*/}
				{/*</div>*/}

				<Form.Item>
					<Button
						size="large"
						loading={submitting}
						type="primary"
						htmlType="submit"
						block
					>
						{Strings.login}
					</Button>

				</Form.Item>


			</div>
		);
	};
}

const styles = {
	container: {
		padding: Dimens.d8,
		width: '36%',
	},
	container_tabs: {
		borderBottom: 0,
		marginBottom: Dimens.d14,
	},
	flex_line: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
};

export default LoginFragment;
