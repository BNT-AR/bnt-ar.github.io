import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  padding: 10px 0;

  ${bp('ts', 'min-width', +1)`
    text-align: right;
    padding: 18px 0 18px 0;
  `}
`
