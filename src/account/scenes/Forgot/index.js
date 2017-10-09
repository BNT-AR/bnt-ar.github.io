import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import axios from 'axios'
import { Title, Form, InputControl, PrimaryButton, Loader, FadeIn, Message } from '../../../core'
import { email } from '../../../core/services/validations'
import Wrapper from '../../components/Wrapper'

class ForgotPassword extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      success: null,
      loading: false,
      email: ''
    }
  }

  onEmailChange = (e) => {
    this.setState({
      email: e.value
    })
  }

  // Form refs

  getFormRefs () {
    return [this.inputEmail]
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
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation
      }
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/forgot`, data)
      this.setState({
        loading: false,
        success: this.props.intl.formatMessage({id: 'account.forgot.success'})
      })
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
              {this.props.intl.formatMessage({id: 'account.forgot.title'})}
            </Title>
            <Message success message={this.state.success} />
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
                {this.state.loading ? (
                  <Loader />
                ) : (
                  <PrimaryButton disabled={this.state.success}>
                    {this.props.intl.formatMessage({id: 'account.forgot.button.submit'})}
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(ForgotPassword))
