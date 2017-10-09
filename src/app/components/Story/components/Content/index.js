import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  position: absolute;

  ${props => (props.layout === 'left') && `
    left: 0;
  `}
  ${props => (props.layout === 'right') && `
    right: 0;
  `}

  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  ${props => (props.layout === 'right') && `
    text-align: left;
  `}
  ${props => (props.layout === 'left') && `
    text-align: right;
  `}

  ${bp('ts')`
    position: static;
    transform: none;
    width: auto;
    margin: 30px 0 0;
    text-align: center;
  `}

  > div {
    max-width: 500px;
    padding: 0 30px;
    display: inline-block;
    text-align: left;
  }
`
