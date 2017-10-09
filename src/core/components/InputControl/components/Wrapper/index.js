import styled from 'styled-components'
import Input from '../../../Input'
import Select from '../../../Select'
import Label from '../../../Label'
import InputMessage from '../../../InputMessage'
import InputWarning from '../../../InputWarning'
import InfoTooltip from '../../../InfoTooltip'

export default styled.div`
  > div {
    position: relative;
    z-index: ${props => (props.tooltip || props.focus) ? '2' : '1'};
  }

  ${Label /* sc-sel */ } {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    transform: translate(20px, 22px);
    box-sizing: border-box;
    transition: transform 300ms ease, font-size 300ms ease;
    user-select: none;
    cursor: text;
    border-radius: 2px;

    ${props => props.focus && `
      font-size: 10px;
      transform: translate(22px, 12px);
    `}
  }

  ${Input /* sc-sel */ } {
    margin: 0;
    ${props => props.failure && `
      border-color: ${props.theme.form.failureColor};
    `}
    ${props => props.success && `
      border-color: ${props.theme.form.successColor};
    `}
  }

  ${Select /* sc-sel */ } {
    margin: 0;
    ${props => props.failure && `
      border-color: ${props.theme.form.failureColor};
    `}
    ${props => props.success && `
      border-color: ${props.theme.form.successColor};
    `}
  }

  ${InputMessage /* sc-sel */ } {
    position: absolute;
    top: 12px;
    left: 22px;
    padding: 0;
  }

  ${InputWarning /* sc-sel */ } {
    position: absolute;
    left: 0;
    top: 100%;
    padding: 1px 0 0;
  }

  ${InfoTooltip /* sc-sel */ } {
    top: -2px;
  }
`
