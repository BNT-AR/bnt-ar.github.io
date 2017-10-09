import { css } from 'styled-components'
import { normalize } from 'polished'
import { fadeInKeyframe } from './keyframes'
import PureCSS from './vendor/PureCSS'

export function container () {
  return css`
    max-width: 1000px;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
  `
}

export function fadeIn () {
  return css`
    opacity: 0.5;
    animation: forwards ${fadeInKeyframe} 400ms ease-in;
  `
}

export const fontFamily = '\'calluna-sans\', \'Helvetica Neue\', Arial, sans-serif'

export const breakpoints = {
  'ts': 1023,
  'md': 767,
  'sm': 540,
  'xs': 375
}

export const bp = function (id, type = 'max-width', delta = 0) {
  if (!breakpoints[id]) {
    console.warn(`Breakpoint ${id} do not exists.`)
    return () => null
  }

  return (...args) => css`
    @media (${type}: ${breakpoints[id] + delta}px) {
      ${css(...args)}
    }
  `
}

export const global = (theme) => css`
  ${normalize()}
  ${PureCSS.grid()}
  ${PureCSS.gridResponsive(breakpoints)}

  html {
    color: #5b5f66;
    font: 16px/1 'Roboto', sans-serif;
    background: ${theme.app.backgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .pure-g [class*="pure-u"] {
    font: 16px/1 ${fontFamily};
  }

  ::selection {
    color: #fff;
    background: ${theme.primaryColor};
  }

  strong {
    font-weight: 700;
  }
`
