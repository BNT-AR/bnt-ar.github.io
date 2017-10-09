import styled from 'styled-components'
import Title from '../Title'
import Text from '../Text'
import Message from '../Message'
import PrimaryButton from '../PrimaryButton'

export default styled.form`
  ${Title /* sc-sel */ } {
    padding: 0 10px;
  }

  ${Text /* sc-sel */ } {
    padding: 0 10px;
  }

  ${Message /* sc-sel */ } {
    margin: 0 10px;
  }

  .pure-g {
    > div {
      padding: 10px;
      box-sizing: border-box;

      &.pure-u-container {
        padding: 0;
      }
    }

    .pure-u-1 {
      ${PrimaryButton /* sc-sel */ } {
        display: block;
        width: 100%;
      }
    }
  }
`
