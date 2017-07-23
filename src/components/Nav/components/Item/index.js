import styled from 'styled-components'

export default styled.div`
  display: inline-block;
  padding: 1em 2.4em;
  font-size: 15px;
  color: #fff;
  border: 1px solid ${props => props.bordered ? '#fff' : 'transparent'};
  border-radius: 1px;
  cursor: pointer;
  ${props => props.bordered && `
    margin: 0 0 0 1.2em;
  `}
`
