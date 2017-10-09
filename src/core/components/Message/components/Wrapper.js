import styled from 'styled-components'
import { darken } from 'polished'

export default styled.div`
  font-size: 12px;
  padding: 10px;
  border-radius: 1px;
  background: #eee;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border: 0;
    }
  }

  p {
    margin: 0;
    padding: 0;
    background: inherit;
  }

  ${props => props.info && `
    background: #eee;

    li {
      border-color: ${darken(0.05, '#eeeeee')};
    }

    a {
      color: #5b5f66;
    }
  `}

  ${props => props.error && `
    color: #8b0000;
    background: #ffdfdc;

    li {
      border-color: ${darken(0.05, '#ffdfdc')};
    }

    a {
      color: #8b0000;
    }
  `}

  ${props => props.success && `
    color: green;
    background: #e2f5e2;

    li {
      border-color: ${darken(0.05, '#e2f5e2')};
    }

    a {
      color: green;
    }
  `}
`
