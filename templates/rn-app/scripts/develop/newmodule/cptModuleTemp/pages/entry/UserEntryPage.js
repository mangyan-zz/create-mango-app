/**
 * 用户登录入口
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect, Mango, Router, Dimens } from 'mango-rn';
import ModuleCode from '../../res/ModuleCode';
import LoginView from './views/LoginView';
import LoginByCodeView from './views/LoginByCodeView';
import Strings from '../../res/Strings';
import Title from '../../../../components/title/Title';

@connect(({userPublic}) => ({userPublic}))
class UserEntryPage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {

		const {entryType} = this.props.userPublic;

		return (
			<View style={styles.container}>
				<Title/>

				<View style={styles.header}>
					<Button
						title={Strings.login}
						onPress={() => {
							Mango.dispatch(this, ModuleCode.userPublic, 'changeLoginTab', {value: 1});
						}}
					/>

					<Button
						title={Strings.loginBySmsCode}
						onPress={() => {
							Mango.dispatch(this, ModuleCode.userPublic, 'changeLoginTab', {value: 2});
						}}
					/>
				</View>

				{
					entryType === 1 ?
						<LoginView/>
						:
						<LoginByCodeView/>
				}


				<Button
					title={Strings.register}
					onPress={() => {
						Router.navigate(this.props.navigation, 'RegisterPage');
					}}
				/>


			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});

export default UserEntryPage;
