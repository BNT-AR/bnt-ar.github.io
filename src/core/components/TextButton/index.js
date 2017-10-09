import styled from 'styled-components'

export default styled.button.attrs({
  type: 'submit'
})`
  display: inline-block;
  zoom: 1;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  -webkit-user-drag: none;
  user-select: none;
  box-sizing: border-box;
  position: relative;
  padding: 0 1.6em;
  color: ${/* sc-prop */ props => props.theme.primaryColor};
  min-width: 200px;
  height: 56px;
  font-size: 15px;
  text-decoration: none;
  background-color: transparent;
  border: none;
  opacity: 1;
  transition: background 200ms ease 0ms, opacity 400ms ease, box-shadow 400ms ease;

  &::before {
    content: ' ';
    position: absolute;
    left: 1.6em;
    bottom: 1em;
    width: calc(100% - 3.2em);
    height: 1px;
    background: ${/* sc-prop */ props => props.theme.primaryColor};
    transform: scale(0, 1);
    transform-origin: 50% 50%;
    transition: transform 300ms ease 0ms;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:hover,
  &:focus {
    &::before {
      transform: scale(1, 1);
    }
  }

  &:focus {
    outline: unset;
  }

  &:active {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15) inset, 0 0 6px rgba(0, 0, 0, 0.2) inset;
  }

  &[disabled] {
    opacity: 0.5;
  }
`
