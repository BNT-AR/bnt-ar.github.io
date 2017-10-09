import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.ul`
  display: inline-block;
  margin: 0;
  padding: 0;

  ${bp('ts', 'min-width', +1)`
    max-width: 280px;
  `}

  li {
    padding: 5px 10px 5px 5px;
    list-style-type: none;
    margin-bottom: 20px;
    background: #f1f1f1;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    ${bp('ts')`
      margin-left: 0;
      margin-right: 10px;
    `}
  }

  li:last-child {
    margin-bottom: 0;
  }

  img {
    height: 20px;
    display: inline-block;
    vertical-align: middle;
  }

  p {
    font-size: 14px;
    display: inline-block;
    margin: 0;
    opacity: 0.6;
    margin-left: 10px;
    vertical-align: middle;
    text-align: justify;
  }
`
