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
import Image1 from './assets/ilust_001.png'
import Image2 from './assets/ilust_002.png'
import Image3 from './assets/ilust_003.png'

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
          legend={(
            <span>
              {'We bring practical and scalable solutions to turn new ideas into real products that mean business. '}
              <br />
              {'Explore our approach and process to make apps comes true.'}
            </span>
            )}
          arrowToId={'about'}
        />
        <Story
          id={'about'}
          layout={'left'}
          image={Image1}
          title={'We scale startup minded apps'}
          icon={{
            image: LaravelLogo,
            title: 'Laravel',
            titleColor: '#fb503b'
          }}
          description={`
            We have been working with companies all over the world in their apps since they started.
            Some of them now handles million of users a month, high traffic load and online transactions.
            Yes, they chose custom software built on standards.
          `}
        />
        <Story
          layout={'right'}
          image={Image2}
          title={'We move fast and achieve goals'}
          icon={{
            image: ReactLogo,
            title: 'React',
            titleColor: '#53c1de'
          }}
          description={`
            Companies move fast and need robust steps. We have the expertise of
            handling structural decisions with the ability to mutate when needed.
            Your time is the most valuable, we know that.
          `}
        />
        <Story
          layout={'left'}
          image={Image3}
          title={'We cloud the app and it just works'}
          icon={{
            image: AwsLogo
          }}
          description={`
            When your site is launched, the tools used to keep it running are essential to have 99.95% availability.
            It's not only about Virtual Servers, but also Node Balancers, DNS, CDN, Transcoding Tools, Database
            Mirroring, and more fancy words that will keep your things running.
            We have wide experience with Amazon AWS, Digital Ocean and Linode.
          `}
        />
        <Stack />
        <Team />
        <Footer />
      </div>
    )
  }
}

export default Home
