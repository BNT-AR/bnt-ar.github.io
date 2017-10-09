import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { Grid, GridResponsive, Form } from './components/PureCSS'
import { fontFamily } from './styled'
//  SCENES
import Home from './scenes/Home'
import Portfolio from './scenes/Portfolio/'

const history = createBrowserHistory()

/* eslint-disable */
injectGlobal` 
  ${normalize()}
  ${Grid}
  ${GridResponsive}
  ${Form}

  html, .pure-g [class *= "pure-u"] {
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    color: #fff;
    background: #26a6d6;
  }
`
/* eslint-enable */

class App extends Component {
  componentWillMount () {
  }

  render () {
    return (
      <div>
        <Router history={history}>
          <div className='App'>
            <div>
              <Route exact path={'/'} component={Home} />
              <Route path={'/portfolio'} component={Portfolio} />
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
