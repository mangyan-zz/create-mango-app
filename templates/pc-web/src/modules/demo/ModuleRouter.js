/**
 *
 */
import React, { Component } from 'react';
import { Route } from 'mango-web/router';
import { Mango } from 'mango-web';
import DemoEntryPage from './pages/entry/DemoEntryPage';

import DemoPublicModel from './models/DemoPublicModel';
import DemoEntryModel from './pages/entry/DemoEntryModel';

export default class ModuleRouter extends Component {

	render() {
		const {match, app} = this.props;

		Mango.registerModel(app, DemoPublicModel);

		return (
			<div>
				<Route
					exact
					path={`${match.path + '/DemoEntryPage'}`}
					component={DemoEntryPage}
					registerModel={Mango.registerModel(app, DemoEntryModel)}
				/>
			</div>
		);
	}
}





