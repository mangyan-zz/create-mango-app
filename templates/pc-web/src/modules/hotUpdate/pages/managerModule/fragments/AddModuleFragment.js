/**
 * Created by zhongzihuan on 2019/1/5.
 * 增加模块
 */
import React, { PureComponent } from 'react';
import { connect, MangoUtils } from 'mango-web';
import { Button, Form, Input, Modal } from 'antd';
import Strings from '../../../Strings';
import ModelCode from '../../../ModelCode';
import AppStrings from '../../../../../assets/AppStrings';

@connect(({managerModule}) => ({managerModule}))
@Form.create()
class AddModuleFragment extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {
		const {form} = this.props;
		const {showAddModuleModal} = this.props.managerModule;
		const {submitCreateModuleLoading} = this.props;

		return (
			<Modal
				destroyOnClose
				title={Strings.add_module}
				visible={showAddModuleModal}
				onCancel={this.cancelClick}
				footer={[
					<Button key="back" onClick={this.cancelClick}>{AppStrings.cancel}</Button>,
					<Button key="submit" type="primary" loading={submitCreateModuleLoading} onClick={this.okClick}>
						{AppStrings.ok}
					</Button>,
				]}
			>
				{/*创建人*/}
				{/*<Form.Item labelCol={{span: 5}} wrapperCol={{span: 15}} label={Strings.creator}>*/}
				{/*<Input defaultValue={'芒言'}/>*/}
				{/*</Form.Item>*/}

				{/*模块名称*/}
				<Form.Item labelCol={{span: 5}} wrapperCol={{span: 15}} label={Strings.module_name}>
					{form.getFieldDecorator('moduleName', {
						rules: [{required: true, message: Strings.phModuleName, min: 1, max: 10}],
					})(<Input placeholder={Strings.phModuleName}/>)}
				</Form.Item>

				{/*模块描述*/}
				<Form.Item labelCol={{span: 5}} wrapperCol={{span: 15}} label={Strings.module_desc}>
					{form.getFieldDecorator('moduleDesc', {
						rules: [{required: true, message: Strings.phModuleDesc, min: 1, max: 200}],
					})(<Input.TextArea placeholder={Strings.phModuleDesc} rows={4}/>)}
				</Form.Item>
			</Modal>
		);
	}

	okClick = (e) => {
		e.preventDefault();
		const {form} = this.props;
		this.props.form.validateFields((err, values) => {
			if (!err) {
				//执行提交
				MangoUtils.dispatch(this, ModelCode.managerModule, 'onCreateNewModule', {req: values});
			}
		});
	};

	cancelClick = () => {
		MangoUtils.dispatch(this, ModelCode.managerModule, 'pureShowAddModuleModal');
	};

}

const styles = {
	container: {},
};

export default AddModuleFragment;
