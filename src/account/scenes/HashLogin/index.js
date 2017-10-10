import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import { authHash } from '../../actions'
import { Title, Loader, FadeIn, Message } from '../../../core'
import Wrapper from '../../components/Wrapper'

class Login extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    history: PropTypes.object.isRequired,
    authHash: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  }

  componentWillMount () {
    if (this.props.auth.authenticated) {
      this.props.history.replace('/portfolio')
    }

    const hash = this.props.match.params.hash
    this.props.authHash(hash)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.auth.authenticated === nextProps.auth.authenticated) {
      return false
    }
    if (nextProps.auth.authenticated) {
      this.props.history.replace('/portfolio')
    }
  }

  render () {
    return (
      <Wrapper>
        <FadeIn>
          <Title>
            {this.props.intl.formatMessage({id: 'account.login.hash.title'})}
          </Title>
          {this.props.failed && (
            <Message error message={this.props.intl.formatMessage({id: 'account.login.hash.failed'})} />
          )}
          <div className={'pure-g'}>
            <div className={'pure-u-1'}>
              {this.props.fetching ? (
                <Loader />
              ) : null }
            </div>
          </div>
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
    authHash: (hash) => dispatch(authHash(hash))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Login))
