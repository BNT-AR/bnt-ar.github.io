import { combineReducers } from 'redux'
import { lang } from './reducers'
import { auth, authMagic } from '../account/reducers'

const rootReducer = combineReducers({
  app: combineReducers({
    lang
  }),
  auth: combineReducers({
    current: auth,
    magic: authMagic
  })
})

export default rootReducer
