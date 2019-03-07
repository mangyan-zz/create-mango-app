import { AppRegistry } from 'react-native';
import { Mango } from 'mango-rn';

import UserEntryPage from './pages/entry/UserEntryPage';
import UserEntryModel from './pages/entry/UserEntryModel';
import UserCenterPage from './pages/center/UserCenterPage';
import UserCenterModel from './pages/center/UserCenterModel';
import SettingPage from './pages/setting/SettingPage';
import SettingModel from './pages/setting/SettingModel';
import RegisterPage from './pages/register/RegisterPage';

const ModuleRouter = {
	UserEntryPage: {
		screen: UserEntryPage,
		model: UserEntryModel,
	},
	UserCenterPage: {
		screen: UserCenterPage
	},
	SettingPage: {
		screen: SettingPage
	},
	RegisterPage: {
		screen: RegisterPage
	},
};

export {
	ModuleRouter,
};

