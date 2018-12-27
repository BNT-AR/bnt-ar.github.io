import React, { Component } from 'react'
import H1 from '../H1'
import P from '../P'
import Wrapper from './components/Wrapper'
import Logo from './components/Logo'

import LaravelLogo from './assets/laravel.svg'
import ReactLogo from './assets/react.svg'
import JsLogo from './assets/javascript.svg'
import PhpLogo from './assets/php.svg'
import NodeJsLogo from './assets/nodejs.svg'
import Css3Logo from './assets/css3.svg'
import AwsLogo from './assets/aws.svg'
import MysqlLogo from './assets/mysql.svg'

class Stack extends Component {
  render () {
    return (
      <Wrapper>
        <H1>We love and master some awesome tools</H1>
        <P>
          All of them give us power to do anything. We keep choosing Open Source every day.
        </P>

        <div className='pure-g'>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={LaravelLogo} title={'Laravel'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={ReactLogo} title={'React & Native'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={AwsLogo} title={'AWS'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={PhpLogo} title={'PHP'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={JsLogo} title={'JavaScript'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={NodeJsLogo} title={'Node.js'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={Css3Logo} title={'CSS3'} />
          </div>
          <div className='pure-u-1-4 pure-u-md-1-2'>
            <Logo image={MysqlLogo} title={'MySQL'} />
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Stack
