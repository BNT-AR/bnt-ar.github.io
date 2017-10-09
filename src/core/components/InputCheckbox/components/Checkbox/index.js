import styled, { keyframes } from 'styled-components'
import { darken } from 'polished'

const CheckboxIn = (props) => keyframes`
  0% {
    width: 0;
    height: 0;
    border-color: transparent;
  }

  1% {
    border-color: ${props.theme.form.focusColor};
  }

  50% {
    width: 10px;
    height: 0;
  }

  100% {
    width: 10px;
    height: 20px;
    border-color: ${props.theme.form.focusColor};
  }
`

const CheckboxOut = (props) => keyframes`
  0% {
    width: 10px;
    height: 20px;
    border-color: ${props.theme.form.focusColor};
  }

  50% {
    width: 10px;
    height: 0;
  }

  99% {
    border-color: ${props.theme.form.focusColor};
  }

  100% {
    width: 0;
    height: 0;
    border-color: transparent;
  }
`

export default styled.label`
  position: relative;
  z-index: 1;
  font-weight: 400;
  margin: 0;
  padding: 0;
  user-select: none;
  cursor: pointer;

  a {
    position: relative;
    display: inline-block;
    color: ${props => props.theme.primaryColor};
    text-decoration: none;
    transition: color 300ms ease;

    &::before {
      content: ' ';
      position: absolute;
      z-index: 1;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 1px;
      background: ${props => props.theme.primaryColor};
      transform: scale(0, 0);
      transition: transform 300ms ease 0ms;
    }

    &:hover,
    &:focus {
      color: ${props => darken(0.10, props.theme.primaryColor)};

      &::before {
        transform: scale(1, 1);
      }
    }
  }

  input {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border: 0;

    & + span {
      display: block;
      vertical-align: middle;
      min-height: 20px;
      font-size: 13px;
      line-height: 1.2;
      font-weight: 400;
      padding: 2px 0 0 32px;

      &::after {
        content: ' ';
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #cbd1d4;
        border-radius: 1px;
        transition: border-color 200ms ease 0ms;
      }

      &::before {
        content: ' ';
        position: absolute;
        z-index: 2;
        left: -1px;
        top: 11px;
        transform: scaleX(-1) rotate(140deg);
        transform-origin: 0 0;
        animation: forwards ${props => CheckboxOut(props)} 200ms ease-in;
        border-top: 2px solid transparent;
        border-right: 2px solid transparent;
      }
    }

    &:checked + span {
      &::before {
        animation: forwards ${props => CheckboxIn(props)} 200ms ease-in;
      }
    }

    &:focus + span {
      &::after {
        border-color: #48a3d0;
      }
    }
  }
`
