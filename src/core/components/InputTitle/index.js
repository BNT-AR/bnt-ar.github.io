import styled from 'styled-components'
import InfoTooltip from '../InfoTooltip'

export default styled.div`
  font-size: 16px;
  margin: 10px 0 0;

  ${InfoTooltip /* sc-sel */ } {
    top: -2px;
    right: -2px;
  }
`
