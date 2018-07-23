import styled from 'styled-components'
import imgError from './warning.svg'
import { bp } from '../../../../../../../core/styled/helpers'

export default styled.div`
  margin-top: 15px;

  .showMessage {
    transform: transition 4s all;
  }

  .fadeInClass {
    opacity: 1;
  }

  .errorIcon {
    background-image: url('${imgError}');
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 165px;

    ${bp('md')`
      background-position: 95%;
    `}
  }

  input,
  textarea,
  button {
    font-family: 'calluna-sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    display: block;
    box-shadow: 0 0 2px black;
  }

  input,
  textarea {
    width: 85%;
    border: 0;
    margin-bottom: 20px;
    background-color: #fff;
    height: 30px;
    transition: border-color 400ms ease-in-out;

    ${bp('md')`
      width: 93%;
      margin: 10px;
    `}

    ${bp('sm')`
      width: 91%;
    `}
  }

  textarea {
    overflow: hidden;
    resize: none;
    transition: height 200ms ease;
  }

  input {
    padding: 5px 10px;
  }

  button {
    border: 2px solid #196e8e;
    padding: 8px 15px;
    text-align: center;
    background-color: #196e8e;
    color: #fff;
    width: 98%;
    height: 38px;
    cursor: pointer;
    transition: all 400ms ease-in-out;

    ${bp('md')`
      width: 96%;
      margin: 10px;
    `}

    &:hover,
    &:active,
    &:focus {
      background-color: #166482;
      border: 2px solid #166482;
      color: #fff;
      outline: unset;
    }
  }

  form > div > div {
    position: relative;
  }
`
