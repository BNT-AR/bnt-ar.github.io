import axios from 'axios'
import { setCurrentUser, unsetCurrentUser } from './auth'

/*
 * action types
 */

export const AUTH_MAGIC_REQUEST = 'AUTH_MAGIC_REQUEST'
export const AUTH_MAGIC_SUCCESS = 'AUTH_MAGIC_SUCCESS'
export const AUTH_MAGIC_FAILURE = 'AUTH_MAGIC_FAILURE'

/*
 * action creators
 */

function authMagicRequest () {
  return {
    type: AUTH_MAGIC_REQUEST
  }
}

function authMagicSuccess () {
  return {
    type: AUTH_MAGIC_SUCCESS
  }
}

function authMagicFailure () {
  return {
    type: AUTH_MAGIC_FAILURE
  }
}

export function authMagic (hash) {
  return async dispatch => {
    dispatch(authMagicRequest())
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/magic`, {hash})
      if (response.data.token) {
        dispatch(authMagicSuccess())
        dispatch(setCurrentUser(response.data.token, response.data.user))
      } else {
        dispatch(unsetCurrentUser())
        dispatch(authMagicFailure())
      }
    } catch (e) {
      dispatch(unsetCurrentUser())
      dispatch(authMagicFailure())
    }
  }
}
