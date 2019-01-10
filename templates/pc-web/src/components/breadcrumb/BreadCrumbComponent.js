/**
 * Created by mangyan on 2018/12/20.
 */
import React, { PureComponent } from 'react';

import { Breadcrumb } from 'antd';
import { Dimens } from 'mango-web';

export default class BreadCrumbComponent extends PureComponent {

	static defaultProps = {};

	static propTypes = {};

	constructor(props) {
		super(props);
	}

	render() {
		// const {separator, breadcrumbList} = this.props;
		let breadcrumbList = [
			{title: '1'},
			{title: '2'},
			{title: '3'},
		];
		let separator = '////';

		return (
			<Breadcrumb style={styles.container} separator={separator}>
				{
					breadcrumbList.map(item => {
						<a>{item.title}</a>;
					})
				}
			</Breadcrumb>
		);
	}

}

const styles = {
	container: {
		width: Dimens.fill_width,
		height:Dimens.d122,
		backgroundColor:'red'
	}
};
