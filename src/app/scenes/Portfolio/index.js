import React, { Component } from 'react'
import Portfolio from './../../components/Portfolio'
import Hero from '../../components/Hero'
import axios from 'axios'

// MARKETPLACE IMAGES
import Marketplace from './../../components/Portfolio/assets/marketplace.jpg'

// HUBHAUS IMAGES
import HubHaus from './../../components/Portfolio/assets/hubhaus.jpg'

// DS
import DS from './../../components/Portfolio/assets/dronestock.jpg'

// BC
import BC from './../../components/Portfolio/assets/birth.jpg'

// ACR
import ACR from './../../components/Portfolio/assets/acr.jpg'

class PortfolioScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      portfolioCollection: null,
      loading: true
    }

    this.mapImageStringToIcon = {
      'Marketplace': Marketplace,
      'Hubhaus': HubHaus,
      'DS': DS,
      'ACR': ACR,
      'BC': BC
    }
  }

  fetchData = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/portfolio`)
    this.setState({
      portfolioCollection: res.data,
      loading: false
    })
  }

  componentWillMount () {
    this.fetchData()
  }

  render () {
    return (
      <div>
        <Hero
          title={'Apps Portfolio'}
          legend={'We love what we do and that\'s why we do it. Below you will find a few examples why.'}
          arrowToId={'portfolio'}
        />
        <div id='portfolio'>
          {
            this.state.portfolioCollection ? this.state.portfolioCollection.map((obj, i) => (
              <Portfolio key={obj.id}
                title={obj.title}
                description={obj.description}
                url={obj.url}
                tools={obj.tools}
                images={this.mapImageStringToIcon[obj.images]}
              />
            )) : null
          }
        </div>
      </div>
    )
  }
}

export default PortfolioScene
