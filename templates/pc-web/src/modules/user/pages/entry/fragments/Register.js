/**
 * Created by zhongzihuan on 2018/11/28.
 * 用户登录页   容器组件
 * （1）主内容容器
 * （2）账户密码登录
 * （3）手机号登录
 * （4）联名登录
 */
import React, { Component } from 'react'
import { connect } from 'mango-web'

import { Form, Input, Button, Select, Row, Col, Popover, Progress, message } from 'antd'
import Strings from '../../../Strings'
import { Dimens, MangoUtils, RouterUtils } from 'mango-web'
import Themes from '../../../../../assets/Theme'

const FormItem = Form.Item
const {Option} = Select
const InputGroup = Input.Group

const passwordStatusMap = {
  ok: Strings.pwd_strength_strong,
  pass: Strings.pwd_strength_medium,
  poor: Strings.pwd_strength_short,
}

const passwordProgressMap = {
  ok: 'success',
  pass: 'normal',
  poor: 'exception',
}

@connect(({user_entry, loading}) => ({user_entry, submitting: loading.effects['user_entry/onRegistrySubmit']}))
@Form.create()
class Register extends Component {

  // 构造
  constructor(props) {
	super(props)
  }

  componentDidUpdate() {
	const {registryRsp} = this.props.user_entry
	const {form, submitting} = this.props
	const account = form.getFieldValue('mail')
	if (registryRsp) {
	  if (registryRsp.code == 1) {
		MangoUtils.dispatch(this, 'user_entry', 'pureChangeFragment', {account, showFragmentId: 3})
	  } else {
		console.log('====' + JSON.stringify(registryRsp))
		if (!submitting) {
		  message.error('请求异常')
		}
	  }
	}

  }

  render() {
	const {type, notice, autoLogin, count, visible, help, prefix} = this.props.user_entry
	const {submitting} = this.props
	const {getFieldDecorator, validateFields} = this.props.form

	return (
	  <div style={styles.container}>
		<h3>
		  {Strings.register}
		</h3>

		<Form onSubmit={(e) => {
		  event.preventDefault()
		  validateFields({force: true}, (err, values) => {
			if (!err) {
			  MangoUtils.dispatch(this, 'user_entry', 'onRegistrySubmit', {...values, prefix})
			}
		  })
		}}>
		  {/*邮箱*/}
		  <FormItem>
			{getFieldDecorator('mail', {
			  rules: [
				{
				  required: true,
				  message: Strings.email_require,
				},
				{
				  type: 'email',
				  message: Strings.email_wrong_format,
				},
			  ],
			})(
			  <Input size="large" placeholder={Strings.email}/>
			)}
		  </FormItem>

		  {/*密码*/}
		  <FormItem help={help}>
			<Popover
			  getPopupContainer={node => node.parentNode}
			  content={
				<div style={{padding: '4px 0'}}>
				  <div>
					{passwordStatusMap[this.getPasswordStatus()]}
				  </div>
				  {this.renderPasswordProgress()}
				  <div style={{marginTop: 10}}>
					{Strings.pwd_strength}
				  </div>
				</div>
			  }
			  overlayStyle={{width: 240}}
			  placement="right"
			  visible={visible}
			>
			  {getFieldDecorator('password', {
				rules: [
				  {
					validator: (rule, value, callback) => {
					  const {form} = this.props
					  MangoUtils.dispatch(this, 'user_entry', 'pureCheckPassword', {form, value, callback})
					}
				  },
				],
			  })(
				<Input
				  size="large"
				  type="password"
				  placeholder={Strings.pwd_placeholder}
				/>
			  )}
			</Popover>
		  </FormItem>

		  {/*确认密码*/}
		  <FormItem>
			{getFieldDecorator('confirm', {
			  rules: [
				{
				  required: true,
				  message: Strings.pwd_confirm,
				},
				{
				  validator: this.checkConfirm,
				},
			  ],
			})(
			  <Input
				size="large"
				type="password"
				placeholder={Strings.pwd_confirm}
			  />
			)}
		  </FormItem>

		  {/*手机号*/}
		  <FormItem>
			<InputGroup compact>
			  <Select
				size="large"
				value={prefix}
				onChange={(value) => {
				  MangoUtils.dispatch(this, 'user_entry', 'pureChangePrefix', {value})
				}}
				style={{width: '20%'}}
			  >
				<Option value="86">+86</Option>
				<Option value="87">+87</Option>
			  </Select>
			  {getFieldDecorator('mobile', {
				rules: [
				  {
					required: true,
					message: Strings.phone_require,
				  },
				  {
					pattern: /^\d{11}$/,
					message: Strings.phone_wrong,
				  },
				],
			  })(
				<Input
				  size="large"
				  style={{width: '80%'}}
				  placeholder={Strings.phone_placeholder}
				/>
			  )}
			</InputGroup>
		  </FormItem>

		  {/*验证码*/}
		  <FormItem>
			<Row gutter={8}>
			  <Col span={16}>
				{getFieldDecorator('captcha', {
				  rules: [
					{
					  required: true,
					  message: Strings.verification_code_require,
					},
				  ],
				})(
				  <Input
					size="large"
					placeholder={Strings.verification_code_placeholder}
				  />
				)}
			  </Col>
			  <Col span={8}>
				<Button
				  size="large"
				  disabled={count}
				  onClick={() => {
					MangoUtils.dispatch(this, 'user_entry', 'onGetCaptcha',)
				  }}
				>
				  {count && count > 0
					? `${count} s`
					: Strings.get_verification_code}
				</Button>
			  </Col>
			</Row>
		  </FormItem>

		  {/*注册*/}
		  <FormItem>
			<Button
			  size="large"
			  loading={submitting}
			  style={styles.submit}
			  type="primary"
			  htmlType="submit"
			>
			  {Strings.register}
			</Button>

			<p style={styles.login}
			   onClick={() => {
				 MangoUtils.dispatch(this, 'user_entry', 'pureChangeFragment', {showFragmentId: 1})
			   }}>
			  {Strings.sign_in}
			</p>
		  </FormItem>

		</Form>
	  </div>
	)
  }

  renderPasswordProgress = () => {
	const {form} = this.props
	const value = form.getFieldValue('password')
	const passwordStatus = this.getPasswordStatus()
	return value && value.length ? (
	  <div style={styles[`progress-${passwordStatus}`]}>
		<Progress
		  status={passwordProgressMap[passwordStatus]}
		  style={styles.progress}
		  strokeWidth={6}
		  percent={value.length * 10 > 100 ? 100 : value.length * 10}
		  showInfo={false}
		/>
	  </div>
	) : null
  }

  getPasswordStatus = () => {
	const {form} = this.props
	const value = form.getFieldValue('password')
	if (value && value.length > 9) {
	  return 'ok'
	}
	if (value && value.length > 5) {
	  return 'pass'
	}
	return 'poor'
  }

  checkConfirm = (rule, value, callback) => {
	const {form} = this.props
	if (value && value !== form.getFieldValue('password')) {
	  callback(Strings.pwd_twice)
	} else {
	  callback()
	}
  }

}

const styles = {
  container: {
	width: Dimens.d366,
	margin: [0, 'auto']
  },
  login: {
	float: 'right',
	color: Themes.primary_color,
	cursor: 'pointer',
  }
}

export default Register
