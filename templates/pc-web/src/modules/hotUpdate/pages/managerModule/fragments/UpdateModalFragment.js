/**
 * Created by zhongzihuan on 2018/12/28.
 * 更新模块
 */
import React, { PureComponent } from 'react';
import { connect, MangoUtils, DataUtils } from 'mango-web';
import { Form, Input, Modal, Radio, Upload, Button, Icon, Select } from 'antd';
import Strings from '../../../Strings';
import AppStrings from '../../../../../assets/AppStrings';
import ModelCode from '../../../ModelCode';

@connect(({managerModule, loading}) => ({
	managerModule,
	submitCreateUpdateLoading: loading.effects['managerModule/onCreateUpdate'],
}))
@Form.create()
class UpdateModalFragment extends PureComponent {

	// 构造
	constructor(props) {
		super(props);
		this.data = {
			//上传成功的文件地址
			fileUrl: '',
			//当前选中平台 更新模式：1全量，2增量
			selectRadioUpdate: 1,
			//当前选中平台 提醒方式：1静默，2弹窗
			selectRadioTip: 1,
			//当前上传版本
			versionCode: '1',
		};
	}

	render() {
		const {form} = this.props;
		const {showUpdateModal,} = this.props.managerModule;
		return (

			<Modal
				destroyOnClose
				title={Strings.update_module}
				visible={showUpdateModal}
				onOk={this.okUpdateHandle}
				okText={AppStrings.ok}
				cancelText={AppStrings.cancel}
				onCancel={() => {
					MangoUtils.dispatch(this, ModelCode.managerModule, 'pureUpdateModal');
				}}
			>
				{/*创建人*/}
				{/*<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.creator}>*/}
				{/*<Input defaultValue={'芒言'}/>*/}
				{/*</Form.Item>*/}

				{/*版本号*/}
				{/*<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.version}>*/}
				{/*{form.getFieldDecorator('versionCode', {*/}
				{/*rules: [{*/}
				{/*required: true,*/}
				{/*message: '请输入版本号',*/}
				{/*min: 1,*/}
				{/*max: 200*/}
				{/*}, {*/}
				{/*required: false,*/}
				{/*pattern: new RegExp(/^[1-9]\d*$/, 'g'),*/}
				{/*message: '请输入正确的版本号',*/}
				{/*min: 1,*/}
				{/*max: 200*/}
				{/*}],*/}
				{/*})(<Input placeholder={'请输入版本号'} rows={4}/>)}*/}
				{/*</Form.Item>*/}

				{/*依赖APP版本号*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.app_version}>
					{form.getFieldDecorator('baseAppVersion', {
						rules: [{
							required: true,
							message: Strings.phAppVersion,
							min: 1,
							max: 200
						}, {
							required: false,
							pattern: new RegExp(/^[1-9]\d*$/, 'g'),
							message: Strings.phAppVersionCheck,
							min: 1,
							max: 200
						}],
					})(<Input placeholder={Strings.phAppVersion} rows={4}/>)}
				</Form.Item>

				{/*更新方式*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.updateFlag}>
					{form.getFieldDecorator('updateFlag', {})(
						<Radio.Group
							onChange={(e) => (this.data.selectRadioUpdate = e.target.value)}
							value={this.data.selectRadioUpdate}
						>
							<Radio value={1}>{Strings.updateFlag1}</Radio>
							<Radio value={2}>{Strings.updateFlag2}</Radio>
						</Radio.Group>
					)}
				</Form.Item>

				{/*更新提示*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.remindMode}>
					{form.getFieldDecorator('remindMode')(
						<Radio.Group
							onChange={(e) => (this.data.selectRadioTip = e.target.value)}
							value={this.data.selectRadioTip}
						>
							<Radio value={1}>{Strings.remindMode1}</Radio>
							<Radio value={2}>{Strings.remindMode2}</Radio>
						</Radio.Group>
					)}
				</Form.Item>

				{/*更新标题*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.updateTitle}>
					{form.getFieldDecorator('updateTitle', {
						rules: [{required: true, message: Strings.phUpdateTitle, min: 1, max: 200}],
					})(<Input placeholder={Strings.phUpdateTitle} rows={4}/>)}
				</Form.Item>

				{/*更新描述*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.updateDesc}>
					{form.getFieldDecorator('updateDesc', {
						rules: [{required: true, message: Strings.phUpdateDesc, min: 1, max: 200}],
					})(<Input.TextArea placeholder={Strings.phUpdateDesc} rows={4}/>)}
				</Form.Item>

				{/*上传更新包*/}
				<Form.Item labelCol={{span: 6}} wrapperCol={{span: 15}} label={Strings.upload}>
					{form.getFieldDecorator('fullDownloadUrl')(this.renderUploader())}
				</Form.Item>


			</Modal>
		);
	}

	/**
	 * 文件上传
	 * @returns {*}
	 */
	renderUploader = () => {
		const props = {
			name: 'multipartFile',
			accept: '.zip',
			action: '/uploadApi/file/upload',
			data: {
				'bucketType': 2,
				'businessSystemName': 'o2o',
				'operatorId': '111',
				'sceneName': 'AppBundleFile',
			},
			onChange: (info) => {
				if (info.file.status !== 'uploading') {
					console.log(info.file, info.fileList);
				}
				if (info.file.status === 'done') {
					this.data.fileUrl = DataUtils.get(info, 'file.response.data.fileUrl');
					//解析版本号
					let fileUrlArr = this.data.fileUrl.split('_');
					let lastUrl = fileUrlArr[fileUrlArr.length - 1];
					let lastUrlArr = lastUrl.split('.');
					this.data.versionCode = lastUrlArr && lastUrlArr[0];
				} else if (info.file.status === 'error') {
				}
			},
		};

		return (
			<Upload {...props}>
				<Button>
					<Icon type="upload"/>
					{AppStrings.uploadFile}
				</Button>
			</Upload>
		);
	};

	/**
	 * 更新确定
	 * @param e
	 */
	okUpdateHandle = (e) => {
		e.preventDefault();
		const {selectModuleName, selectModuleCode} = this.props.managerModule;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				//执行提交
				values.fullDownloadUrl = this.data.fileUrl;
				values.moduleName = selectModuleName;
				values.moduleCode = selectModuleCode;
				values.versionCode = this.data.versionCode;
				MangoUtils.dispatch(this, ModelCode.managerModule, 'onCreateUpdate', {req: values});
			}
		});
	};

}

const styles = {
	container: {},
};

export default UpdateModalFragment;
