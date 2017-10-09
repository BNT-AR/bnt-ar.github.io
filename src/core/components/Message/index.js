import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactMarkDown from 'react-markdown'
import Wrapper from './components/Wrapper'

function RouterLink ({children, href}) {
  return (
    href.match(/^(https?:)?\/\//)
      ? <a href={href}>{children}</a>
      : <Link to={href}>{children}</Link>
  )
}

RouterLink.propTypes = {
  href: PropTypes.object,
  children: PropTypes.string
}

function Message ({message, className}) {
  const msg = !message ? [] : (typeof message === 'string') ? [message] : message
  if (!msg.length) {
    return null
  }

  return (
    <div className={className}>
      <ul>
        { msg.map((err, k) => (
          <li key={k}><ReactMarkDown source={err || ''} renderers={{Link: RouterLink}} /></li>)
        )}
      </ul>
    </div>
  )
}

Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

export default Wrapper.withComponent(Message)
