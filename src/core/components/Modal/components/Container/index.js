import styled from 'styled-components'
import {bp} from '../../../../styled/helpers'

export default styled.div`

  ${props => props.height && `
    height: ${props.height};
  `}
  ${props => props.maxHeight && `
    max-height: ${props.maxHeight};
    overflow: auto;
  `}

  padding: 0 10px;

  &::before {
    ${props => props.maxHeight && `
      content: ' ';
      position: absolute;
      top: 38px;
      left: 10px;
      height: 2px;
      width: calc(100% - 20px);
      background: #fff;
      box-shadow: 0 0 10px 5px #fff;
    `}
  }

  &::after {
    ${props => props.maxHeight && `
      content: ' ';
      position: absolute;
      bottom: ${props.hasActions ? '73px' : '38px'};
      left: 10px;
      height: 2px;
      width: calc(100% - 20px);
      background: #fff;
      box-shadow: 0 0 10px 5px #fff;
    `}

    ${bp('ts')`
      ${props => props.maxHeight && props.hasActions && props.primaryButtonVisible && props.secondaryButtonVisible && `
        padding-bottom: 133px;
      `}
    `}
  }

  h1 {
    font-weight: 400;
    font-size: 24px;
  }

  h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
  }

  ul,
  ol {
    margin: 20px 0;
    padding: 0 0 0 20px;
  }

  li {
    font-size: 14px;
    line-height: 1.6;
    margin: 10px 0;
  }

  a {
    color: ${props => props.theme.primaryColor};
    transition: color 200ms ease;

    &:hover,
    &:focus {
      color: #1f6dbf;
    }
  }
`
