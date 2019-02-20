/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import dva from 'dva';

import Router from './src/Router';

//
const app = dva();
//
const App = app.start(<Router/>);

AppRegistry.registerComponent('rnMango', () => App);
