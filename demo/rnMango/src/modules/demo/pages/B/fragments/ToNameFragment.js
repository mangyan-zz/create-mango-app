/**
 * Fragment
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-native';

@connect(({namespace}) => ({namespace}))
class ToNameFragment extends PureComponent {

	constructor(props) {
		super(props);
		this.data = {};
	}

	render() {
		return (
			<div style={styles.container}>

			</div>
		);
	}
}

const styles = {
	container: {},
};

export default ToNameFragment;
