/**
 * Created by mangyan on 2018/12/9.
 * 注册结果页
 */
import React, { Component } from 'react'
import { Button, message } from 'antd'
import { Result } from 'ant-design-pro'
import Strings from '../../../Strings'
import { Dimens, RouterUtils,connect } from 'mango-web'
import AuthorityUtils from '../../../../../utils/AuthorityUtils'

const actions = (
  <div>
	<Button size="large" type="primary" onClick={() => {
	  message.info('暂时不支持')
	}}>
	  {Strings.view_mailbox}
	</Button>
	<Button size="large" style={{marginLeft: Dimens.d8}} onClick={() => {
	  AuthorityUtils.setToken('token')
	  RouterUtils.push('/HomePage')
	}}>
	  {Strings.back_home}
	</Button>
  </div>
)

@connect(({user_entry}) => ({user_entry}))
class RegisterResult extends Component {

  render() {
	const {account} = this.props.user_entry
	return (
	  <Result
		style={styles.registerResult}
		type="success"
		title={
		  <div style={styles.title}>
			{Strings.register_result_account + account + Strings.register_result_ok}
		  </div>
		}
		description={Strings.activation_email}
		actions={actions}
		style={{marginTop: 56}}
	  />
	)
  }
}

const styles = {
  registerResult: {},
  title: {},
  actions: {
	width: '100px',
	height: '10px',
	backgroundColor: 'red'
  },
}

export default RegisterResult
