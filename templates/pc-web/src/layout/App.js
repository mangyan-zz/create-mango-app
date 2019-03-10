/**
 * 应用入口界面
 */
import React, { Component } from 'react';
import { connect, Dimens } from 'mango-web';
import { Texty } from 'mango-motion-web';
import Images from '../assets/Images';
import Themes from '../assets/Themes';

@connect()
class App extends Component {

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<header style={styles.header}>
					<Texty style={styles.fontWelcome}>Welcome to mango！</Texty>
				</header>

				<div style={Themes.centerColumn}>

					<img style={styles.logo} src={Images.logo} alt="logo"/>

					<p style={{textAlign: 'center'}}>
						Edit <code>src/App.js</code> and save to reload.
					</p>
				</div>


			</div>
		);
	}
}

const styles = {
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
};

export default App;
