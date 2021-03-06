import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  position: relative;

  ${Logo /* sc-sel */ } {
    position: absolute;
    z-index: 1;
    left: 40px;
    top: 40px;

    ${bp('sm')`
      left: 50%;
      transform: translateX(-50%);
    `}
  }

  ${Nav /* sc-sel */ } {
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 40px;

    ${bp('md')`
      > div {
        &:nth-child(1),
        &:nth-child(2) {
          display: none;
        }
      }
    `}

    ${bp('sm')`
      display: none;
    `}
  }
`
