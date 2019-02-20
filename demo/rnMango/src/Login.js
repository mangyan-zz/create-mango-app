/**
 * Created by zhongzihuan on 2019/2/13.
 */
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	TouchableOpacity,
	Text,
	View
} from 'react-native'
import { connect } from 'dva'
import {
	NavigationActions
} from 'react-navigation'

@connect(
	appNS => ({ ...appNS }),
	{
		increase: () => (({ type: 'appNS/add' })),
		login: () => (({ type: 'appNS/login' }))
	}
)
export default class Login extends Component {

	static navigationOptions = {
		title: '登录页',
	}

	goLogin() {
		this.props.login()
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.loginButton} onPress={() => this.goLogin()}>
					<Text style={styles.loginLabel}>登录</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
