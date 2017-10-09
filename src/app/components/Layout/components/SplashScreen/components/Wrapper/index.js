import styled from 'styled-components'

export default styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #26a6d6;
  opacity: 1;
  transition: opacity 500ms ease;
  ${props => props.hideTransition && `
    opacity: 0;
    overflow: hidden;
  `}
`
