import React, { Component } from 'react'
import H1 from '../../../../components/H1'
import P from '../../../../components/P'
import Wrapper from './components/Wrapper'
import Member from './components/Member'

import relaxBilbao from './assets/36.jpg'
import relaxVazquez from './assets/99.jpg'
import relaxDans from './assets/40.jpg'
import relaxBrunacci from './assets/22.jpg'

class Team extends Component {
  constructor (props) {
    super(props)
    this.pics = {
      'bilbao': relaxBilbao,
      'vazquez': relaxVazquez,
      'dans': relaxDans,
      'brunacci': relaxBrunacci
    }
  }

  render () {
    return (
      <Wrapper id={'team'}>
        <div>
          <H1>We are a full stack team</H1>
          <P>
            We know about trust and synergic, those are key values to success.
          </P>

          <div className='pure-g'>
            <div className='pure-u-1-2 pure-u-sm-1'>
              <Member
                image={this.pics['brunacci']}
                name={'Gabriel Brunacci'}
                title={'Founder & Director'}
                description={'Tech and code geek'}
                linkedIn={'https://www.linkedin.com/in/gabrielbrunacci/'}
              />
            </div>
            <div className='pure-u-1-2 pure-u-sm-1'>
              <Member
                image={this.pics['bilbao']}
                name={'Martin Bilbao'}
                title={'Software Engineer Hero'}
                description={'Algorithms in his blood'}
                linkedIn={'https://www.linkedin.com/in/martin-bilbao-51a5b31b/'}
              />
            </div>
            <div className='pure-u-1-2 pure-u-sm-1'>
              <Member
                image={this.pics['dans']}
                name={'Juan Dans'}
                title={'React.js Rockstar'}
                description={'Multi-core Brained'}
                linkedIn={'https://www.linkedin.com/in/juan-bautista-dans-29a36ab4/'}
              />
            </div>
            <div className='pure-u-1-2 pure-u-sm-1'>
              <Member
                image={this.pics['vazquez']}
                name={'Joaquin Vazquez'}
                title={'Front End Tank'}
                description={"It's all about React.js, baby"}
                linkedIn={'https://www.linkedin.com/in/joaquin-vazquez-790672113/'}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Team
