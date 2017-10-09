import styled from 'styled-components'
import { bp, fontFamily } from '../../styled'

export default styled.h1`
  color: #555;
  font-family: ${fontFamily};
  font-size: 32px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 1em;
  border-bottom: 1px solid transparent;

  ${bp('ts')`
    font-size: 28px;
  `}

  ${bp('md')`
    font-size: 24px;
  `}
`
