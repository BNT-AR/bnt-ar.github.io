import styled, { keyframes } from 'styled-components'
import { Loader } from '../../../../../core'

const verifyingTransition = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export default styled.div`
  opacity: 1;

  ${props => props.transition && `
    animation: ${verifyingTransition} .5s;
    animation-delay: .5s;
    animation-fill-mode: forwards;  
  `}

  ${Loader /* sc-sel */ } {
    margin: 100px 0 0;
  }
`
