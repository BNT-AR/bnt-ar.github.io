import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { authEmail } from '../../actions'
import Verifying from '../Verifying'

class Verify extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    authEmail: PropTypes.func.isRequired,
    authEmailState: PropTypes.shape({
      failed: PropTypes.bool.isRequired,
      authenticated: PropTypes.bool.isRequired
    })
  }

  static defaultProps = {
    authEmail: (hash) => null,
    authEmailState: {
      failed: false,
      authenticated: false
    }
  }

  componentWillMount () {
    if (this.props.authEmailState.failed) {
      setTimeout(() => this.props.history.replace('/'), 1000)
      return
    }

    if (this.props.auth.authenticated) {
      setTimeout(() => this.props.history.replace('/secure-checkout'), 1000)
      return
    }

    this.props.authEmail(this.props.match.params.hash)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.authEmailState.failed) {
      setTimeout(() => this.props.history.replace('/'), 1000)
      return
    }

    if (nextProps.auth.authenticated) {
      setTimeout(() => this.props.history.replace('/secure-checkout'), 1000)
    }
  }

  render () {
    return (
      <Verifying transition={this.props.authEmailState.authenticated || this.props.authEmailState.failed} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authEmailState: state.auth.email,
    auth: state.auth.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authEmail: (hash) => dispatch(authEmail(hash))
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Verify))
