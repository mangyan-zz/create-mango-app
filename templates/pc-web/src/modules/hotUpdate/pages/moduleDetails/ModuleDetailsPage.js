/**
 * Created by zhongzihuan on 2018/12/28.
 * 模块详情页
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-web';
import { Table, Divider, Tag } from 'antd';
import Themes from '../../../../assets/Theme';
import { MangoUtils, RouterUtils } from 'mango-web';
import ModelCode from '../../ModelCode';
import { PageHeader } from 'ant-design-pro';

@connect(({module_detail}) => ({module_detail}))
class ModuleDetailsPage extends PureComponent {

	componentDidMount() {
		this.loadData();
	}

	render() {
		const columns = [
			{
				title: '更新标题',
				dataIndex: 'updateTitle',
				key: 'updateTitle',
			}, {
				title: '更新描述',
				dataIndex: 'updateDesc',
				key: 'updateDesc',
			}, {
				title: '发布时间',
				key: 'createTime',
				dataIndex: 'createTime',
			}, {
				title: '版本名称',
				dataIndex: 'versionName',
				key: 'versionName'
			}, {
				title: '更新方式',
				dataIndex: 'updateFlag',
				key: 'updateFlag',
			}, {
				title: '提示方式',
				dataIndex: 'remindMode',
				key: 'remindMode',
			}, {
				title: '操作',
				key: 'action',
				render: (text, record) => (
					<span>
      <a href="javascript:;">发布</a>
      <Divider type="vertical"/>
      <a href="javascript:;">编辑</a>
					 <Divider type="vertical"/>
      <a href="javascript:;">回滚</a>
    </span>
				),
			}
		];

		const {data} = this.props.module_detail;
		console.log('shushsu', data);
		return (
			<div>
				<PageHeader
					style={{paddingTop: 0}}
					title={'更新详情'}
				/>
				<div style={Themes.style_content}>
					<Table columns={columns} dataSource={data} pagination={{pageSize: 10}}/>
				</div>
			</div>

		);
	}

	loadData = () => {
		const {platform, moduleCode} = RouterUtils.getParams();

		MangoUtils.dispatch(this, ModelCode.module_detail, 'onGetBundleRecordByModuleCode', {
			platform: platform,
			moduleCode: moduleCode
		});
	};
}

const styles = {
	container: {},
};

export default ModuleDetailsPage;
