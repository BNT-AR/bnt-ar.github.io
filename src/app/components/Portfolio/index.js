import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from './components/Wrapper'
import H1 from '../H1'
import H2 from '../H2'
import P from '../P'
import Button from './components/Button'
import List from './components/List'
import Tech from './components/Tech'

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    tools: PropTypes.array,
    images: PropTypes.array
  }

  static defaultProps = {
    title: '',
    description: '',
    url: '',
    tools: [],
    images: []
  }

  render () {
    return (
      <Wrapper>
        <div id={'portfolio'}>
          <div className='pure-g'>
            <div className='pure-u-2-3 pure-u-ts-1 pure-u-sm-1'>
              <div>
                <H1>{this.props.title}</H1>
                <P>{this.props.description}</P>
                <P><Button href={this.props.url} className={'view-online'} target='_blank'>View online</Button></P>
              </div>
            </div>

            <div className='pure-u-1-3 pure-u-ts-1 pure-u-sm-1'>
              <Tech>
                <H2>Featured tools</H2>
                <List>
                  {
                    this.props.tools.map((obj, i) => (
                      <li key={i}>
                        <img src={obj.icon} alt={obj.name} />
                        <p>{obj.name}</p>
                      </li>
                    ))
                  }
                </List>
              </Tech>
            </div>
            <div className='pure-u-1 pure-u-ts-1 pure-u-sm-1 '>
              <div>
                <img src={this.props.images[0].name} alt={this.props.images[0].alt} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Portfolio
