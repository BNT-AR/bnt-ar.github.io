import { css } from 'styled-components'

const gridResponsive = (breakpoints) => {
  return Object.keys(breakpoints).reduce((css, key) => {
    const value = breakpoints[key]
    return css + `
    @media screen and (max-width: ${value}px) {
      .pure-u-${key}-1,
      .pure-u-${key}-1-1,
      .pure-u-${key}-1-2,
      .pure-u-${key}-1-3,
      .pure-u-${key}-2-3,
      .pure-u-${key}-1-4,
      .pure-u-${key}-3-4,
      .pure-u-${key}-1-5,
      .pure-u-${key}-2-5,
      .pure-u-${key}-3-5,
      .pure-u-${key}-4-5,
      .pure-u-${key}-5-5,
      .pure-u-${key}-1-6,
      .pure-u-${key}-5-6,
      .pure-u-${key}-1-8,
      .pure-u-${key}-3-8,
      .pure-u-${key}-5-8,
      .pure-u-${key}-7-8,
      .pure-u-${key}-1-12,
      .pure-u-${key}-5-12,
      .pure-u-${key}-7-12,
      .pure-u-${key}-11-12,
      .pure-u-${key}-1-24,
      .pure-u-${key}-2-24,
      .pure-u-${key}-3-24,
      .pure-u-${key}-4-24,
      .pure-u-${key}-5-24,
      .pure-u-${key}-6-24,
      .pure-u-${key}-7-24,
      .pure-u-${key}-8-24,
      .pure-u-${key}-9-24,
      .pure-u-${key}-10-24,
      .pure-u-${key}-11-24,
      .pure-u-${key}-12-24,
      .pure-u-${key}-13-24,
      .pure-u-${key}-14-24,
      .pure-u-${key}-15-24,
      .pure-u-${key}-16-24,
      .pure-u-${key}-17-24,
      .pure-u-${key}-18-24,
      .pure-u-${key}-19-24,
      .pure-u-${key}-20-24,
      .pure-u-${key}-21-24,
      .pure-u-${key}-22-24,
      .pure-u-${key}-23-24,
      .pure-u-${key}-24-24 {
        display: inline-block;
        *display: inline;
        zoom: 1;
        letter-spacing: normal;
        word-spacing: normal;
        vertical-align: top;
        text-rendering: auto;
      }
  
      .pure-u-${key}-1-24 {
        width: 4.1667%;
        *width: 4.1357%;
      }
  
      .pure-u-${key}-1-12,
      .pure-u-${key}-2-24 {
        width: 8.3333%;
        *width: 8.3023%;
      }
  
      .pure-u-${key}-1-8,
      .pure-u-${key}-3-24 {
        width: 12.5000%;
        *width: 12.4690%;
      }
  
      .pure-u-${key}-1-6,
      .pure-u-${key}-4-24 {
        width: 16.6667%;
        *width: 16.6357%;
      }
  
      .pure-u-${key}-1-5 {
        width: 20%;
        *width: 19.9690%;
      }
  
      .pure-u-${key}-5-24 {
        width: 20.8333%;
        *width: 20.8023%;
      }
  
      .pure-u-${key}-1-4,
      .pure-u-${key}-6-24 {
        width: 25%;
        *width: 24.9690%;
      }
  
      .pure-u-${key}-7-24 {
        width: 29.1667%;
        *width: 29.1357%;
      }
  
      .pure-u-${key}-1-3,
      .pure-u-${key}-8-24 {
        width: 33.3333%;
        *width: 33.3023%;
      }
  
      .pure-u-${key}-3-8,
      .pure-u-${key}-9-24 {
        width: 37.5000%;
        *width: 37.4690%;
      }
  
      .pure-u-${key}-2-5 {
        width: 40%;
        *width: 39.9690%;
      }
  
      .pure-u-${key}-5-12,
      .pure-u-${key}-10-24 {
        width: 41.6667%;
        *width: 41.6357%;
      }
  
      .pure-u-${key}-11-24 {
        width: 45.8333%;
        *width: 45.8023%;
      }
  
      .pure-u-${key}-1-2,
      .pure-u-${key}-12-24 {
        width: 50%;
        *width: 49.9690%;
      }
  
      .pure-u-${key}-13-24 {
        width: 54.1667%;
        *width: 54.1357%;
      }
  
      .pure-u-${key}-7-12,
      .pure-u-${key}-14-24 {
        width: 58.3333%;
        *width: 58.3023%;
      }
  
      .pure-u-${key}-3-5 {
        width: 60%;
        *width: 59.9690%;
      }
  
      .pure-u-${key}-5-8,
      .pure-u-${key}-15-24 {
        width: 62.5000%;
        *width: 62.4690%;
      }
  
      .pure-u-${key}-2-3,
      .pure-u-${key}-16-24 {
        width: 66.6667%;
        *width: 66.6357%;
      }
  
      .pure-u-${key}-17-24 {
        width: 70.8333%;
        *width: 70.8023%;
      }
  
      .pure-u-${key}-3-4,
      .pure-u-${key}-18-24 {
        width: 75%;
        *width: 74.9690%;
      }
  
      .pure-u-${key}-19-24 {
        width: 79.1667%;
        *width: 79.1357%;
      }
  
      .pure-u-${key}-4-5 {
        width: 80%;
        *width: 79.9690%;
      }
  
      .pure-u-${key}-5-6,
      .pure-u-${key}-20-24 {
        width: 83.3333%;
        *width: 83.3023%;
      }
  
      .pure-u-${key}-7-8,
      .pure-u-${key}-21-24 {
        width: 87.5000%;
        *width: 87.4690%;
      }
  
      .pure-u-${key}-11-12,
      .pure-u-${key}-22-24 {
        width: 91.6667%;
        *width: 91.6357%;
      }
  
      .pure-u-${key}-23-24 {
        width: 95.8333%;
        *width: 95.8023%;
      }
  
      .pure-u-${key}-1,
      .pure-u-${key}-1-1,
      .pure-u-${key}-5-5,
      .pure-u-${key}-24-24 {
        width: 100%;
      }
    }
  `
  }, '')
}

export default (breakpoints) => css`
  ${ gridResponsive(breakpoints) }
`
