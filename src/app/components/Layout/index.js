import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { intlShape, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import axios from 'axios'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { global } from '../../../core/styled/helpers'
import { classic } from '../../../core/styled/themes'

import Header from './components/Header'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

import Home from '../../scenes/Home'
import Portfolio from '../../scenes/Portfolio'

// Account
import { auth, unsetCurrentUser } from '../../../account/actions'
import {
  AccountCreateScene, AccountLoginScene,
  AccountForgotScene, AccountResetScene,
  AccountHashLoginScene
} from '../../../account'

injectGlobal`${global(classic)}` // eslint-disable-line

class Layout extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    authenticate: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  logPageView (locationPathname) {
    ReactGA.set({ page: locationPathname })
    ReactGA.pageview(locationPathname)
  }

  initializeReactGA () {
    if (process.env.NODE_ENV !== 'test') {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID)
    }
    this.logPageView(this.props.location.pathname)
    this.props.history.listen(location => this.logPageView(location.pathname))
  }

  componentWillMount () {
    this.props.authenticate()
    axios.interceptors.response.use(res => {
      if (res.data.action && res.data.action === 'logout') {
        console.info('Intercepted => Logging Out')
        this.props.logout()
      }
      return res
    }, err => err)
  }

  componentDidMount () {
    this.initializeReactGA()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.auth.authenticated === nextProps.auth.authenticated) {
      return false
    }

    if (!nextProps.auth.authenticated) {
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <ThemeProvider theme={classic}>
        <div>
          <Helmet>
            <title>{this.props.intl.formatMessage({id: 'app.title'})}</title>
          </Helmet>
          <Header>
            <Logo />
            <Nav />
          </Header>

          <Switch>
            <Route exact path={`/`} component={Home} />
            <Route exact path={`/portfolio`} component={Portfolio} />
            <Route exact path={`/account/login`} component={AccountLoginScene} />
            <Route exact path={`/account/login/magic/:hash`} component={AccountHashLoginScene} />
            <Route exact path={`/account/create`} component={AccountCreateScene} />
            <Route exact path={`/account/forgot`} component={AccountForgotScene} />
            <Route exact path={`/account/reset/:token`} component={AccountResetScene} />
            <Route component={Home} />
          </Switch>

          <Footer />
          <SplashScreen visible={!this.props.auth.attempted} />
        </div>
      </ThemeProvider>
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
    authenticate: () => dispatch(auth()),
    logout: () => dispatch(unsetCurrentUser())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Layout)))
