import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import Portfolio from './../../components/Portfolio'
import Hero from '../../components/Hero'
import ContactForm from '../../components/ContactForm'

import Marketplace from './../../components/Portfolio/assets/marketplace.jpg'
import HubHaus from './../../components/Portfolio/assets/hubhaus.jpg'
import DS from './../../components/Portfolio/assets/dronestock.jpg'
import BC from './../../components/Portfolio/assets/birth.jpg'
import ACR from './../../components/Portfolio/assets/acr.jpg'

const Wrapper = styled.div`
  min-height: 100px;
`

class PortfolioScene extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

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
    if (!this.props.auth.authenticated) { // can't access if user is not logged in
      this.props.history.replace('/')
    }
    this.fetchData()
  }

  render () {
    return (
      <Wrapper>
        <Hero
          title={'Apps Portfolio'}
          legend={'We love what we do and that\'s why we do it. Below you will find a few examples why.'}
          arrowToId={'portfolio'}
        />
        <div id='portfolio'>
          {
            this.state.portfolioCollection && this.state.portfolioCollection.map((obj, i) => (
              <Portfolio key={obj.id}
                title={obj.title}
                description={obj.description}
                url={obj.url}
                tools={obj.tools}
                images={this.mapImageStringToIcon[obj.images]}
              />
            ))
          }
        </div>
        <div>
          <ContactForm />
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.current
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioScene))
