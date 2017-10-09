import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  background: #fff;

  ${bp('ts')`
    height: auto;
    padding: 50px 0;
  `}
`
