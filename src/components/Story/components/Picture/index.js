import styled from 'styled-components'
import { bp } from '../../../../styled'

export default styled.div`
  position: absolute;

  ${props => (props.layout === 'left') && `
    right: 30px;
  `}
  ${props => (props.layout === 'right') && `
    left: 30px;
  `}
  
  top: 30px;
  width: calc(50% - 30px);
  height: calc(100% - 60px);
  background: url(${props => props.imageUrl}) no-repeat 50% 50% / contain;
  
  
  ${bp('ts')`
    position: static;
    transform: none;
    width: auto;
    margin: 0 30px;
    height: 50vh;
  `}
`
