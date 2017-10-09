import styled from 'styled-components'
import { darken } from 'polished'

export default styled.label`
  position: relative;
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
      color: ${props => darken(0.20, props.theme.primaryColor)};

      &::before {
        transform: scale(1, 1);
      }
    }
  }

  input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border: 0;

    & + span {
      display: inline-block;
      vertical-align: bottom;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      padding: 0 0 0 32px;

      &::after {
        content: ' ';
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        border: 2px solid #cbd1d4;
        border-radius: 16px;
        transition: border-color 200ms ease 0ms;
      }

      &::before {
        content: ' ';
        position: absolute;
        z-index: 2;
        left: 6px;
        top: 6px;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background: ${props => props.theme.form.focusColor};
        transform: scale(0);
        transform-origin: 50% 50%;
        transition: transform 400ms ease;
      }
    }

    &:checked + span {
      &::before {
        transform: scale(1);
      }
    }

    &:focus + span {
      &::after {
        border-color: #48a3d0 !important;
      }
    }
  }
`
