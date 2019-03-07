/**
 * Created by zhongzihuan on 2019/3/3.
 */
/**
 * 注释
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { connect, Mango } from 'mango-rn';
import ModuleCode from '../../res/ModuleCode';

@connect(({namespace}) => ({namespace}))
class SettingPage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {

		return (
			<View style={styles.container}>

				<Button onPress={() => {
					Mango.dispatch(this, ModuleCode.setting, 'logout');
				}}>
					退出登录
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
});

export default SettingPage;
