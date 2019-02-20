/**
 * 路由表配置管理
 */
import React from 'react';
import { Router, Route, Switch } from 'mango-native/router';

import { ModuleRouter as DemoModuleRouter } from '../modules/demo';
import { RouterUtils } from 'mango-native';
import App from '../App';
import ErrorPage from '../layout/ErrorPage';

let appHistory = null;

const RouterConfig = ({history, app}) => {

	RouterUtils.history = history;

	//监听路由变化
	listenRouter(history);

	return (

		<Router history={history}>
			<Switch>

				<Route exact path="/" component={App}/>

				{/*Demo模块*/}
				<Route path="/new" render={(props) => (<DemoModuleRouter {...props} app={app}/>)}/>

				{/*Error界面*/}
				<Route path="/ErrorPage" component={ErrorPage}/>

			</Switch>
		</Router>
	);
};

function listenRouter(history) {
	history.listen((e) => {

	});
}

export { RouterConfig, appHistory as history };



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});


