/**
 * 用户个人中心
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { connect } from 'mango-rn';

@connect(({namespace}) => ({namespace}))
class UserCenterPage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
});

export default UserCenterPage;
