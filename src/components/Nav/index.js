import React, { Component } from 'react'
import { animateScroll } from 'react-scroll'
import Wrapper from './components/Wrapper'
import Item from './components/Item'

class Nav extends Component {
  scrollTo = (nodeId) => {
    const element = document.getElementById(nodeId)
    const windowOffsetTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    const value = element.getBoundingClientRect().top + windowOffsetTop
    animateScroll.scrollTo(value, {
      duration: 800,
      smooth: 'easeInOutCubic'
    })
  }

  onAboutSelect = (e) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }
    e.target.blur()
    this.scrollTo('about')
  }

  onTeamSelect = (e) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }
    e.target.blur()
    this.scrollTo('team')
  }

  render () {
    return (
      <div className={this.props.className}>
        <Item onKeyPress={this.onAboutSelect} onClick={this.onAboutSelect}>About</Item>
        <Item onKeyPress={this.onTeamSelect} onClick={this.onTeamSelect}>Team</Item>
        <Item bordered href='mailto:info@bravenew.tech'>Contact</Item>
      </div>
    )
  }
}

export default Wrapper.withComponent(Nav)
