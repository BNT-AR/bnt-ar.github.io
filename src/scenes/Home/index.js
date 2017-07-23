import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Story from '../../components/Story'
import Stack from '../../components/Stack'
import Team from '../../components/Team'
import AkcLogo from './assets/akc-logo.svg'
import BirthCertLogo from './assets/birthcertificate-logo.svg'

class Home extends Component {
  render () {
    return (
      <div>
        <Header>
          <Logo />
          <Nav />
        </Header>
        <Hero
          title={(
            <span>
              Software development
              <br />for people like you
            </span>
          )}
          legend={`
            We deliver meaningful and lasting results for our clients by improving the experience of their users.
            Learn more about our unique approach to services and broad portfolio of work.
          `}
        />
        <Story
          layout={'left'}
          image={'https://www.dtelepathy.com/images/work/quip/homepage-feature.584410d34edbd3bf.jpg'}
          content={(
            <div>
              <h1>We scale dev easy for startups</h1>
              <img src={AkcLogo} alt='AKC Logo' />
              <p>
                We have been working with <em>American Kennel Club ® </em> in their online Marketplace since they started.
                Now it handles +30000 users and high traffic load with online transactions.
                Yes, they chose custom software built on standards.
              </p>
            </div>
          )}
        />
        <Story
          layout={'right'}
          image={'https://www.dtelepathy.com/images/work/roche/homepage-feature.19833338dc33a8f2.jpg'}
          content={(
            <div>
              <h1>We move fast and achieve goals</h1>
              <img src={BirthCertLogo} alt='BirthCertificateOnline Logo' />
              <p>
                Companies move fast and need robust steps. We join <em>Birth Certificate Online ® </em>
                to handle structural decisions with the ability to mute when needed.
                Your time is the most valuable, we know that.
              </p>
            </div>
          )}
        />

        <Stack />
        <Team />
        <Footer />
      </div>
    )
  }
}

export default Home
