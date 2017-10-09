import { css } from 'styled-components'

export default css`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  color: ${props => props.theme.form.inputColor};
  font-size: 14px;
  line-height: 1;
  margin: 10px 0;
  border-color: ${props => props.theme.form.passiveColor};
  border: 1px solid ${props => props.theme.form.passiveColor};
  border-radius: 3px;
  padding: 8px 20px 0;
  box-sizing: border-box;
  box-shadow: none;
  transition: border-color 300ms ease, color 300ms ease;
  height: 56px;

  &:focus {
    border-color: ${props => props.theme.form.focusColor};
    outline: 0;
  }

  &[disabled] {
    cursor: not-allowed;
    background-color: #eaeded;
    color: #cad2d3;
  }

  &[readonly] {
    background-color: #eee;
    border-color: ${props => props.theme.form.passiveColor};
  }
`
