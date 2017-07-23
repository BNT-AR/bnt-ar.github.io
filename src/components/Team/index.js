import React, { Component } from 'react'
import Wrapper from './components/Wrapper'
import Content from './components/Content'
import Member from './components/Member'

import GBrunacci from './assets/gbrunacci.jpg'
import MBilbao from './assets/mbilbao.jpg'
import EMateu from './assets/emateu.jpg'
import JCtkc from './assets/jctkc.jpg'
import JDans from './assets/jdans.jpg'

class Stack extends Component {
  render () {
    return (
      <Wrapper>
        <Content>
          <div>
            <h1>We are a full stack team</h1>
            <p>
              We know about trust and synergic, those are key values to success.
            </p>

            <ul>
              <li>
                <Member
                  image={GBrunacci}
                  name={'Gabriel'}
                  title={'Founder & Director'}
                  description={'Programming jewel turned into CEO'}
                  linkedIn={'https://www.linkedin.com/in/gabrielbrunacci/'}
                />
              </li>
              <li>
                <Member
                  image={MBilbao}
                  name={'Martín'}
                  title={'Software Engineer Hero'}
                  description={'Algorithms in his blood'}
                  linkedIn={'https://www.linkedin.com/in/martin-bilbao-51a5b31b/'}
                />
              </li>
              <li>
                <Member
                  image={EMateu}
                  name={'Emiliano'}
                  title={'Cutting Edge Frontend'}
                  description={'He loves Laravel too'}
                  linkedIn={'https://www.linkedin.com/in/mateuemiliano/'}
                />
              </li>
              <li>
                <Member
                  image={JCtkc}
                  name={'Juan Sette'}
                  title={'Grandmaster Laravel'}
                  description={'The Bug Slayer'}
                  linkedIn={'https://www.linkedin.com/in/juan-ignacio-settecase/'}
                />
              </li>
              <li>
                <Member
                  image={JDans}
                  name={'Juan Dans'}
                  title={'React.js Rockstar'}
                  description={'This guy used to code Java™ too'}
                  linkedIn={'https://www.linkedin.com/in/juan-bautista-dans-29a36ab4/'}
                />
              </li>
            </ul>
          </div>
        </Content>
      </Wrapper>
    )
  }
}

export default Stack
