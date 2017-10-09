import styled from 'styled-components'

export default styled.button.attrs({
  type: 'submit'
})`
  display: inline-block;
  zoom: 1;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -moz-user-drag: none;
  user-select: none;
  box-sizing: border-box;
  padding: 0 1.6em;
  color: #fff;
  min-width: 200px;
  height: 56px;
  font-size: 15px;
  text-decoration: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  background-color: #a8a8a8;
  border: none;
  opacity: 1;
  transition: background 200ms ease 0ms, opacity 400ms ease;

  span {
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:hover,
  &:focus {
    background-color: #828282;
  }

  &:focus {
    outline: unset;
  }

  &:active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0 6px rgba(0, 0, 0, 0.2) inset;
  }

  &[disabled] {
    opacity: 0.5;

    &:hover,
    &:focus {
      background: #f16220;
    }
  }
`
