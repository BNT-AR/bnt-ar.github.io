import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  z-index: 7;
  width: 13px;
  height: 13px;
  top: -6px;
  margin: 0 0 0 3px;
  cursor: default;

  > span {
    display: inline-block;
    width: 14px;
    height: 14px;
    color: #fff;
    font-size: 10px;
    line-height: 14px;
    text-align: center;
    background: #f16220;
    border-radius: 14px;

    &:hover,
    &:focus {
      & + div {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
        transition: opacity 500ms ease, transform 500ms ease, visibility 0ms ease 0ms;
      }
    }
  }

  > div {
    position: absolute;
    min-width: 120px;
    left: 28px;
    top: 0;
    font-size: 12px;
    padding: 10px;
    background: #fff;
    border: 1px solid #cecece;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 1px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 500ms ease, transform 500ms ease, visibility 0ms ease 500ms;

    > span {
      display: block;
    }

    &::before {
      content: ' ';
      position: absolute;
      left: -10px;
      top: 6px;
      width: 0;
      height: 0;
      border-top: 0 solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid #cecece;
    }

    &::after {
      content: ' ';
      position: absolute;
      left: -8px;
      top: 7px;
      width: 0;
      height: 0;
      border-top: 0 solid transparent;
      border-bottom: 8px solid transparent;
      border-right: 8px solid #fff;
    }
  }
`
