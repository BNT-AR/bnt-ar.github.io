import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../Logo'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import Nav from '../Nav'
import Info from './components/Info'
import Social from './components/Social'
import { clearFix } from 'polished'
import { bp } from '../../../../../core/styled/helpers'

const Footer = (props) => (
  <div className={props.className}>
    <div className='pure-g'>
      <div className='pure-u-1-3 pure-u-ts-1-3 pure-u-md-2-5'>
        <Logo />
      </div>
      <div className='pure-u-1-3 pure-u-ts-1-3 pure-u-md-1-5'>
        <Social>
          <a rel='noopener noreferrer' href='https://github.com/BNT-AR' target='_blank'>
            <img src={github} alt='' />
          </a>
          <a rel='noopener noreferrer' href='https://www.linkedin.com/company/brave-new-technology/' target='_blank'>
            <img src={linkedin} alt='' />
          </a>
        </Social>
      </div>
      <div className='pure-u-1-3 pure-u-ts-1-3 pure-u-md-2-5'>
        <Info>
          <div><a href='mailto:info@bravenew.tech'>info@bravenew.tech</a></div>
          <div><a href='tel:+16464800357'>+1 (646) 480 0357</a></div>
          <div>Niceto Vega 4736, Buenos Aires</div>
        </Info>
      </div>
    </div>
  </div>
)

Footer.propTypes = {
  className: PropTypes.string
}

export default styled(Footer)`
  position: relative;
  padding: 15px 10px;
  background: #26a6d6;

  ${bp('sm')`
    height: 160px;
    text-align: center;
  `}

  > div {
    max-width: 950px;
    margin: 0 auto;
    ${clearFix()}
  }

  ${Logo /* sc-sel */ } {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
  }

  ${Nav /* sc-sel */ } {
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 40px;

    ${bp('sm')`
      position: static;
    `}
  }

  @media screen and (max-width: 768px) {
    .hidden-form {
      display: none;
    }
  }
`
