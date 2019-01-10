/**
 * 应用入口文件
 */
import React from 'react';
import { mango } from 'mango-web';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';

import AppModel from './AppModel';
import { RouterConfig } from './config/RouterConfig';

import { createLoading } from 'mango-web';

const app = mango({
	onError(error) {
		console.log('应用层统一错误处理');
	},

	onStateChange: (state) => {
		// console.log('state改变了' + JSON.stringify(state));
	},

});

app.use(createLoading());

app.model(AppModel);

app.router(RouterConfig);

app.start('#root');

const dispatch = app._store.dispatch;

export { dispatch };





