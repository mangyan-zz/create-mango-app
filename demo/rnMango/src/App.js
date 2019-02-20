/**
 * 应用入口界面
 */
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { connect, Dimens } from 'mango-native';
import Images from './assets/Images';
import Themes from './assets/Themes';

@connect()
class App extends Component {

	componentDidMount() {
	}

	render() {
		return (
			<View>
				<View style={styles.header}>
					<Text style={styles.fontWelcome}>Welcome to mango！</Text>
				</View>

				<View style={Themes.centerColumn}>

					<Image style={styles.logo} src={Images.logo}/>

					<Text style={{textAlign: 'center'}}>
						Edit <Text>src/App.js</Text> and save to reload.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: Themes.primaryColor,
		minHeight: Dimens.d100,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: Themes.bgColorWhite
	},
	logo: {
		display: 'flex',
		margin: Dimens.d50,
		height: Dimens.d300,
	},
	fontWelcome: {
		fontFamily: 'Georgia,sans-serif',
		fontSize: Themes.fontSizeLg,
		fontWeight: 'bold'
	},
});

export default App;
