/**
 * 应用入口文件
 */
import React from 'react';
import { mango, createLoading } from 'mango-web';

import AppModel from './AppModel';
import { RouterConfig } from './config/RouterConfig';

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





