import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'
import H2 from '../../../H2'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 50px;
  background: #2295c0;
  color: #fff;

  ${H2 /* sc-sel */ } {
    color: #fff;
  }

  ${bp('ts')`
    padding: 50px 0;
  `}

  .pure-g {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${H2 /* sc-sel */ } {
    margin: 0;
  }

  > p {
    max-width: 250px;
  }
`

export const Button = styled.a`
  display: inline-block;
  padding: 1em 2.4em;
  font-size: 15px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 200ms linear, border-color 200ms linear;
  outline: 0;

  &:hover,
  &:focus {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.6);
  }
`
