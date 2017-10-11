import {
  AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT,
  FETCH_ME_REQUEST, FETCH_ME_SUCCESS, FETCH_ME_FAILURE
} from './../actions/auth'

export default function auth (state = {
  attempted: false,
  fetching: false,
  authenticated: false,
  failed: false,
  user: null
}, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        attempted: false,
        fetching: true,
        authenticated: false,
        failed: false,
        user: null
      }
    case AUTH_SUCCESS:
      return {
        attempted: true,
        fetching: false,
        authenticated: true,
        failed: false,
        user: action.user
      }
    case AUTH_FAILURE:
      return {
        attempted: true,
        fetching: false,
        authenticated: false,
        failed: true,
        user: null
      }
    case AUTH_LOGOUT:
      return {
        attempted: true,
        fetching: false,
        authenticated: false,
        failed: false,
        user: null
      }
    case FETCH_ME_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FETCH_ME_SUCCESS:
      return {
        ...state,
        fetching: false,
        user: action.user
      }
    case FETCH_ME_FAILURE:
      return {
        ...state,
        fetching: false
      }
    default:
      return state
  }
}
