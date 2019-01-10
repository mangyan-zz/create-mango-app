/**
 * Created by zhongzihuan on 2018/12/29.
 * 获取包配置信息
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-web';
import { Form, Input, Checkbox, Button, Modal, Row, Col, message, Radio, Select } from 'antd';
import { PageHeader } from 'ant-design-pro';
import { Dimens, MangoUtils } from 'mango-web';
import ModelCode from '../../ModelCode';
import ColorPalette from '../../../../assets/ColorPalette';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Themes from '../../../../assets/Theme';

@connect(({packageConfig}) => ({packageConfig}))
@Form.create()
class PackageConfigPage extends PureComponent {

	// 构造
	constructor(props) {
		super(props);
		// 初始状态
		this.data = {
			//选择的模块code
			moduleCodeArr: [],
		};
	}

	componentDidMount() {
		MangoUtils.dispatch(this, ModelCode.packageConfig, 'onQueryUpdate');
	}

	render() {
		const {form} = this.props;
		const {dataModules, isCheckAll, checkedModuleCode} = this.props.packageConfig;

		const children = [];
		for (let i = 10; i < 36; i++) {
			children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
		}

		return (
			<div>
				{this.renderHeader()}
				{/*todo 样式规划*/}
				<div style={{
					margin: Dimens.d24,
					minHeight: Dimens.d560,
					backgroundColor: ColorPalette.white,
					padding: Dimens.d24,
				}}>
					<Form
						onSubmit={(err, values) => {
							// event.preventDefault();
							if (checkedModuleCode.length === 0) {
								message.error('请选择要更新的模块');
								return false;
							}
							form.validateFields({force: true}, (err, values) => {
								if (!err) {
									values.moduleCode = checkedModuleCode;
									MangoUtils.dispatch(this, ModelCode.packageConfig, 'onGetAppBundleConfig', {values: values});
								}
							});
						}}
					>
						{/*输入要发布的版本*/}
						<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={'输入要发布的App版本'}>
							{form.getFieldDecorator('appVersionCode', {
								rules: [{required: true, message: '请输入即将要发布的APP版本', min: 1, max: 200}],
							})(<Input placeholder={'请输入即将要发布的APP版本'} rows={4}/>)}
						</Form.Item>


						{/*选择要更新的模块*/}
						<Form.Item
							labelCol={{span: 6}} wrapperCol={{span: 15}} label={'选择要更新的模块'}>
							{form.getFieldDecorator('moduleCode', {})(
								<div>
									<Checkbox
										indeterminate={isCheckAll}
										onChange={() => {
											MangoUtils.dispatch(this, ModelCode.packageConfig, 'pureToggleCheckAll');
										}}
										checked={isCheckAll}
									>
										全选
									</Checkbox>

									<div style={styles.checkedList}>
										<Checkbox.Group
											style={{width: '100%'}}
											value={checkedModuleCode}
											onChange={this.onChange}
										>
											<Row>
												{dataModules.map((item) => (
													<Col span={8}>
														<Checkbox
															value={item.moduleCode}
														>
															{item.moduleName}
														</Checkbox>
													</Col>
												))}
											</Row>
										</Checkbox.Group>
									</div>
								</div>
							)}
						</Form.Item>


						<div style={{display: 'flex', justifyContent: 'center'}}>
							<Button
								type="primary"
								size="large"
								htmlType="submit"
								style={{marginTop: Dimens.d40}}
							>
								获取打包配置
							</Button>
						</div>


					</Form>


				</div>


				{this.renderConfigModal()}

			</div>
		);
	}

	/**
	 * 配置显示Model
	 * @returns {*}
	 */
	renderConfigModal = () => {
		const {showConfigModel, config} = this.props.packageConfig;
		return (
			<Modal
				title="配置信息"
				visible={showConfigModel}
				footer={null}
				onOk={() => {

				}}
				onCancel={() => (MangoUtils.dispatch(this, ModelCode.packageConfig, 'pureShowConfigModal'))}
			>

				<p style={{width: '100%'}}>
					{config}
				</p>

				<div style={{display: 'flex', justifyContent: 'flex-end'}}>
					<CopyToClipboard text={config}
									 onCopy={() => {
										 message.success('打包配置已复制');
										 MangoUtils.dispatch(this, ModelCode.packageConfig, 'pureShowConfigModal');
									 }}>
						<Button type="primary">复制</Button>
					</CopyToClipboard>
				</div>


			</Modal>
		);
	};

	/**
	 * 头部
	 * @returns {*}
	 */
	renderHeader = () => {
		const {selectPlatform} = this.props.packageConfig;

		const action = (
			<div>
				<Radio.Group
					defaultValue="android"
					buttonStyle="solid"
					onChange={
						(e) => {
							MangoUtils.dispatch(this, ModelCode.packageConfig, 'pureMenuRadioChange', {value: e.target.value});
							MangoUtils.dispatch(this, ModelCode.packageConfig, 'onQueryUpdate');
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

	onChange = (value) => {
		MangoUtils.dispatch(this, ModelCode.packageConfig, 'pureRefreshCheckList', {value: value});
	};

}

const styles = {
	container: {},
	radio_ios: {
		width: Dimens.d100,
		display: 'flex',
		justifyContent: 'center'
	},
	checkedList: {
		width: '100%',
		borderWidth: Dimens.d1,
		borderColor: Themes.line_color,
		borderStyle: 'solid',
		paddingLeft: Dimens.d16,
		paddingRight: Dimens.d16,
		paddingTop: Dimens.d8,
		paddingBottom: Dimens.d8,
		borderRadius: Dimens.d4
	}
};

export default PackageConfigPage;
