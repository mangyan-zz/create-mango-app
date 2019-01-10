/**
 * Created by mangyan on 2018/12/10.
 * 首页
 * 功能处理
 * （1）识别设备屏幕，更新布局
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-web';

import DocumentTitle from 'react-document-title';
import { Layout, Breadcrumb } from 'antd';
import { Dimens, MangoUtils, RouterUtils } from 'mango-web';

import { enquireScreen, unenquireScreen } from 'enquire-js';

import SliderMenuFragment from './fragments/SliderMenuFragment';
import HeaderFragment from './fragments/HeaderFragment';
import AuthorityUtils from '../../../../utils/AuthorityUtils';
import Themes from '../../../../assets/Theme';

@connect(({user, app}) => ({user, app}))
class HomePage extends PureComponent {

	// 构造
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {isMobile} = this.props.app;
		MangoUtils.dispatch(this, 'user', 'onFetchCurrentUser', {});

		//检查当前的设备模式
		this.enquireHandler = enquireScreen(mobile => {
			if (isMobile !== mobile) {
				MangoUtils.dispatch(this, 'app', 'pureUpdateScreen', {mobile: mobile});
			}
		});
	}

	componentDidUpdate(preProps) {

		const {isMobile, collapsed} = this.props.app;

		if (isMobile && !preProps.isMobile && collapsed) {
			//菜单缩放成移动设备屏幕
			MangoUtils.dispatch(this, 'app', 'pureChangeLayoutCollapsed', {collapsed: false});
		}

	}

	componentWillUnmount() {
		//清除设备监听
		unenquireScreen(this.enquireHandler);
	}

	render() {
		const {breadcrumbList} = this.props.app;

		return (
			<DocumentTitle title={'首页'}>
				<Layout style={{display: 'flex', height: Dimens.fill_height}}>
					<SliderMenuFragment onClick={(e) => {
						const {key} = e;
						MangoUtils.dispatch(this, 'app', 'pureChangeMenu', {
							selectSliderMenuItem: key
						});
					}}/>
					{/*顶部*/}
					<Layout>
						<HeaderFragment onMenuClick={this.onMenuClick}/>
						<div style={styles.shadow}/>

						{/*面包屑*/}
						<div style={styles.breadcrumb}>
							<Breadcrumb>
								{
									breadcrumbList.map((item) => {
										return (
											<Breadcrumb.Item key={item.key}>
												<a href={item.href}>{item.title}</a>
											</Breadcrumb.Item>
										);
									})
								}
							</Breadcrumb>
						</div>

						<Layout.Content>
							{this.props.children}
						</Layout.Content>
					</Layout>
				</Layout>
			</DocumentTitle>
		);
	}

	/**
	 * 菜单点击
	 * @param event
	 */
	onMenuClick = (event) => {
		const {key} = event;
		switch (key) {
			case 'logout':
				AuthorityUtils.setToken('');
				RouterUtils.push('/user/user-entry');
				break;
		}
	};

}

const styles = {
	shadow: {
		width: Dimens.fill_width,
		height: Dimens.d1,
		backgroundColor: Themes.line_color,
		boxShadow: '0px 1px 40px #999999',
		marginBottom: Dimens.d2
	},
	breadcrumb:{
		backgroundColor: Themes.bg_color_white,
		paddingLeft: Dimens.d20,
		paddingTop: Dimens.d20
	}
};

export default HomePage;
