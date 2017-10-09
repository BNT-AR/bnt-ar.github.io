import { combineReducers } from 'redux'
import { lang } from './reducers'
import { authCurrent, authEmail } from '../account/reducers'

const rootReducer = combineReducers({
  app: combineReducers({
    lang
  }),
  auth: combineReducers({
    current: authCurrent,
    email: authEmail
  })
})

export default rootReducer
