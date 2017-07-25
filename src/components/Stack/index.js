import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Content from './components/Content'
import Logo from './components/Logo'

import LaravelLogo from './assets/laravel.svg'
import ReactLogo from './assets/react.svg'
import AngularLogo from './assets/angular.svg'
import Vuejs from './assets/vuejs.svg'
import JsLogo from './assets/javascript.svg'
import NginxLogo from './assets/nginx.svg'
import PhpLogo from './assets/php.svg'
import NodeJsLogo from './assets/nodejs.svg'
import Css3Logo from './assets/css3.svg'
import AwsLogo from './assets/aws.svg'
import MysqlLogo from './assets/mysql.svg'
import MongoDbLogo from './assets/mongodb.svg'

class Stack extends Component {
  render () {
    return (
      <Wrapper>
        <Content>
          <div>
            <h1>We love and master some awesome tools</h1>
            <p>
              All of them give us power to do anything. We keep choosing Open Source every day.
            </p>

            <ul>
              <li><Logo image={LaravelLogo} title={'Laravel'} /></li>
              <li><Logo image={ReactLogo} title={'React & Native'} /></li>
              <li><Logo image={AngularLogo} title={'Angular'} /></li>
              <li><Logo image={Vuejs} title={'Vue.js'} /></li>
              <li><Logo image={AwsLogo} title={'AWS'} /></li>
              <li><Logo image={NginxLogo} title={'Nginx'} /></li>
              <li><Logo image={PhpLogo} title={'PHP'} /></li>
              <li><Logo image={JsLogo} title={'JavaScript'} /></li>
              <li><Logo image={NodeJsLogo} title={'Node.js'} /></li>
              <li><Logo image={Css3Logo} title={'CSS3'} /></li>
              <li><Logo image={MysqlLogo} title={'MySQL'} /></li>
              <li><Logo image={MongoDbLogo} title={'MongoDB'} /></li>
            </ul>
          </div>
        </Content>
      </Wrapper>
    )
  }
}

export default Stack
