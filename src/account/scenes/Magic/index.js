import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { intlShape, injectIntl } from 'react-intl'
import styled from 'styled-components'
import { authMagic } from '../../actions'
import { Text, Loader } from '../../../core'

const Wrapper = styled.div`
  color: #fff;
  padding: 200px 30px 50px;

  ${Text /* sc-sel */ } {
    margin: 20px 0;
    text-align: center;
  }
`

class Magic extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    history: PropTypes.object.isRequired,
    authMagic: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    failed: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired
  }

  componentWillMount () {
    if (this.props.auth.authenticated) {
      this.props.history.replace('/portfolio')
    }

    const hash = this.props.match.params.hash
    this.props.authMagic(hash)
  }

  componentWillReceiveProps (nextProps) {
    if ((this.props.auth.authenticated !== nextProps.auth.authenticated) && nextProps.auth.authenticated) {
      this.props.history.replace('/portfolio')
    }

    if (nextProps.failed) {
      this.props.history.replace('/')
    }
  }

  render () {
    return (
      <Wrapper>
        <Text>
          {this.props.intl.formatMessage({id: 'account.magic.title'})}
        </Text>
        <Loader />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.lang,
    auth: state.auth.current,
    failed: state.auth.magic.failed,
    fetching: state.auth.magic.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authMagic: (hash) => dispatch(authMagic(hash))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Magic))
