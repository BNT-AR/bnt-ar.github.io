import styled from 'styled-components'

export default styled.a`
  padding: 5px 10px;
  background-color: transparent;
  text-decoration: none;
  color: #26a6d6;
  transition: background-color 400ms ease, color 400ms ease;
  border: 1px solid #26a6d6;
  border-radius: 1px;

  &:hover,
  &:focus {
    color: #FFF;
    background-color: #26a6d6;
  }
`
