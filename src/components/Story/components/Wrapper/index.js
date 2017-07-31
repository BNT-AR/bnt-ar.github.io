import styled from 'styled-components'
import { bp } from '../../../../styled'

export default styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  
  ${bp('ts')`
    height: auto;
    padding: 50px 0;
  `}
`
