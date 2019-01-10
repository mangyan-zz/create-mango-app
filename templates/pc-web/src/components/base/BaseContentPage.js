/**
 * Created by zhongzihuan on 2018/11/24.
 * 界面基类的
 * 共享
 * （1）界面的GA统计
 * 扩展
 *
 *
 * 页面过渡效果
 *
 *
 *   app-loading的思考
 *   框架中入口配置的loading只提供当前异步加载方法的状态
 *
 */
import React, { PureComponent } from 'react';
import PageHeader from '../../../node_modules/ant-design-pro/lib/PageHeader';
import Dimens from 'mango-web/assets/Dimens';

function BaseContentPage(WrappedComponent, pageConfig) {
	//返回一个新的组件
	return class extends PureComponent {

		componentWillMount() {
		}

		componentDidMount() {
		}

		render() {
			//对所有界面组件的控制，如果是加载数据，就要加loading，对loading的一个统一配置
			const {name, title, loading} = pageConfig;
			return (
				<div style={styles.container}>
					{this.renderHeader()}
					<WrappedComponent/>
				</div>
			);
		}

		/**
		 * 头部
		 * @returns {*}
		 */
		renderHeader = () => {
			return (
				<PageHeader
					style={{paddingTop: 0}}
					title={'热更新包管理'}
				/>
			);
		};

	};
}

/**
 * GA统计界面打点
 */
function gaPage(name) {
	console.log('GA界面打点' + name);
}

const styles = {
	container: {
		margin: Dimens.d24,
		minHeight: Dimens.d560,
	},
};

export default BaseContentPage;
