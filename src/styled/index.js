import { css, keyframes } from 'styled-components'

const fadeInKeyframe = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fontFamily = '\'calluna-sans\', \'Helvetica Neue\', Arial, sans-serif'

export function fadeIn () {
  return css`
    opacity: 0.5;
    animation: forwards ${fadeInKeyframe} 400ms ease-in;
  `
}

export const breakpoints = {
  'ts': 1023,
  'md': 767,
  'sm': 540,
  'xs': 375
}

export const bp = function (id, type = 'max-width', delta = 0) {
  if (!breakpoints[id]) {
    console.warn(`Breakpoint ${id} do not exists.`)
    return () => css``
  }

  return (...args) => css`
    @media (${type}: ${breakpoints[id] + delta}px) {
      ${css(...args)}
    }
  `
}
