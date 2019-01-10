/**
 * Created by mangyan on 2018/12/23.
 * 垂直菜单，子菜单内嵌在菜单区域
 * 侧边导航
 * 要使用自定义触发器，可以设置 trigger={null} 来隐藏默认设定。
 */
import React, { Component } from 'react';
import { connect } from 'mango-web';
import { Link } from 'mango-web/router';

import { Menu, Icon, Layout } from 'antd';
import { Dimens, MangoUtils, RouterUtils } from 'mango-web';
import Themes from '../../../../../assets/Theme';
import Images from '../../../../../assets/Images';
import AppCode from '../../../../../config/AppCode';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const {Sider} = Layout;

@connect(({app}) => ({app}))
class SliderMenuFragment extends Component {

	render() {

		const {collapsed, select_slider_menu, selectSliderMenuItem} = this.props.app;
		return (
			<Sider
				trigger={null}
				collapsible
				width={Dimens.d256}
				collapsed={collapsed}
			>
				<div style={styles.logo}>
					<img src={Images.logo} style={Themes.style_img_logo}/>
				</div>

				<Menu
					theme="dark" mode="inline"
					defaultSelectedKeys={[selectSliderMenuItem]}
					defaultOpenKeys={[select_slider_menu]}
					onClick={(e) => {
						const {router} = e.item.props;
						RouterUtils.push('/' + select_slider_menu + '/' + router, {key: selectSliderMenuItem});
						this.props.onClick(e);
					}}
				>
					{this.renderMenus()}
				</Menu>
			</Sider>
		);
	}

	/**
	 * 只支持三层
	 * @returns {*}
	 */
	renderMenus = () => {
		return AppCode.menu.map((item) => {
			if (item.child) {
				return (
					<SubMenu
						key={item.key}
						title={
							<span>
									<Icon type={item.icon}/>
									<span>
										{item.name}
									</span>
							</span>
						}
					>
						{

							item.child.map((item_child) => (
								<Menu.Item key={item_child.key} router={item_child.router}>{item_child.name}</Menu.Item>
							))
						}
					</SubMenu>
				);
			} else {
				return (
					<Menu.Item key={item.key} router={item.router}>
						<Link to={'/Ho'}>
							<Icon type={item.icon}/>
							{item.name}
						</Link>
					</Menu.Item>
				);
			}
		});
	};
}

const styles = {
	container: {},
	logo: {
		margin: Dimens.d16,
		display: 'flex',
		justifyContent: 'center'
	},
};

export default SliderMenuFragment;
