import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Content from './components/Content'
import Member from './components/Member'

import BNT from './assets/bnt.jpg'
import GBrunacci from './assets/gbrunacci.jpg'
import MBilbao from './assets/mbilbao.jpg'
import EMateu from './assets/emateu.jpg'
import JCtkc from './assets/jctkc.jpg'
import JDans from './assets/jdans.jpg'

class Stack extends Component {
  render () {
    return (
      <Wrapper id={'team'}>
        <Content>
          <div>
            <h1>We are a full stack team</h1>
            <p>
              We know about trust and synergic, those are key values to success.
            </p>

            <div className='pure-g'>
              <div className='pure-u-1-3'>
                <Member
                  image={BNT}
                  name={'Brave New Technology'}
                  title={'Practical and scalable solutions'}
                  description={'Make apps comes true'}
                  linkedIn={'https://www.linkedin.com/company-beta/24781853/'}
                />
              </div>
              <div className='pure-u-1-3'>
                <Member
                  image={GBrunacci}
                  name={'Gabriel Brunacci'}
                  title={'Founder & Director'}
                  description={'Programming jewel turned into CEO'}
                  linkedIn={'https://www.linkedin.com/in/gabrielbrunacci/'}
                />
              </div>
              <div className='pure-u-1-3'>
                <Member
                  image={MBilbao}
                  name={'Martín Bilbao'}
                  title={'Software Engineer Hero'}
                  description={'Algorithms in his blood'}
                  linkedIn={'https://www.linkedin.com/in/martin-bilbao-51a5b31b/'}
                />
              </div>
              <div className='pure-u-1-3'>
                <Member
                  image={EMateu}
                  name={'Emiliano Mateu'}
                  title={'Cutting Edge Front-end'}
                  description={'He loves backend too'}
                  linkedIn={'https://www.linkedin.com/in/mateuemiliano/'}
                />
              </div>
              <div className='pure-u-1-3'>
                <Member
                  image={JCtkc}
                  name={'Juan Settecase'}
                  title={'Grandmaster Laravel'}
                  description={'The Bug Slayer'}
                  linkedIn={'https://www.linkedin.com/in/juan-ignacio-settecase/'}
                />
              </div>
              <div className='pure-u-1-3'>
                <Member
                  image={JDans}
                  name={'Juan Dans'}
                  title={'React.js Rockstar'}
                  description={'Office greatest Shazam'}
                  linkedIn={'https://www.linkedin.com/in/juan-bautista-dans-29a36ab4/'}
                />
              </div>
            </div>
          </div>
        </Content>
      </Wrapper>
    )
  }
}

export default Stack
