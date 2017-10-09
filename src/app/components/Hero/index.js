import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { animateScroll } from 'react-scroll'
import Wrapper from './components/Wrapper'
import P from '../P'

class Hero extends Component {
  static propTypes = {
    arrowToId: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    legend: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  }

  scrollTo = (e, nodeId) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }

    e.target.blur()
    const element = document.getElementById(nodeId)
    const windowOffsetTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    const value = element.getBoundingClientRect().top + windowOffsetTop
    animateScroll.scrollTo(value, {
      duration: 800,
      smooth: 'easeInOutCubic'
    })
  }

  arrowHandler = (e) => {
    if (!this.props.arrowToId) {
      return false
    }
    this.scrollTo(e, this.props.arrowToId)
  }

  render () {
    return (
      <Wrapper>
        <div>
          <h1>
            { this.props.title }
          </h1>
          <P>
            { this.props.legend }
          </P>
        </div>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 10'
          onClick={this.arrowHandler}
          onKeyPress={this.arrowHandler}
          tabIndex={this.props.arrowToId ? '0' : false}
        >
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
