import React from 'react'
import styled from 'styled-components'
import Picture from './components/Picture'
import Description from './components/Description'
import LinkedInLogo from '../../assets/linkedin.svg'

const Member = (props) => (
  <a className={props.className} href={props.linkedIn} target='blank'>
    <Picture image={props.image} />
    <Description>
      <span>{ props.name }</span>
      <strong>{ props.title }</strong>
      <em>{ props.description }</em>
    </Description>
  </a>
)

export default styled(Member)`
  position: relative;
  display: block;
  color: #000;
  text-decoration: none;
  
  &:before {
    content: ' ';
    position: absolute;
    z-index: 3;
    bottom: 5px;
    left: 5px;
    width: 16px;
    height: 16px;
    background: #fff url(${LinkedInLogo}) no-repeat 50% 50% / cover;
    border-radius: 2px;
    opacity: 0.5;
    transform: scale(0);
    transition: transform 300ms ease;
  }
  
  &:hover,
  &:focus {
    &:before {
      transform: scale(1);
    }
  }
`
