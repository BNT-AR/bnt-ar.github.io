import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './components/Wrapper'

const InfoTooltip = ({className, tabIndex, children}) => (
  <div className={className}>
    <span tabIndex={tabIndex}>?</span>
    <div>
      {children}
    </div>
  </div>
)

InfoTooltip.defaultProps = {
  tabIndex: '0'
}

InfoTooltip.propTypes = {
  className: PropTypes.string,
  tabIndex: PropTypes.string,
  children: PropTypes.element
}

export default Wrapper.withComponent(InfoTooltip)
