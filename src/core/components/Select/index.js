import styled from 'styled-components'

export default styled.select`
  display: inline-block;
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
  width: 100%;
  color: #5b5f66;
  font-size: 14px;
  height: 43px;
  margin: 10px 0;
  padding: 0 16px;
  border: 1px solid #cbd1d4;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  appearance: none;
  background: #fff url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNjNWM1YzUiIGQ9Ik0xNDA4IDcwNHEwIDI2LTE5IDQ1bC00NDggNDQ4cS0xOSAxOS00NSAxOXQtNDUtMTlsLTQ0OC00NDhxLTE5LTE5LTE5LTQ1dDE5LTQ1IDQ1LTE5aDg5NnEyNiAwIDQ1IDE5dDE5IDQ1eiIvPjwvc3ZnPg==') no-repeat 94% 50% / 14px;

  &::-ms-expand {
    display: none;
  }

  &:-moz-focusing {
    color: transparent !important;
    text-shadow: 0 0 0 #000 !important;
  }

  &:focus {
    outline: 0;
    border-color: ${props => props.theme.form.focusColor};
  }

  &[disabled] {
    color: #5b5f66;
    background: #fff;
    cursor: not-allowed;
  }

  &[multiple] {
    height: auto;
  }
`
