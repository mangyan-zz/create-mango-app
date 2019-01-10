/**
 * 路由表配置管理
 */
import React from 'react';
import { Router, Route, Switch, Link } from 'mango-web/router';

import { ModuleRouter as UserRouter } from '../modules/user';
import { ModuleRouter as HotUpdateRouter } from '../modules/hotUpdate';
import { RouterUtils } from 'mango-web';
import App from '../App';
import ErrorPage from '../layout/ErrorPage';

import HomePage from '../modules/public/pages/home/HomePage';

let appHistory = null;

const RouterConfig = ({history, app}) => {

	RouterUtils.history = history;

	//监听路由变化
	listenRouter(history);

	return (

		<Router history={history}>
			<Switch>

				<Route exact path="/" component={App}/>


				{/*用户模块*/}
				<Route path="/user" render={(props) => (<UserRouter {...props} app={app}/>)}/>

				{/*Error界面*/}
				<Route path="/ErrorPage" component={ErrorPage}/>

				<Route path="/" render={(props) => (
					<HomePage>
						<Route path="/hotUpdate" render={(props) => (<HotUpdateRouter {...props} app={app}/>)}/>
					</HomePage>
				)}/>


			</Switch>
		</Router>
	);
};

function listenRouter(history) {
	history.listen((e) => {
		console.log('路由变化监听' + JSON.stringify(e) + '===' + JSON.stringify(history));
	});
}

export { RouterConfig, appHistory as history };

