import styled from 'styled-components'
import Content from '../Content'

export default styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);

  ${props => props.show && /* sc-dec */ `
    visibility: visible;
    opacity: 1;
    transition: opacity 400ms ease 0ms, visibility 0ms 0ms;
  `}

  ${Content /* sc-sel */ } {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`
