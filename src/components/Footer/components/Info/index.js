import styled from 'styled-components'
import { bp } from '../../../../styled'

export default styled.div`
  float: right;
  text-align: right;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  
  ${bp('sm')`
    float: none;
    text-align: center;
  `}
  
  > div {
    margin: 20px 0;
  }
`
