/**
 * RN入口
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { MangoCreator } from 'mango-rn';
import RouterConfig from './src/RouterConfig';

const app = MangoCreator();

const Router = app.router(RouterConfig, {
	initialRouteName: 'UserEntryPage',
});

const MangoApp = app.start(<Router/>);

AppRegistry.registerComponent("rnDemo", () => {
	//关闭黄色警告，不推荐关闭
	// console.disableYellowBox = true;
	return MangoApp;
});
