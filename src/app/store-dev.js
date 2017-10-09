import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

export default function configureStore (initialState) {
  return createStore(
    rootReducer,
    initialState,
    enhancer,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
