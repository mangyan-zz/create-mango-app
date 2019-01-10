import React, { Component } from 'react';
import { connect } from 'mango-web';

import AuthorityUtils from './utils/AuthorityUtils';
import { RouterUtils } from 'mango-web';

@connect()
class App extends Component {

	componentDidMount() {
		//权限验证
		if (!AuthorityUtils.getToken()) {
			RouterUtils.push('user/user-entry');
		} else {
			RouterUtils.push('hotUpdate/ManagerModulePage');
		}
	}

	render() {
		return false;
	}
}

export default App;
