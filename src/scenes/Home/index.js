import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Logo from '../../components/Logo'
import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Story from '../../components/Story'
import Stack from '../../components/Stack'
import Team from '../../components/Team'
import LaravelLogo from './assets/laravel-logo.svg'
import ReactLogo from './assets/react-logo.svg'
import AwsLogo from './assets/aws.svg'
import CloudImage from './assets/cloud.jpg'

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
              We do web & mobile apps
              <br />for startups like yours.
            </span>
          )}
          legend={`
            We bring practical and scalable solutions to turn new ideas into real products that mean business.
            Explore our approach and process to make apps comes true.
          `}
          arrowToId={'about'}
        />
        <Story
          id={'about'}
          layout={'left'}
          image={'https://www.dtelepathy.com/images/work/quip/homepage-feature.584410d34edbd3bf.jpg'}
          content={(
            <div>
              <h1>We scale startup minded apps</h1>
              <img src={LaravelLogo} alt='AKC Logo' />
              <p>
                We have been working with companies all over the world in their apps since they started.
                Some of them now handles million of users a month, high traffic load and online transactions.
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
              <img src={ReactLogo} alt='BirthCertificateOnline Logo' />
              <p>
                Companies move fast and need robust steps. We join <em>Birth Certificate Online ® </em>
                to handle structural decisions with the ability to mute when needed.
                Your time is the most valuable, we know that.
              </p>
            </div>
          )}
        />
        <Story
          layout={'left'}
          image={CloudImage}
          content={(
            <div>
              <h1>We cloud the App and it just works</h1>
              <img src={AwsLogo} alt='Amazon AWS' />
              <p>
                When your site is launched, the tools used to keep it running are essential to have 99.95% availability.
                It's not only about Virtual Servers, but also Node Balancers, DNS, CDN, Transcoding Tools, Database
                Mirroring, and more fancy words that will keep your things running.
                We have wide experience with Amazon AWS, Digital Ocean and Linode.
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
