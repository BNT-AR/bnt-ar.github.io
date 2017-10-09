import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = ({href, className, onClick, onKeyPress, children}) => (
  href ? (
    <a href={href} className={className} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </a>
  ) : (
    <div className={className} tabIndex={'0'} onClick={onClick} onKeyPress={onKeyPress}>
      {children}
    </div>
  )
)

Item.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

export default styled(Item)`
  display: inline-block;
  padding: 1em 2.4em;
  font-size: 15px;
  color: #fff;
  border: 1px solid ${props => props.bordered ? '#fff' : 'transparent'};
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 200ms linear, border-color 200ms linear;
  outline: 0;

  ${props => props.bordered && `
    margin: 0 0 0 1.2em;
  `}

  &:hover,
  &:focus {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.6);
  }

  a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
`
