import { SET_LANG } from '../actions'
import { defaultLang } from '../../core/services/language'

export default function lang (state = defaultLang, action) {
  switch (action.type) {
    case SET_LANG:
      return action.lang
    default:
      return state
  }
}
