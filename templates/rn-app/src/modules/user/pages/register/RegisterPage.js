/**
 * 注册界面
 */
import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect, Mango } from 'mango-rn';

@connect(({namespace}) => ({namespace}))
class RegisterPage extends PureComponent {

  constructor(props) {
    super(props);
    this.data = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>注册</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterPage;
