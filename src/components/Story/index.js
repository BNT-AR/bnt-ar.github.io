import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Picture from './components/Picture'
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
            { this.props.content }
          </div>
        </Content>
      </Wrapper>
    )
  }
}

export default Story
