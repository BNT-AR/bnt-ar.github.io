import React, { Component } from 'react'

import { Wrapper, Title, Button } from './components/Styled'

export default class Contact extends Component {
  render () {
    return (
      <Wrapper>
        <div className='pure-g'>
          <div className='pure-u-1'>
            <Title>
              <Button href={`mailto:contact@bravenew.tech?subject=${encodeURIComponent('Brave New Tech - Contact Form')}`}>Get In Touch With Us</Button>
            </Title>
          </div>
        </div>
      </Wrapper>
    )
  }
}
