import {bp} from '../../styled/helpers'
import styled from 'styled-components'

export default styled.div`
  color: ${props => props.theme.primaryColor};
  font-size: 36px;
  line-height: 1.1;
  margin: 0 0 25px;
  padding: 0;
  ${bp('sm')`
    font-size: 30px;
  `}

  a {
    display: inline-block;
    color: #666;
    font-weight: 400;
    font-size: 14px;
    text-decoration: none;
    margin: 0 0 0 14px;
  }
`
