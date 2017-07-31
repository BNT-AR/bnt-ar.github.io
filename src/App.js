import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { Grid, GridResponsive } from './components/PureCSS'
import { fontFamily } from './styled'
import Home from './scenes/Home'

/* eslint-disable */
injectGlobal` 
  ${normalize()}
  ${Grid}
  ${GridResponsive}

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
        <Home />
      </div>
    )
  }
}

export default App
