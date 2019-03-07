/**
 * 登录
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { connect, Mango } from 'mango-rn';
import Strings from '../../../res/Strings';
import Styles from '../../../res/Styles';
import ModuleCode from '../../../res/ModuleCode';

@connect(({userPublic}) => ({userPublic}))
class LoginView extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {
			phone: '',	//输入手机号
			pwd: '',	//输入密码
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<TextInput
						placeholder={Strings.phPhone}
						style={Styles.input}
						onChangeText={(text) => {
							this.data.phone = text;
						}}
					/>
					<TextInput
						placeholder={Strings.phPwd}
						style={Styles.input}
						onChangeText={(text) => {
							this.data.pwd = text;
						}}
					/>
				</View>

				<Button title={Strings.login} onPress={() => {
					Mango.dispatch(this, ModuleCode.userPublic, 'loginIn', {
						req: {
							phone: this.data.phone,
							pwd: this.data.pwd
						}
					});
				}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {flex: 1},
});

export default LoginView;
