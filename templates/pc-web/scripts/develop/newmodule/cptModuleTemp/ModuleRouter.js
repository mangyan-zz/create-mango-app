/**
 *
 */
import React, { Component } from 'react';
import { Route } from 'mango-web/router';
import { MangoUtils } from 'mango-web';
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
					registerModel={MangoUtils.registerModel(app, ToNameModel)}
				/>
			</div>
		);
	}
}





