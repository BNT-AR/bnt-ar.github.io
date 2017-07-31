import React from 'react'
import styled from 'styled-components'
import { bp } from '../../../../styled'

const Logo = (props) => (
  <div className={props.className}>
    <div />
    <span>{ props.title }</span>
  </div>
)

export default styled(Logo)`

  margin: 30px 0;

  > div {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: url(${props => props.image}) no-repeat 50% 50% / contain;
    
    ${bp('ts')`
      width: 70px;
      height: 70px;
    `}
  }
  
  span {
    display: block;
    color: #999;
    font-size: 14px;
    text-align: center;
    margin: 10px 0 0;
  }
`
