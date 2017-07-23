import styled from 'styled-components'

export default styled.div`
  position: absolute;

  ${props => (props.layout === 'left') && `
    left: 0;
  `}
  ${props => (props.layout === 'right') && `
    right: 0;
  `}

  top: 50%;
  transform: translateY(-50%);
  width: 50%;
  ${props => (props.layout === 'right') && `
    text-align: left;
  `}
  ${props => (props.layout === 'left') && `
    text-align: right;
  `}
  
  > div {
    max-width: 500px;
    padding: 0 30px;
    display: inline-block;
    text-align: left;
  }
  
  h1 {
    position: relative;
    color: #000;
    font-family: 'Linden Hill', serif;
    font-size: 64px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0 0 1em;
    border-bottom: 1px solid transparent;
    &:before {
      content: ' ';
      position: absolute;
      left: 0;
      bottom: -0.5em;
      width: 30%;
      height: 1px;
      background: #000;
    }
  }
  
  p {
    font: 400 18px/2 'Open Sans', sans-serif;
  }
  
  img {
    display: block;
    height: 35px;
    margin: 30px 0;
  }
`
