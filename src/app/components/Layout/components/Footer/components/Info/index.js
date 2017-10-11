import styled from 'styled-components'
import { bp } from '../../../../../../../core/styled/helpers'

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

  a {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: border-color 200ms ease;

    &:hover,
    &:focus {
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }
  }
`
