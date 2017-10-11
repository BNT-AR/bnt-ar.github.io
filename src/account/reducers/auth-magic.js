import {
  AUTH_MAGIC_REQUEST, AUTH_MAGIC_SUCCESS, AUTH_MAGIC_FAILURE
} from './../actions/auth-magic'

export default function authMagic (state = {
  fetching: false,
  authenticated: false,
  failed: false
}, action) {
  switch (action.type) {
    case AUTH_MAGIC_REQUEST:
      return {
        fetching: true,
        authenticated: false,
        failed: false
      }
    case AUTH_MAGIC_SUCCESS:
      return {
        fetching: false,
        authenticated: true,
        failed: false
      }
    case AUTH_MAGIC_FAILURE:
      return {
        fetching: false,
        authenticated: false,
        failed: true
      }
    default:
      return state
  }
}
