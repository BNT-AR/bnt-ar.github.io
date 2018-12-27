import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router-dom'
import { intlShape, injectIntl } from 'react-intl'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import { injectGlobal, ThemeProvider } from 'styled-components'
import { global } from '../../../core/styled/helpers'
import { classic } from '../../../core/styled/themes'

import Header from './components/Header'
import Logo from './components/Logo'
import Nav from './components/Nav'
import Footer from './components/Footer'

import Home from '../../scenes/Home'
// import Jobs1 from '../../scenes/Jobs/Jobs1'

injectGlobal`${global(classic)}` // eslint-disable-line

class Layout extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
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

  componentDidMount () {
    this.initializeReactGA()
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
            {/* <Route exact path={`/jobs/fullstack-engineer-1`} component={Jobs1} /> */}
            <Route component={Home} />
          </Switch>

          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.lang
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(Layout)))
