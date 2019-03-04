/**
 * 模块路由
 */
import React, { Component } from 'react';
import { Route } from 'mango-web/router';
import { Mango } from 'mango-web';
import ToNamePage from './pages/toName/ToNamePage';
import ToNameModel from './pages/toName/ToNameModel';

export default class ModuleRouter extends Component {

	render() {
		const {match, app} = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path + '/ToNamePage'}`}
					component={ToNamePage}
					registerModel={Mango.registerModel(app, ToNameModel)}
				/>
			</div>
		);
	}
}






