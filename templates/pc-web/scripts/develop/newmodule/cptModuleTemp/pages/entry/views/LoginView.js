/**
 * Created by zhongzihuan on 2018/11/28.
 * 用户登录页   容器组件
 * （1）主内容容器
 * （2）账户密码登录
 * （3）手机号登录
 * （4）联名登录
 */
import React, { Component } from 'react';
import { connect, Dimens, MangoUtils, RouterUtils } from 'mango-web';

import { Alert, Button, Checkbox, Col, Form, Input, Row, Tabs, message } from 'antd';
import Strings from '../../../conf/Strings';
import AuthorityUtils from '../../../../../utils/AuthorityUtils';
import LocalStorageUtils from '../../../../../utils/LocalStorageUtils';
import ModuleCode from '../../../conf/ModuleCode';

const TabPane = Tabs.TabPane;

@connect(({userPublic, loading}) => ({userPublic, submitting: loading.effects['user_entry/onLogin']}))
@Form.create()
class LoginView extends Component {

	// 构造
	constructor(props) {
		super(props);

	}

	componentDidUpdate() {
		const {dataLoginRsp} = this.props.userPublic;
		if (dataLoginRsp) {
			//响应成功,跳转到首页,并保存当前的登录状态
			AuthorityUtils.setToken('token');
			RouterUtils.push('/');
		}
	}

	render() {
		const {validateFields} = this.props.form;

		return (
			<Form
				style={styles.container}
				onSubmit={(err, values) => {
					// event&&event.preventDefault();
					validateFields({force: true}, (err, values) => {
						if (!err) {
							MangoUtils.dispatch(this, ModuleCode.userPublic, 'onLogin', {req: values});
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
					<TabPane key="tab_username" tab={Strings.loginAccount} tabBarStyle={{backgroundColor: 'red'}}
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
		const {getFieldDecorator} = this.props.form;

		return (
			<div>
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
		const {submitting} = this.props;
		return (
			<div>
				<Form.Item>
					<Button
						size="large"
						loading={submitting}
						type="primary"
						htmlType="submit"
						block
					>
						{Strings.login + '-' + process.env.REACT_APP_BASE_STYLE}
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

export default LoginView;
