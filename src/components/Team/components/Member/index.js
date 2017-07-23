import React from 'react'
import styled from 'styled-components'
import LinkedInLogo from '../../assets/linkedin.svg'

const Logo = (props) => (
  <a className={props.className} href={props.linkedIn} target='blank'>
    <div />
    <span>{ props.name }</span>
    <strong>{ props.title }</strong>
    <em>{ props.description }</em>
  </a>
)

export default styled(Logo)`
  display: inline-block;
  color: #000;
  text-decoration: none;
  
  > div {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: url(${props => props.image}) no-repeat 50% 50% / contain;
    border-radius: 100%;
    
    &:before {
      position: absolute;
      right: 10px;
      bottom: 10px;
      content: ' ';
      width: 16px;
      height: 16px;
      background: #fff url(${LinkedInLogo}) no-repeat 50% 50% / contain;
      border-radius: 2px;
    }
  }
  
  span {
    display: block;
    color: #000;
    font-size: 14px;
    margin: 10px 0 0;
  }
  
  strong {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin: 5px 0 0;
  }
  
  em {
    display: block;
    color: #999;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    margin: 5px 0 0;
  }
`
