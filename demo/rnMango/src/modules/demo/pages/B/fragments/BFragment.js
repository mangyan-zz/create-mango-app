/**
 * Created by zhongzihuan on 2019/2/12.
 */
import React, { PureComponent } from 'react';
import { connect } from 'mango-native';

@connect(({namespace}) => ({namespace}))
class BFragment extends PureComponent {

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

export default BFragment;
