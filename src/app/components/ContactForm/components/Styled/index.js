import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'
import H2 from '../../../H2'

export const Wrapper = styled.div`
  position: relative;
  height: 30vh;
  margin: 0 auto;
  padding: 50px;
  background: #2295c0;
  color: #fff;

  ${H2 /* sc-sel */ } {
    color: #fff;
  }

  ${bp('ts')`
    height: auto;
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
