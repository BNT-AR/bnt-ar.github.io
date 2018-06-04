import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { animateScroll } from 'react-scroll'
import Wrapper from './components/Wrapper'
import Item from './components/Item'
import {Link} from 'react-router-dom'

class Nav extends Component {
  static propTypes = {
    className: PropTypes.string,
    auth: PropTypes.object.isRequired
  }

  scrollTo = (nodeId) => {
    const element = document.getElementById(nodeId)
    if (!element) return false

    const windowOffsetTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    const value = element.getBoundingClientRect().top + windowOffsetTop
    animateScroll.scrollTo(value, {
      duration: 800,
      smooth: 'easeInOutCubic'
    })

    return true
  }

  onAboutSelect = (e) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }
    e.target.blur()
    setTimeout(() => {
      this.scrollTo('about')
    }, 50)
  }

  onTeamSelect = (e) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }
    e.target.blur()
    setTimeout(() => {
      this.scrollTo('team')
    }, 50)
  }

  onFormSelect = (e) => {
    if (e.type !== 'click' && e.charCode !== 13) {
      return false
    }
    e.target.blur()
    this.scrollTo('form')
  }

  render () {
    return (
      <div className={this.props.className}>
        <Item onKeyPress={this.onAboutSelect} onClick={this.onAboutSelect}>
          <Link to={'/'}>About</Link>
        </Item>
        <Item onKeyPress={this.onTeamSelect} onClick={this.onTeamSelect}>
          <Link to={'/'}>Team</Link>
        </Item>
        {this.props.auth && this.props.auth.authenticated && (
          <Item>
            <Link to={'/portfolio'}>Portfolio</Link>
          </Item>
        )}
        <Item bordered onKeyPress={this.onFormSelect} onClick={this.onFormSelect}>
          Contact
        </Item>
      </div>
    )
  }
}

export default Wrapper.withComponent(Nav)
