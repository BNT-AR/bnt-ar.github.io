import axios from 'axios'
import moment from 'moment-timezone'
import decode from 'jwt-decode'
import store from 'store'

/*
 * action types
 */

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAILURE = 'AUTH_FAILURE'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_EMAIL_REQUEST = 'AUTH_EMAIL_REQUEST'
export const AUTH_EMAIL_SUCCESS = 'AUTH_EMAIL_SUCCESS'
export const AUTH_EMAIL_FAILURE = 'AUTH_EMAIL_FAILURE'
export const FETCH_ME_REQUEST = 'FETCH_ME_REQUEST'
export const FETCH_ME_SUCCESS = 'FETCH_ME_SUCCESS'
export const FETCH_ME_FAILURE = 'FETCH_ME_FAILURE'
export const UPDATE_AUTH_USER_DATA = 'UPDATE_AUTH_USER_DATA'

/*
 * action creators
 */

function authRequest () {
  return {
    type: AUTH_REQUEST
  }
}

function authSuccess (user) {
  return {
    type: AUTH_SUCCESS,
    user
  }
}

function authFailure () {
  return {
    type: AUTH_FAILURE
  }
}

function authLogout () {
  return {
    type: AUTH_LOGOUT
  }
}

function fetchMeRequest () {
  return {
    type: FETCH_ME_REQUEST
  }
}

function fetchMeSuccess (user) {
  return {
    type: FETCH_ME_SUCCESS,
    user
  }
}

function fetchMeFailure () {
  return {
    type: FETCH_ME_FAILURE
  }
}

function authEmailRequest () {
  return {
    type: AUTH_EMAIL_REQUEST
  }
}

function authEmailSuccess () {
  return {
    type: AUTH_EMAIL_SUCCESS
  }
}

function authEmailFailure () {
  return {
    type: AUTH_EMAIL_FAILURE
  }
}

function scheduleRefresh () {
  return dispatch => {
    const token = store.get('token')
    const decodedToken = decode(token)
    const exp = decodedToken['exp']
    const now = moment().unix()
    const delta = exp - now
    const timeout = ((delta - 45) <= 0) ? 0 : (delta - 45) // will refresh 45 seconds before expiration

    if (timeout < 45) {
      console.warn(`Session is too short`)
    }
    console.info(`Refreshing token in ${timeout} seconds.`)

    setTimeout(() => {
      console.info('Refreshing token...')
      axios.get(`${process.env.REACT_APP_API_URL}/auth/refresh`).then(res => {
        if (res.data.token) {
          console.info('Refreshing success!')
          dispatch(setCurrentUser(res.data.token))
        } else {
          console.info(`Refreshing failure.`)
          dispatch(unsetCurrentUser())
        }
      }).catch(() => {
        console.info(`Refreshing failure.`)
        dispatch(unsetCurrentUser())
      })
    }, timeout * 1000)
  }
}

export function me () {
  return dispatch => {
    dispatch(fetchMeRequest())
    axios.get(`${process.env.REACT_APP_API_URL}/me`).then(res => {
      if (res.data.id) {
        dispatch(fetchMeSuccess(res.data))
      } else {
        dispatch(fetchMeFailure())
      }
    }).catch(() => {
      dispatch(fetchMeFailure())
    })
  }
}

export function setCurrentUser (token, user) {
  return dispatch => {
    store.set('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    dispatch(scheduleRefresh())
    if (user) {
      dispatch(authSuccess(user))
    }
  }
}

export function unsetCurrentUser () {
  return dispatch => {
    store.remove('token')
    delete axios.defaults.headers.common['Authorization']
    dispatch(authLogout())
  }
}

export function auth () {
  return async dispatch => {
    const token = store.get('token')
    if (!token) {
      dispatch(unsetCurrentUser())
      dispatch(authFailure())
      return false
    }
    dispatch(authRequest())
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {headers: {'Authorization': `Bearer ${token}`}})
      if (response.data.user) {
        dispatch(setCurrentUser(token, response.data.user))
      } else {
        dispatch(unsetCurrentUser())
        dispatch(authFailure())
      }
    } catch (e) {
      dispatch(unsetCurrentUser())
      dispatch(authFailure())
    }
  }
}

export function authEmail (email, password) {
  return async dispatch => {
    dispatch(authEmailRequest())
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
      if (response.data.token) {
        dispatch(authEmailSuccess())
        dispatch(setCurrentUser(response.data.token, response.data.user))
      } else {
        dispatch(unsetCurrentUser())
        dispatch(authEmailFailure())
      }
    } catch (e) {
      dispatch(unsetCurrentUser())
      dispatch(authEmailFailure())
    }
  }
}
