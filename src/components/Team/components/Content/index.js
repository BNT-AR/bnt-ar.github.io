import styled from 'styled-components'

export default styled.div`
  > div {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 30px;
    text-align: center;
  }
  
  h1 {
    position: relative;
    color: #000;
    font-family: 'Open Sans',' Helvetica Neue', Arial, sans-serif;
    font-size: 64px;
    font-weight: 400;
    line-height: 1.3;
    margin: 0 0 1em;
    border-bottom: 1px solid transparent;
    &:before {
      content: ' ';
      position: absolute;
      left: 35%;
      bottom: -0.5em;
      width: 30%;
      height: 1px;
      background: #000;
    }
  }
  
  p {
    font: 400 18px/2 'Open Sans',' Helvetica Neue', Arial, sans-serif;
  }
`
