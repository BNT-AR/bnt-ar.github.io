import styled from 'styled-components'
import { bp } from '../../../../styled'

export default styled.div`
padding: 18px 0 0;
    ${bp('ts', 'min-width', +1)`

      text-align: right;
      padding: 0 0 18px 0;
    `}
`
