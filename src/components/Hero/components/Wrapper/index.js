import styled from 'styled-components'

export default styled.div`
  position: relative;
  height: 100vh;
  background: #26a6d6;
  
  h1 {
    color: #fff;
    font-family: 'Open Sans',' Helvetica Neue', Arial, sans-serif;
    font-size: 72px;
    font-weight: 400;
    text-align: center;
    line-height: 1.3;
    margin: 0;
  }
  
  p {
    color: #fff;
    font: 400 18px/1.5 'Open Sans',' Helvetica Neue', Arial, sans-serif;
    text-align: center;
    max-width: 960px;
    margin: 30px auto 0;
  }
  
  > div {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }
  
  svg {
    position: absolute;
    width: 30px;
    height: 30px;
    left: calc(50% - 50px);
    bottom: 30px;
    transform: rotate(90deg);
    border-radius: 100%;
    cursor: pointer;
    padding: 10px;
    transition: box-shadow 200ms linear;
    outline: 0;
    
    &:hover,
    &:focus {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
  }
`
