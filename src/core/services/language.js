/*
 * Language Service
 */

import flagEn from '../assets/flag-en.svg'
import flagEs from '../assets/flag-es.svg'
import store from 'store'

export const defaultLang = process.env.REACT_APP_LANG_DEFAULT || 'en'
const appLangs = process.env.REACT_APP_LANGS ? process.env.REACT_APP_LANGS.split(',') : [defaultLang]

const LangConf = [
  {id: 'en', image: flagEn, title: 'English'},
  {id: 'es', image: flagEs, title: 'Español'}
]

const Languages = LangConf.filter(k => (appLangs.indexOf(k.id) !== -1))

export function findLang (langId) {
  return Languages.find(k => k.id === langId)
}

export function getLangList () {
  return Languages
}

export function getCurrentLangId () {
  const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
  const langFromUrl = window.location.pathname.split('/')
  const lang = findLang(langFromUrl[1] || store.get('lang') || languageWithoutRegionCode)
  return lang ? lang.id : defaultLang
}
