import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import {fadeIn} from '../../styled/helpers'

const Loader = ({className}) => (
  <div className={className} />
)

Loader.propTypes = {
  className: PropTypes.string.isRequired
}

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export default styled(Loader).attrs({
  size: props => props.size || 56
})`
  position: relative;
  min-width: ${props => props.size}px;
  height: ${props => props.size}px;

  ${fadeIn()}

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    margin-top: ${props => parseInt(props.size / 2, 10) * (-1)}px;
    margin-left: ${props => parseInt(props.size / 2, 10) * (-1)}px;
    border-radius: 50%;
    border: 1px solid #ccc;
    border-top-color: #174864;
    animation: ${spinner} 0.5s linear infinite;
  }
`
