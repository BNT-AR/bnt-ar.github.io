import styled from 'styled-components'
import InputMessage from '../../../InputMessage'

export default styled.div`
  padding: 10px 0;

  > div {
    position: relative;
    z-index: 1;
  }

  label {
    em {
      color: ${props => props.success ? '#95bf99' : '#8b0000'};
      margin: 0 0 0 1px;
      font-style: normal;
    }
  }

  ${InputMessage /* sc-sel */ } {
    position: absolute;
    left: 32px;
    top: 100%;
    width: auto;
    padding: 1px 0 0;
  }
`
