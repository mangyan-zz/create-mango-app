import React from 'react';
import { Route } from 'mango-web/router';
import { Mango } from 'mango-web';
import ToNamePage from './pages/toName/ToNamePage';
import ToNameModel from './pages/toName/ToNameModel';

const ModuleRouter = (props) => {

	const {match, app} = props;

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
};

export { ModuleRouter };





