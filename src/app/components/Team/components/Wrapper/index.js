import styled from 'styled-components'

import { bp } from '../../../../../core/styled/helpers'
import H1 from '../../../H1'

export default styled.div`
  background: #fff;
  ${bp('ts', 'min-width', +1)`
    text-align: center;
  `}

  > div {
    position: relative;
    padding: 50px 0;

    ${bp('ts')`
      max-width: 500px;
      margin: 0 auto;
      padding: 50px 30px;
    `}
  }

  ${H1 /* sc-sel */ } {
    &::before {
      ${bp('ts', 'min-width', +1)`
        left: 35%;
        width: 30%;
      `}
    }
  }

  .pure-g {
    max-width: 990px;
    margin: 0 auto;

    ${bp('ts')`
      max-width: none;
      width: calc(100% + 30px);
      position: relative;
      left: -15px;
    `}

    > div {
      box-sizing: border-box;
      padding: 15px;
    }
  }
`
