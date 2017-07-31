import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'
import Info from './components/Info'
import { clearFix } from 'polished'
import { bp } from '../../styled'

const Footer = (props) => (
  <div className={props.className}>
    <div>
      <Logo />

      <Info>
        <div><a href='mailto:info@bravenew.tech'>info@bravenew.tech</a></div>
        <div><a href='tel:+16464800357'>+1 (646) 480 0357</a></div>
        <div>Niceto Vega 4736, Buenos Aires</div>
      </Info>
    </div>
  </div>
)

export default styled(Footer)`
  position: relative;
  padding: 50px 30px;
  background: #26a6d6;
  
  ${bp('sm')`
    text-align: center;
  `}

  > div {
    max-width: 1000px;
    margin: 0 auto;
    ${clearFix()}
  }

  ${Logo} {
    margin: 20px 0;
  }

  ${Nav} {
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 40px;
    
    ${bp('sm')`
      position: static;
    `}
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
