/**
 *
 */
import React, { Component } from 'react';
import { Route } from 'mango-web/router';
import { MangoUtils } from 'mango-web';
import DemoEntryPage from './pages/entry/DemoEntryPage';

import DemoPublicModel from './models/DemoPublicModel';

export default class ModuleRouter extends Component {

	render() {
		const {match, app} = this.props;

		MangoUtils.registerModel(app, DemoPublicModel);

		return (
			<div>
				<Route
					exact
					path={`${match.path + '/DemoEntryPage'}`}
					component={DemoEntryPage}
				/>
			</div>
		);
	}
}





