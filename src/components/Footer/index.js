import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'
import Info from './components/Info'

const Footer = (props) => (
  <div className={props.className}>
    <div>
      <Logo />

      <Info>
        <div>info@bravenew.tech</div>
        <div>+1 (646) 480 0357</div>
        <div>Niceto Vega 4736, Buenos Aires</div>
      </Info>
    </div>
  </div>
)

export default styled(Footer)`
  position: relative;
  padding: 100px 30px;
  background: #26a6d6;
  
  > div {
    max-width: 1000px;
    margin: 0 auto;
  }

  ${Logo} {
    // position: absolute;
    // z-index: 1;
    // left: 40px;
    // top: 40px;
  }
  
  ${Nav} {
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 40px;
  }
`
