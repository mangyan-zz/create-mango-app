/**
 * Created by zhongzihuan on 2019/3/4.
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Title extends PureComponent {

	static defaultProps = {};

	static propTypes = {};

	constructor(props) {
		super(props);
	}

	render() {
		const {title} = this.props;
		return (
			<View style={styles.container}>
				<Text>{title}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		height: 44,
		width: 100,
	}
});
