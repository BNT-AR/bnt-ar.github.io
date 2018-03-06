import styled from 'styled-components'
import imgError from './error.svg'

export default styled.div`
  .showMessage {
    color: #fff;
    transform: transition 4s all;
  }

  .fadeInClass {
    opacity: 1;
  }

  .errorIcon {
    background-image: url('${imgError}');
    background-repeat: no-repeat;
    background-position: 310px 8px;
    background-size: 15px;
  }

  input,
  textarea,
  button {
    font-family: 'calluna-sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    display: block;
  }

  input,
  textarea {
    width: 98%;
    border: 0;
    border-radius: 2px;
    padding-left: 2%;
    padding-right: 0;
    padding-bottom: 0;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    background-color: inherit;
    color: #fff;
    height: 30px;
    transition: border-color 400ms ease-in-out;

    &:focus {
      outline: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 1);
    }

    &::-webkit-input-placeholder {
      color: #fff;
    }

    &::-moz-placeholder {
      color: #fff;
    }

    &::-moz-placeholder {
      color: #fff;
    }

    &::-ms-input-placeholder {
      color: #fff;
    }
  }

  textarea {
    overflow: hidden;
    resize: none;
    transition: height 200ms ease;
  }

  input {
    padding-bottom: 2%;
  }

  button {
    border: 2px solid #196e8e;
    padding: 8px 15px;
    text-align: center;
    font-size: 14px;
    background-color: #196e8e;
    color: #fff;
    margin: 20px auto 0;
    width: 50%;
    cursor: pointer;
    transition: all 400ms ease-in-out;

    &:hover,
    &:active,
    &:focus {
      background-color: #166482;
      border: 2px solid #166482;
      color: #fff;
      outline: unset;
    }
  }
`
