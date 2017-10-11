import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from './components/Wrapper'
import H1 from '../H1'
import H2 from '../H2'
import P from '../P'
import Button from './components/Button'
import List from './components/List'
import Tech from './components/Tech'

// TOOLS IMAGES
import React2 from './../Stack/assets/react.svg'
import Angular from './../Stack/assets/angular.svg'
import Laravel from './../Stack/assets/laravel.svg'
import Javascript from './../Stack/assets/javascript.svg'
import MySQL from './../Stack/assets/mysql.svg'
import PHP from './../Stack/assets/php.svg'
import AWS from './../Stack/assets/aws-cloud.svg'
import Envoyer from './../Stack/assets/envoyer.svg'
import VueJS from './../Stack/assets/vuejs.svg'
import Typescript from './../Stack/assets/typescript.svg'

class Portfolio extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    tools: PropTypes.array.isRequired,
    images: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.mapToolStringToIcon = {
      'Laravel': Laravel,
      'React': React2,
      'Javascript': Javascript,
      'PHP': PHP,
      'MySQL': MySQL,
      'AWS': AWS,
      'VueJS': VueJS,
      'Envoyer': Envoyer,
      'Angular 4': Angular,
      'Typescript': Typescript
    }
  }

  render () {
    return (
      <Wrapper>
        <div>
          <div className='pure-g'>
            <div className='pure-u-2-3 pure-u-ts-1'>
              <div>
                <H1>{this.props.title}</H1>
                {this.props.description && (
                  <P>{this.props.description}</P>
                )}
                {this.props.url && (
                  <P>
                    <Button href={this.props.url} target='_blank'>
                      View online
                    </Button>
                  </P>
                )}
              </div>
            </div>
            <div className='pure-u-1-3 pure-u-ts-1'>
              <Tech>
                <H2>Featured tools</H2>
                <List>
                  {
                    this.props.tools.map((obj, i) => (
                      <li key={i}>
                        <img src={this.mapToolStringToIcon[obj.name]} alt={obj.name} />
                        <p>{obj.name}</p>
                      </li>
                    ))
                  }
                </List>
              </Tech>
            </div>
            <div className='pure-u-1'>
              <div>
                <img src={this.props.images} alt={this.props.title} />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Portfolio
