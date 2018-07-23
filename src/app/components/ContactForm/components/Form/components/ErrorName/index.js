import styled from 'styled-components'
import { bp } from '../../../../../../../core/styled/helpers'

export default styled.div`
  top: -20px;

  ${bp('md')`
    top: -8px;
  `}
  right: 10px;
  color: #fff;
  position: absolute;
  display: ${props => props.visible ? 'block' : 'none'};
`
