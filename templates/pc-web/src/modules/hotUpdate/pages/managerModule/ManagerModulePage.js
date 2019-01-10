/**
 * Created by zhongzihuan on 2018/12/25.
 * 模块管理页面
 */
import React, { PureComponent } from 'react';
import { connect, DateUtils, MangoUtils, RouterUtils, Dimens, DataUtils } from 'mango-web';
import { List, Card, Button, Icon, Avatar, Radio, } from 'antd';
import { PageHeader, Ellipsis } from 'ant-design-pro';

import Themes from '../../../../assets/Theme';
import ModelCode from '../../ModelCode';
import Strings from '../../Strings';
import UpdateModalFragment from './fragments/UpdateModalFragment';
import AddModuleFragment from './fragments/AddModuleFragment';

@connect(({managerModule, app, loading}) => ({
	managerModule,
	app,
	pageLoading: loading.effects['managerModule/onQueryUpdate'],
	submitCreateModuleLoading: loading.effects['managerModule/onCreateNewModule'],
}))
class ManagerModulePage extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	componentDidUpdate(preProps) {

		const {selectSliderMenuItem} = this.props.app;
		let preSelectSliderMenuItem = DataUtils.get(preProps, 'app.selectSliderMenuItem');

		if (selectSliderMenuItem !== preSelectSliderMenuItem) {
			this.loadData();
		}
	}

	componentDidMount() {
		this.loadData();
	}

	render() {

		const {data} = this.props.managerModule;
		const {pageLoading} = this.props;

		return (
			<div>
				{this.renderHeader()}
				<div style={styles.container}>
					<List
						rowKey="id"
						loading={pageLoading}
						grid={{gutter: 24, lg: 3, md: 2, sm: 1, xs: 1}}
						dataSource={['', ...data]}
						renderItem={this.renderItem}
					/>
				</div>
				{/*新增模块*/}
				<AddModuleFragment/>
				{/*更新模块*/}
				<UpdateModalFragment/>
			</div>
		);
	}

	/**
	 * 头部
	 * @returns {*}
	 */
	renderHeader = () => {
		const {selectPlatform} = this.props.managerModule;

		const action = (
			<div>
				<Radio.Group
					defaultValue="android"
					buttonStyle="solid"
					onChange={
						(e) => {
							MangoUtils.dispatch(this, ModelCode.managerModule, 'pureMenuRadioChange', {value: e.target.value});
							MangoUtils.dispatch(this, ModelCode.managerModule, 'onQueryUpdate', {value: e.target.value});
						}
					}
					size={'large'}
					style={{display: 'flex', justifyContent: 'flex-end'}}>
					<Radio.Button value="android" style={{width: Dimens.d100}}>Android</Radio.Button>
					<Radio.Button value="ios" style={styles.radio_ios}>IOS</Radio.Button>
				</Radio.Group>
			</div>
		);

		return (
			<PageHeader
				style={{paddingTop: 0}}
				title={selectPlatform + '热更新包管理'}
				action={action}
			/>
		);
	};

	/**
	 * 子列表项
	 * @param item
	 * @returns {*}
	 */
	renderItem = (item) => {
		const {selectPlatform} = this.props.managerModule;
		if (item) {
			return (
				<List.Item key={item.id} style={styles.list_item}>
					<Card hoverable style={styles.card} actions={[
						<a onClick={() => {
							RouterUtils.push('ModuleDetailsPage', {
								platform: selectPlatform,
								moduleCode: item.moduleCode
							});
						}}>详情</a>,
						<a
							style={{color: Themes.primary_color}}
							onClick={() => {
								MangoUtils.dispatch(this, ModelCode.managerModule, 'pureUpdateModal', {
									selectModuleCode: item.moduleCode,
									selectModuleName: item.moduleName
								});
							}}
						>
							上传更新
						</a>
					]}>
						<Card.Meta
							avatar={
								<Avatar
									style={{
										backgroundColor: Themes.primary_color,
										verticalAlign: 'middle'
									}}
									size="large">
									{item.moduleName.substring(0, 1)}
								</Avatar>
							}
							title={<a>{item.moduleName}</a>}
							description={
								<Ellipsis style={styles.desc} lines={2}>
									{item.moduleDesc}
								</Ellipsis>
							}
						/>

						<div style={{display: 'flex', marginTop: Dimens.d20, justifyContent: 'center'}}>
							<span style={styles.span}>{Strings.last_update}</span>
							<span
								style={styles.em}>{DateUtils(item.updateTime).format('YYYY-MM-DD HH:mm')}</span>
						</div>
					</Card>
				</List.Item>
			);
		} else {
			return (
				<List.Item>
					<Button type="dashed" style={styles.bt_new} onClick={() => {
						MangoUtils.dispatch(this, ModelCode.managerModule, 'pureShowAddModuleModal');
					}}>
						<Icon type="plus"/>
						{Strings.add_module}
					</Button>
				</List.Item>
			);
		}

	};

	loadData = () => {
		const {selectSliderMenuItem} = this.props.app;
		MangoUtils.dispatch(this, 'managerModule', 'onQueryUpdate', {selectSliderMenuItem: selectSliderMenuItem});
	};

}

const styles = {
	container: {
		margin: Dimens.d24,
		minHeight: Dimens.d560,
	},
	card: {
		height: Dimens.d202,
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
	},
	card_avatar: {
		width: Dimens.d48,
		height: Dimens.d48,
		borderRadius: Dimens.d48,
	},

	bt_new: {
		backgroundColor: Themes.bg_color_white,
		borderRadius: Themes.border_radius_sm,
		color: Themes.font_color_secondary,
		width: Dimens.fill_width,
		height: Dimens.d202
	},
	list_item: {
		height: Dimens.d202
	},
	em: {
		marginLeft: Dimens.d12,
		color: Themes.font_color_secondary,
		fontSize: Themes.font_size_sm
	},
	desc: {
		height: Dimens.d40,
	},
	span: {
		color: Themes.font_color_secondary,
		fontSize: Themes.font_size_sm
	},
	radio_ios: {
		width: Dimens.d100,
		display: 'flex',
		justifyContent: 'center'
	}
};

export default ManagerModulePage;
