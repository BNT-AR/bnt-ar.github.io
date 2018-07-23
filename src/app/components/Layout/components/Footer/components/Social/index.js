import styled from 'styled-components'
import { bp } from '../../../../../../../core/styled/helpers'

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  ${bp('sm')`
    flex-direction: column;
  `}

  > a {
    cursor: pointer;
    padding: 5px 10px;

    > img {
      width: 20px;
      height: 20px;
    }
  }
`
