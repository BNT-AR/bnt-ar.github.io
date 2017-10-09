import styled from 'styled-components'
import { bp, fontFamily } from '../../../core/styled/helpers'

export default styled.h1`
  position: relative;
  color: #000;
  font-family: ${fontFamily};
  font-size: 58px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 1em;
  border-bottom: 1px solid transparent;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: -0.5em;
    width: 30%;
    height: 1px;
    background: #000;
  }

  ${bp('ts')`
    font-size: 42px;
  `}

  ${bp('md')`
    font-size: 32px;
  `}
`
