import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
// import registerServiceWorker from './registerServiceWorker'

function run () {
  ReactDOM.render(
    <App />, document.getElementById('root')
  )
  // registerServiceWorker()
}

if (!window.intl) { // Intl polyfill
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/es.js'
  ], (require) => {
    require('intl')
    require('intl/locale-data/jsonp/en.js')
    require('intl/locale-data/jsonp/es.js')
    run()
  })
} else {
  run()
}
