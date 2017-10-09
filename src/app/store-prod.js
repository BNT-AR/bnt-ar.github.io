import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './rootReducer'

const enhancer = compose(
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
