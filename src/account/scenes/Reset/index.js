import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { setCurrentUser } from '../../actions'
import { Title, Form, InputControl, PrimaryButton, Loader, FadeIn, Message } from '../../../core'
import { email, equals, required } from '../../../core/services/validations'
import Wrapper from '../../components/Wrapper'

class Login extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      success: null,
      loading: false,
      errors: [],
      email: '',
      password: '',
      passwordConfirmation: ''
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

  onPasswordConfirmationChange = (e) => {
    this.setState({
      passwordConfirmation: e.value
    })
  }

  // Form refs

  getFormRefs () {
    return [this.inputEmail, this.inputPassword, this.inputPasswordConfirmation]
  }

  // Check form ready

  submit = (e) => {
    const errors = this.getFormRefs().filter(ref => ref.validator() !== true)
    if (errors.length) {
      errors.shift().getInput().focus()
    } else {
      this.store()
    }
    e.preventDefault()
  }

  store = async () => {
    try {
      this.setState({loading: true})
      const data = {
        token: this.props.match.params.token,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/reset`, data)
      if (res.status === 200) {
        this.setState({
          loading: false,
          success: this.props.intl.formatMessage({id: 'account.reset.success'})
        })
      } else {
        const errors = res.data.map(err => err)
        this.setState({errors, loading: false})
      }
    } catch (e) {
      const errors = [this.props.intl.formatMessage({id: 'app.request.failure'})]
      this.setState({errors, loading: false})
    }
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
              {this.props.intl.formatMessage({id: 'account.reset.title'})}
            </Title>
            { this.state.success ? (
              <Message success message={this.state.success} />
            ) : (
              <Message error message={this.state.errors} />
            )}
            <div className={'pure-g'}>
              <div className={'pure-u-1'}>
                <InputControl
                  readOnly={this.state.success}
                  ref={ref => (this.inputEmail = ref)}
                  label={this.props.intl.formatMessage({id: 'account.global.placeholder.email'})}
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  validation={email(this.props.intl.formatMessage({id: 'account.global.validation.email'}))}
                />
              </div>
              <div className={'pure-u-1'}>
                <InputControl
                  readOnly={this.state.success}
                  ref={ref => (this.inputPassword = ref)}
                  label={this.props.intl.formatMessage({id: 'account.global.placeholder.password'})}
                  type={'password'}
                  value={this.state.password}
                  onChange={this.onPasswordChange}
                  validation={required(this.props.intl.formatMessage({id: 'account.global.validation.password'}))}
                />
              </div>
              <div className={'pure-u-1'}>
                <InputControl
                  readOnly={this.state.success}
                  ref={ref => (this.inputPasswordConfirmation = ref)}
                  label={this.props.intl.formatMessage({id: 'account.global.placeholder.password_confirmation'})}
                  type={'password'}
                  value={this.state.passwordConfirmation}
                  onChange={this.onPasswordConfirmationChange}
                  validation={equals(this.state.password, this.props.intl.formatMessage({id: 'account.global.validation.password_confirmation'}))}
                />
              </div>
              <div className={'pure-u-1'}>
                {this.state.loading ? (
                  <Loader />
                ) : (
                  <PrimaryButton disabled={this.state.success}>
                    {this.props.intl.formatMessage({id: 'account.reset.button.submit'})}
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
    auth: state.auth.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (token, user) => dispatch(setCurrentUser(token, user))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Login)))
