import React, { Component } from 'react'
import Wrapper from './components/Wrapper'

class Hero extends Component {
  render () {
    return (
      <Wrapper>
        <div>
          <h1>
            { this.props.title }
          </h1>
          <p>
            { this.props.legend }
          </p>
        </div>

        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10'>
          <g fill='none' stroke='#fff' strokeLinecap='round'>
            <polyline strokeLinejoin='round' points='.657 4.981 17.924 4.981 13.027 9.878' />
            <path d='M17.8125,4.75 L13,0' />
          </g>
        </svg>

      </Wrapper>
    )
  }
}

export default Hero
