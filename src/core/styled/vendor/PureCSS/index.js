import Grid from './components/Grid'
import GridResponsive from './components/GridResponsive'

const PureCSS = {
  grid: () => Grid,
  gridResponsive: (breakpoints) => GridResponsive(breakpoints)
}

export default PureCSS
