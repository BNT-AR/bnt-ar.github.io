import styled from 'styled-components'
import P from '../../../P'
import { bp, fontFamily, fadeIn } from '../../../../styled'

export default styled.div`
  position: relative;
  height: 100vh;
  min-height: 510px;
  background: #26a6d6;
  
  ${fadeIn()}
  
  h1 {
    color: #fff;
    font-family: ${fontFamily};
    font-size: 64px;
    font-weight: 400;
    text-align: center;
    line-height: 1.3;
    margin: 0;

    ${bp('ts')`
      font-size: 58px;
    `}

    ${bp('md')`
      font-size: 42px;
    `}
    
    ${bp('sm')`
      font-size: 32px;
      padding: 0 30px;
      br {
        display: none;
      }
    `}
  }
  
  ${P} {
    color: #fff;
    text-align: center;
    max-width: 960px;
    margin: 30px auto 0;
    
    ${bp('ts')`
      max-width: 730px;
      margin: 30px auto;
      padding: 0 30px;
      br {
        display: none;
      }
    `}
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
    left: calc(50% - 25px);
    bottom: 60px;
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
