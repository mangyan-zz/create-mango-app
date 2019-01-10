/**
 * Created by zhongzihuan on 2018/12/23.
 * 界面头  使用Layout布局，协助进行页面级整体布局
 * （1）组件的定位,界面的菜单，Layout布局中的Header
 * （2）功能包含：对slider的控制，站内搜索，使用文档、消息、用户信息操作、国际化语言操作
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-web';

import { Icon, Layout, Menu, Dropdown, Avatar } from 'antd';

import { Dimens, MangoUtils } from 'mango-web';
import Themes from '../../../../../assets/Theme';
import LocalStorageUtils from '../../../../../utils/LocalStorageUtils';

const {Header} = Layout;

@connect(({app}) => ({app}))
class HeaderFragment extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const {collapsed} = this.props.app;
		return (
			<Header style={styles.header}>
				<Icon
					style={styles.trigger}
					type={collapsed ? 'menu-unfold' : 'menu-fold'}
					onClick={() => MangoUtils.dispatch(this, 'app', 'pureChangeSliderCollapsed')}
				/>
				{/*头部右侧导航*/}
				{this.renderRight()}
			</Header>
		);

	}

	renderRight = () => {

		let username = LocalStorageUtils.getUserName();

		return (
			<div style={styles.menuRight}>

				{/*个人中心——下拉菜单*/}
				<Dropdown overlay={this.renderUserMenu()}>
					<span style={{marginRight: Dimens.d24, marginLeft: Dimens.d24}}>
						<Avatar
							size="small"
							style={styles.menuRightAvatar}>
					{username && username.substring(0, 1)}
				</Avatar>
					  <span className={styles.name}>{username}</span>
					</span>
				</Dropdown>


			</div>

		);
	};

	/**
	 * 语言选择列表菜单
	 * @returns {*}
	 */
	renderLangMenu = () => {
		return (
			<Menu style={styles.menuDropdown} selectedKeys={[]} onClick={this.onMenuClick}>
				<Menu.Item key="zh-CN">
					  <span role="img" aria-label="简体中文">
						🇨🇳
					  </span>{' '}
					简体中文
				</Menu.Item>
				<Menu.Item key="zh-TW">
					  <span role="img" aria-label="繁体中文">
						🇭🇰
					  </span>{' '}
					繁体中文
				</Menu.Item>
				<Menu.Item key="en-US">
					  <span role="img" aria-label="English">
						🇬🇧
					  </span>{' '}
					English
				</Menu.Item>
				<Menu.Item key="pt-BR">
					  <span role="img" aria-label="Português">
						🇵🇹
					  </span>{' '}
					Português
				</Menu.Item>
			</Menu>
		);
	};

	/**
	 * 个人中心设置
	 * @returns {*}
	 */
	renderUserMenu = () => {
		const {onMenuClick} = this.props;
		return (
			<Menu style={styles.menuDropdown} selectedKeys={[]} onClick={onMenuClick}>
				<Menu.Divider/>
				<Menu.Item key="logout">
					<Icon type="logout"/>
					退出登录
				</Menu.Item>
			</Menu>
		);

	};
}

const styles = {
	header: {
		background: Themes.bg_color_white,
		padding: 0,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	trigger: {
		fontSize: Dimens.d18,
		lineHeight: Dimens.d64,
		paddingTop: 0,
		paddingLeft: Dimens.d24,
		cursor: 'pointer',
	},
	menuRight: {
		marginRight: Dimens.d16,
	},
	menuRightMenu: {
		marginRight: Dimens.d24,
	},
	menuRightAvatar: {
		marginTop: Dimens.d20,
		marginRight: Dimens.d8,
		marginBottom: Dimens.d20,
		verticalAlign: 'top',
		color: Themes.font_color_white
	},
	menuDropdown: {
		marginTop: Dimens.d24
	},

};

export default HeaderFragment;
