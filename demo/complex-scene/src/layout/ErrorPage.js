/**
 * 异常结果页
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import AppStrings from '../assets/AppStrings';
import { Dimens, RouterUtils } from 'mango-web';

const config = {
	403: {
		img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
		title: '403',
		desc: AppStrings.desc_403,
	},
	404: {
		img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
		title: '404',
		desc: AppStrings.desc_404,
	},
	500: {
		img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
		title: '500',
		desc: AppStrings.desc_500,
	},
	504: {
		img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
		title: '504',
		desc: AppStrings.desc_504,
	},
};

class ErrorPage extends Component {

	render() {
		const {type, img} = RouterUtils.getParams();

		const pageType = type in config ? type : '404';
		const pageImg = img || config[pageType].img;
		const pageTitle = config[pageType].title;
		const pageDesc = config[pageType].desc;

		return (
			<div style={styles.container}>
				<div style={styles.imgBlock}>
					<img style={styles.imgEle} src={pageImg} alt="img"/>
				</div>
				<div style={styles.content}>
					<h1>{pageTitle}</h1>
					<div style={styles.desc}>{pageDesc}</div>
					<div style={styles.actions}>
						<Button type="primary">返回首页</Button>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: Dimens.d100,
		paddingLeft: Dimens.d100
	},
	imgBlock: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imgEle: {
		height: Dimens.d360,
		maxWidth: Dimens.d430,
	},
	content: {
		paddingLeft: Dimens.d60
	},
	desc: {
		fontSize: Dimens.d20,
		lineHeight: Dimens.d38,
		marginBottom: Dimens.d16
	}
};

export default ErrorPage;

