import moment from 'moment-timezone'

/**
 *
 * @param message
 * @returns {function(*=)}
 */
export function required (message) {
  return (value) => {
    if (typeof value === 'boolean') {
      return value || (message || ' ')
    }
    if (value && value.toString().trim().length > 0) {
      return true
    }
    return message || ' '
  }
}

/**
 *
 * @param message
 * @returns {function(*=)}
 */
export function email (message) {
  return (value) => {
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    if (validEmail) {
      return true
    }
    return message || ' '
  }
}

/**
 *
 * @param message
 * @returns {function(*=)}
 */
export function date (message) {
  return (value) => {
    const values = value.split('-')
    if (values[0].length !== 4 || values[1].length !== 2 || values[2].length !== 2) {
      return message || ' '
    }

    const date = moment(value)
    if (date.isValid()) {
      return true
    }
    return message || ' '
  }
}

/**
 *
 * @param message
 * @returns {function(*=)}
 */
export function ageMajority (invalidDateMessage, notMajorityMessage) {
  return (value) => {
    const values = value.split('-')
    if (values[0].length !== 4 || values[1].length !== 2 || values[2].length !== 2) {
      return invalidDateMessage || ' '
    }

    const now = moment()
    const date = moment(value)

    if (!date.isValid()) {
      return invalidDateMessage || ' '
    }

    if (now.diff(date, 'years') <= 17) {
      return notMajorityMessage || ' '
    }

    return true
  }
}

/**
 *
 * @param to
 * @param message
 * @returns {function(*=)}
 */
export function notEquals (to, message) {
  return (value) => {
    // input value is required
    if (!value) {
      return message || ' '
    }
    // not equals validation
    if (value.trim().toLowerCase() !== to.trim().toLowerCase()) {
      return true
    }
    return message || ' '
  }
}

/**
 *
 * @param to
 * @param message
 * @returns {function(*=)}
 */
export function equals (to, message) {
  return (value) => {
    // input value is required
    if (!value) {
      return message || ' '
    }
    // not equals validation
    if (value.trim().toLowerCase() === to.trim().toLowerCase()) {
      return true
    }
    return message || ' '
  }
}
