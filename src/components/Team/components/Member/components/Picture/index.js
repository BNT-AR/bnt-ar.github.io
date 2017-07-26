import styled from 'styled-components'

export default styled.div`
  height: 300px;
  margin: 0 auto;
  background: url(${props => props.image}) no-repeat 50% 0 / cover;
  border-radius: 2px;
`
