import {
  AUTH_EMAIL_REQUEST, AUTH_EMAIL_SUCCESS, AUTH_EMAIL_FAILURE
} from './../actions'

export default function authEmail (state = {
  fetching: false,
  authenticated: false,
  failed: false
}, action) {
  switch (action.type) {
    case AUTH_EMAIL_REQUEST:
      return {
        fetching: true,
        authenticated: false,
        failed: false
      }
    case AUTH_EMAIL_SUCCESS:
      return {
        fetching: false,
        authenticated: true,
        failed: false
      }
    case AUTH_EMAIL_FAILURE:
      return {
        fetching: false,
        authenticated: false,
        failed: true
      }
    default:
      return state
  }
}
