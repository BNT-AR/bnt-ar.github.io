import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { getLangList } from '../../../core/services/language'

import account from '../../../account/intl.json'
import app from '../../intl.json'
import core from '../../../core/intl.json'

const langList = getLangList()
const messagesKeys = {}

for (const lang of langList) {
  messagesKeys[lang.id] = {
    ...account[lang.id],
    ...app[lang.id],
    ...core[lang.id]
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.app.lang,
    messages: messagesKeys[state.app.lang]
  }
}

const IntlProviderContainer = connect(
  mapStateToProps
)(IntlProvider)

export default IntlProviderContainer
