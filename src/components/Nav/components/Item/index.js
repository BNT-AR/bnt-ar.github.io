import React from 'react'
import styled from 'styled-components'

const Item = (props) => (
  props.href ? (
    <a href={props.href} className={props.className} onClick={props.onClick} onKeyPress={props.onKeyPress}>
      {props.children}
    </a>
  ) : (
    <div className={props.className} tabIndex={'0'} onClick={props.onClick} onKeyPress={props.onKeyPress}>
      {props.children}
    </div>
  )
)

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
  ${props => props.bordered && `
    margin: 0 0 0 1.2em;
  `}
  
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.6);
  }
`
