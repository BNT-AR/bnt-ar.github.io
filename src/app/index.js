import React from 'react'
import { Provider } from 'react-redux'
import { addLocaleData } from 'react-intl'
import localeDataEn from 'react-intl/locale-data/en'
import localeDataEs from 'react-intl/locale-data/es'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import axios from 'axios'
import IntlProvider from './components/IntlProvider'
import Layout from './components/Layout'
import configureStore from './store'
import Raven from 'raven-js'

const store = configureStore()
const history = createBrowserHistory()
addLocaleData([...localeDataEn, ...localeDataEs])
axios.defaults.validateStatus = (status) => (status >= 200 && status <= 400)
Raven.config(process.env.REACT_APP_SENTRY_URL).install()

const App = () => (
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        <Layout />
      </Router>
    </IntlProvider>
  </Provider>
)

export default App
