import React, { Component } from 'react'
import Portfolio from './../../components/Portfolio'
import Hero from '../../components/Hero'

// TOOLS IMAGES
import React2 from './../../components/Stack/assets/react.svg'
import Angular from './../../components/Stack/assets/angular.svg'
import Laravel from './../../components/Stack/assets/laravel.svg'
import Javascript from './../../components/Stack/assets/javascript.svg'
import MySQL from './../../components/Stack/assets/mysql.svg'
import PHP from './../../components/Stack/assets/php.svg'
import AWS from './../../components/Stack/assets/aws-cloud.svg'
import Envoyer from './../../components/Stack/assets/envoyer.svg'
import VueJS from './../../components/Stack/assets/vuejs.svg'
import Typescript from './../../components/Stack/assets/typescript.svg'

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
    this.portfolioCollection = [
      {
        id: 'marketplace',
        title: 'Marketplace',
        description: 'Puppy Finder (market #1), buy and sell puppies and dog grooming products. Online transactions with high traffic load.',
        url: 'http://marketplace.akc.org/',
        images: [{
          alt: 'Marketplace desktop view',
          name: Marketplace
        }
        ],
        tools: [{
          name: 'Laravel',
          icon: Laravel
        },
        {
          name: 'React',
          icon: React2
        },
        {
          name: 'Javascript',
          icon: Javascript
        },
        {
          name: 'PHP',
          icon: PHP
        },
        {
          name: 'MySQL',
          icon: MySQL
        },
        {
          name: 'AWS',
          icon: AWS
        }
        ]
      },
      {
        id: 'hubhaus',
        title: 'Hubhaus',
        description: 'Marketplace for home discoering and co-living. Stripe integration for online transactions and recurring payments (ACH and Credit Cards).',
        url: 'https://thehubhaus.com',
        images: [{
          alt: 'Hubhaus desktop view',
          name: HubHaus
        }
        ],
        tools: [{
          name: 'Laravel',
          icon: Laravel
        },
        {
          name: 'VueJS',
          icon: VueJS
        },
        {
          name: 'Javascript',
          icon: Javascript
        },
        {
          name: 'PHP',
          icon: PHP
        },
        {
          name: 'MySQL',
          icon: MySQL
        },
        {
          name: 'Envoyer',
          icon: Envoyer
        }
        ]
      },
      {
        id: 'dronestock',
        title: 'Dronestock',
        description: 'Marketplace to sell and buy high quality drone footage quickly.',
        url: 'https://www.dronestock.com',
        images: [{
          alt: 'Dronestock desktop view',
          name: DS
        }
        ],
        tools: [{
          name: 'Laravel',
          icon: Laravel
        },
        {
          name: 'Angular 4',
          icon: Angular
        },
        {
          name: 'Typescript',
          icon: Typescript
        },
        {
          name: 'PHP',
          icon: PHP
        },
        {
          name: 'MySQL',
          icon: MySQL
        },
        {
          name: 'AWS',
          icon: AWS
        }
        ]
      },
      {
        id: 'canineretreat',
        title: 'Canine Retreat',
        description: 'Institutional website for the Canine Retreat. Content 100% managed via content management system.',
        url: 'https://akccanineretreat.com/',
        images: [{
          alt: 'Canine Retreat desktop view',
          name: ACR
        }
        ],
        tools: [{
          name: 'PHP',
          icon: PHP
        },
        {
          name: 'Javascript',
          icon: Javascript
        },
        {
          name: 'MySQL',
          icon: MySQL
        },
        {
          name: 'AWS',
          icon: AWS
        }
        ]
      },
      {
        id: 'idprotection',
        title: 'Birth Certificate / Birth Vital Records',
        description: 'Service to issue Birth Certificate applications on most US states. Online transactions and recurring subscriptions.',
        url: 'https://www.birth-certificate.online/',
        images: [{
          alt: 'ID Protection desktop view',
          name: BC
        }
        ],
        tools: [{
          name: 'Laravel',
          icon: Laravel
        },
        {
          name: 'React',
          icon: React2
        },
        {
          name: 'Javascript',
          icon: Javascript
        },
        {
          name: 'PHP',
          icon: PHP
        },
        {
          name: 'MySQL',
          icon: MySQL
        },
        {
          name: 'AWS',
          icon: AWS
        }
        ]
      }
    ]
  }

  render () {
    return (
      <div>
        <Hero
          title={'Apps Portfolio'}
          legend={'We love what we do and that\'s why we do it. Below you will find a few examples why.'}
          arrowToId={'portfolio'}
        />
        {
          this.portfolioCollection.map((obj, i) => (
            <Portfolio key={obj.id}
              title={obj.title}
              description={obj.description}
              url={obj.url}
              tools={obj.tools}
              images={obj.images}
            />
          ))
        }
      </div>
    )
  }
}

export default PortfolioScene
