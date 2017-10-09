import styled from 'styled-components'
import {bp} from '../../../../styled/helpers'
import PrimaryButton from '../../../PrimaryButton'
import SecondaryButton from '../../../SecondaryButton'

export default styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  ${bp('md')`
    padding: 5px;
  `}

  ${PrimaryButton /* sc-sel */ } {
    width: 100%;
  }

  ${SecondaryButton /* sc-sel */ } {
    width: 100%;
  }

  .pure-g {
    > div {
      box-sizing: border-box;
      padding: 10px;
      ${bp('ts')`
        padding: 5px;
      `}
    }
  }
`
