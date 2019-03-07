/**
 * 注释
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'mango-rn';

@connect(({namespace}) => ({namespace}))
class LoginByCodeView extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>sdsd</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
});

export default LoginByCodeView;
