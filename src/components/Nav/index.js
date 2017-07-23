import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Item from './components/Item'

class Nav extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <Item tabIndex='0'>Services</Item>
        <Item tabIndex='0'>About</Item>
        <Item tabIndex='0'>Careers</Item>
        <Item tabIndex='0' bordered>Contact</Item>
      </div>
    )
  }
}

export default Wrapper.withComponent(Nav)
