import React, { Component } from 'react'
import H1 from '../H1'
import P from '../P'
import Wrapper from './components/Wrapper'
import Member from './components/Member'

import BNT from './assets/18.jpg'
import relaxBilbao from './assets/36.jpg'
import relaxMateu from './assets/35.jpg'
import relaxSette from './assets/24.jpg'
import relaxDans from './assets/40.jpg'
import relaxBrunacci from './assets/22.jpg'

class Stack extends Component {
  constructor (props) {
    super(props)
    this.pics = {
      'bilbao': relaxBilbao,
      'mateu': relaxMateu,
      'sette': relaxSette,
      'dans': relaxDans,
      'brunacci': relaxBrunacci
    }
  }

  render () {
    return (
      <Wrapper id={'team'}>
        <H1>We are a full stack team</H1>
        <P>
          We know about trust and synergic, those are key values to success.
        </P>

        <div className='pure-g'>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={BNT}
              name={'Brave New Technology'}
              title={'Practical & Scalable Solutions'}
              description={'Make apps comes true'}
              linkedIn={'https://www.linkedin.com/company-beta/24781853/'}
            />
          </div>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={this.pics['brunacci']}
              name={'Gabriel Brunacci'}
              title={'Founder & Director'}
              description={'Programming jewel turned into CEO'}
              linkedIn={'https://www.linkedin.com/in/gabrielbrunacci/'}
            />
          </div>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={this.pics['bilbao']}
              name={'Martín Bilbao'}
              title={'Software Engineer Hero'}
              description={'Algorithms in his blood'}
              linkedIn={'https://www.linkedin.com/in/martin-bilbao-51a5b31b/'}
            />
          </div>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={this.pics['mateu']}
              name={'Emiliano Mateu'}
              title={'Cutting Edge Front-end'}
              description={'He loves backend too'}
              linkedIn={'https://www.linkedin.com/in/mateuemiliano/'}
            />
          </div>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={this.pics['sette']}
              name={'Juan Settecase'}
              title={'Grandmaster Laravel'}
              description={'The Bug Slayer'}
              linkedIn={'https://www.linkedin.com/in/juan-ignacio-settecase/'}
            />
          </div>
          <div className='pure-u-1-3 pure-u-ts-1-2 pure-u-sm-1'>
            <Member
              image={this.pics['dans']}
              name={'Juan Dans'}
              title={'React.js Rockstar'}
              description={'Office greatest Shazam'}
              linkedIn={'https://www.linkedin.com/in/juan-bautista-dans-29a36ab4/'}
            />
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Stack
