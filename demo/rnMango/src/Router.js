import React, { PureComponent } from 'react'
import {
	createStackNavigator,
} from 'react-navigation'
import {
	reduxifyNavigator,
	createReactNavigationReduxMiddleware,
	createNavigationReducer,
} from 'react-navigation-redux-helpers'
import { connect } from 'dva'

import Login from './Login'

const AppNavigator = createStackNavigator(
	{
		Login: { screen: Login },
	},
	{
		headerMode: 'none',
		mode: 'modal',
		navigationOptions: {
			gesturesEnabled: false,
		},
	}
)


const App = reduxifyNavigator(AppNavigator, 'root')


@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {


	render() {
		const { app, dispatch, router } = this.props
		return <App dispatch={dispatch} state={router} />
	}
}

export default Router
