import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { authEmail } from '../../actions'
import { Title, Form, InputControl, PrimaryButton, Loader, FadeIn, Message } from '../../../core'
import { email, required } from '../../../core/services/validations'
import Wrapper from '../../components/Wrapper'

class Login extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    history: PropTypes.object.isRequired,
    authEmail: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.value
    })
  }

  // Form refs

  getFormRefs () {
    return [this.inputEmail, this.inputPassword]
  }

  // Check form ready

  submit = (e) => {
    const errors = this.getFormRefs().filter(ref => ref.validator() !== true)
    if (errors.length) {
      errors.shift().getInput().focus()
    } else {
      this.props.authEmail(this.state.email, this.state.password)
    }
    e.preventDefault()
  }

  componentWillMount () {
    if (this.props.auth.authenticated) {
      this.props.history.replace('/dashboard')
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.auth.authenticated === nextProps.auth.authenticated) {
      return false
    }
    if (nextProps.auth.authenticated) {
      this.props.history.replace('/dashboard')
    }
  }

  componentDidMount () {
    this.inputEmail.getInput().focus()
  }

  render () {
    return (
      <Wrapper>
        <FadeIn>
          <Form onSubmit={this.submit}>
            <Title>
              {this.props.intl.formatMessage({id: 'account.login.title'})}
              <Link to={'/account/forgot'}>{this.props.intl.formatMessage({id: 'account.forgot.action'})}</Link>
            </Title>
            {this.props.failed && (
              <Message error message={this.props.intl.formatMessage({id: 'account.login.failed'})} />
            )}
            <div className={'pure-g'}>
              <div className={'pure-u-1'}>
                <InputControl
                  ref={ref => (this.inputEmail = ref)}
                  label={this.props.intl.formatMessage({id: 'account.global.placeholder.email'})}
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  validation={email(this.props.intl.formatMessage({id: 'account.global.validation.email'}))}
                />
              </div>
              <div className={'pure-u-1'}>
                <InputControl
                  ref={ref => (this.inputPassword = ref)}
                  label={this.props.intl.formatMessage({id: 'account.global.placeholder.password'})}
                  type={'password'}
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  validation={required(this.props.intl.formatMessage({id: 'account.global.validation.password'}))}
                />
              </div>
              <div className={'pure-u-1'}>
                {this.props.fetching ? (
                  <Loader />
                ) : (
                  <PrimaryButton>
                    {this.props.intl.formatMessage({id: 'account.login.button.submit'})}
                  </PrimaryButton>
                )}
              </div>
            </div>
          </Form>
        </FadeIn>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.lang,
    auth: state.auth.current,
    failed: state.auth.email.failed,
    fetching: state.auth.email.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authEmail: (email, password) => dispatch(authEmail(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Login))
