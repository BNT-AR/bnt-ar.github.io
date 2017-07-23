import styled from 'styled-components'
import Logo from '../Logo'
import Nav from '../Nav'

export default styled.div`
  position: relative;
  
  ${Logo} {
    position: absolute;
    z-index: 1;
    left: 40px;
    top: 40px;
  }
  
  ${Nav} {
    position: absolute;
    z-index: 1;
    right: 40px;
    top: 40px;
  }
`
