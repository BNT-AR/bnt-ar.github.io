import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import { Grid, GridResponsive } from './components/PureCSS'
import Home from './scenes/Home'

/* eslint-disable */
injectGlobal` 
  ${normalize()}
  ${Grid}
  ${GridResponsive}
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
