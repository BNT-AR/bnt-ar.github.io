import React, { Component } from 'react'
import H1 from '../H1'
import P from '../P'
import Wrapper from './components/Wrapper'
import Picture from './components/Picture'
import Icon from './components/Icon'
import Content from './components/Content'

class Story extends Component {
  render () {
    return (
      <Wrapper id={this.props.id}>
        <Picture
          imageUrl={this.props.image}
          layout={this.props.layout}
        />
        <Content
          layout={this.props.layout}
        >
          <div>
            <H1>{ this.props.title }</H1>
            { this.props.icon && this.props.icon.image && (
              <Icon image={this.props.icon.image} title={this.props.icon.title} />
            )}
            <P>{ this.props.description }</P>
          </div>
        </Content>
      </Wrapper>
    )
  }
}

export default Story
