import React from 'react'
import styled from 'styled-components'

const Icon = (props) => (
  <div className={props.className}>
    <img src={props.image} alt='' />
    { props.title && <span>{ props.title }</span> }
  </div>
)

export default styled(Icon)`
  
  height: 35px;
  margin: 30px 0;
  
  img {
    display: inline-block;
    vertical-align: middle;
    height: 35px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    color: #666;
    line-height: 35px;
    margin: 0 0 0 10px;
  }
`
