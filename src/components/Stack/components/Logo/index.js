import React from 'react'
import styled from 'styled-components'

const Logo = (props) => (
  <div className={props.className}>
    <div />
    <span>{ props.title }</span>
  </div>
)

export default styled(Logo)`
  display: inline-block;
  
  > div {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: url(${props => props.image}) no-repeat 50% 50% / contain;
  }
  
  span {
    display: block;
    color: #999;
    font-size: 14px;
    margin: 10px 0 0;
  }
`
