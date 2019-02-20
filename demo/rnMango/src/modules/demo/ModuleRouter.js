import React from 'react';
import { Route } from 'mango-native/router';
import { MangoUtils } from 'mango-native';
import APage from './pages/A/APage';
import BPage from './pages/B/BPage';
import BModel from './pages/B/BModel';
import AModel from './pages/A/AModel';

const ModuleRouter = (props) => {

	const {match, app} = props;

	return (
		<div>
			<Route
				exact
				path={`${match.path + '/a'}`}
				component={APage}
				registerModel={MangoUtils.registerModel(app, AModel)}
			/>

			<Route
				exact
				path={`${match.path + '/b'}`}
				component={BPage}
				registerModel={MangoUtils.registerModel(app, BModel)}
			/>

		</div>
	);
};

export { ModuleRouter };





