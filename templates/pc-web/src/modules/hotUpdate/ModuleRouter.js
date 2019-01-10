/**
 * Created by zhongzihuan on 2018/11/15.
 * 模块路由表作用
 */
import React from 'react';
import { Route } from 'mango-web/router';
import { MangoUtils } from 'mango-web';
import ManagerModulePage from './pages/managerModule/ManagerModulePage';
import ManagerModuleModel from './pages/managerModule/ManagerModuleModel';
import ModuleDetailsPage from './pages/moduleDetails/ModuleDetailsPage';
import ModuleDetailsModel from './pages/moduleDetails/ModuleDetailsModel';
import PackageConfigModel from './pages/packageConfig/PackageConfigModel';
import PackageConfigPage from './pages/packageConfig/PackageConfigPage';

const ModuleRouter = (props) => {
	// console.log("模块路由栈："+JSON.stringify(props))
	const {match, app} = props;

	return (
		<div>

			{/*管理模块*/}
			<Route
				exact
				path={`${match.path + '/ManagerModulePage'}`}
				component={ManagerModulePage}
				registerModel={MangoUtils.registerModel(app, ManagerModuleModel)}
			/>


			{/*模块详情页*/}
			<Route
				exact
				path={`${match.path + '/ModuleDetailsPage'}`}
				component={ModuleDetailsPage}
				registerModel={MangoUtils.registerModel(app, ModuleDetailsModel)}
			/>

			{/*模块详情页*/}
			<Route
				exact
				path={`${match.path + '/PackageConfigPage'}`}
				component={PackageConfigPage}
				registerModel={MangoUtils.registerModel(app, PackageConfigModel)}
			/>


		</div>
	);
};

export { ModuleRouter };





