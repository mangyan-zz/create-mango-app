/**
 *
 */
import React, { Component, Fragment } from 'react';
import { connect, Dimens } from 'mango-web';
import { Texty } from 'mango-motion-web';
import 'rc-texty/assets/index.css';

import Themes from '../../../../assets/Themes';
import LoginView from './views/LoginView';
import AppStrings from '../../../../assets/AppStrings';
import Images from '../../../../assets/Images';

@connect(({user}) => ({user}))
class DemoEntryPage extends Component {

	// 构造
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div style={styles.container}>
				<img style={styles.img_bg} src={'https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg'}/>

				<div style={styles.top}>
					<div
						style={styles.header}
						onClick={() => {

						}}>
						<img alt="logo" style={styles.img_logo} src={Images.logo}/>
						<Texty style={styles.tv_title} type={'right'}
							   mode={'smooth'}>{AppStrings.appName}</Texty>
					</div>
					<div style={styles.tv_desc}>{AppStrings.appDesc}</div>
				</div>

				<div style={{display: 'flex', justifyContent: 'center'}}>
					<LoginView/>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		backgroundColor: Themes.bgColorSecondary,
		flexDirection: 'column',
		width: Dimens.fill_width,
		height: Dimens.fill_height,
	},
	img_bg: {
		position: 'absolute',
		left: 0,
		backgroundRepeat: 'no-repeat',
		width: Dimens.fill_width,
		height: Dimens.fill_height
	},
	img_logo: {
		height: Dimens.d44,
	},
	top: {
		textAlign: 'center'
	},
	tv_desc: {
		fontSize: Themes.fontSizeSm,
		color: Themes.fontColor,
		marginBottom: Dimens.d20
	},
	tv_title: {
		fontSize: Themes.fontSizeLg,
		color: Themes.fontColorBlack,
		fontWeight: '900',
		marginLeft: Dimens.d15,
		fontFamily: ['Myriad Pro', 'Helvetica Neue', 'Arial', 'Helvetica', 'sans-serif']
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: Dimens.d66,
		marginBottom: Dimens.d10
	}
};

export default DemoEntryPage;
