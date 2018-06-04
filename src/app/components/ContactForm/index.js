import React, { Component } from 'react'

import { Wrapper, Title } from './components/Styled'
import Form from './components/Form'
import H2 from '../H2'
import P from '../P'

export default class ContactForm extends Component {
  render () {
    return (
      <Wrapper>
        <div className='pure-g'>
          <div className='pure-u-1'>
            <Title>
              <H2>Learn More</H2>
              <P>
                Leave us your information and we will contact you
              </P>
            </Title>
          </div>
          <div className='pure-u-1'>
            <Form />
          </div>
        </div>
      </Wrapper>
    )
  }
}
