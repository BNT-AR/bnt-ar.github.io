import styled from 'styled-components'
import H1 from '../../../H1'
import P from '../../../P'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  padding: 50px 30px;
  background: #fff;

  ${bp('ts', 'min-width', +1)`
    text-align: center;
  `}

  ${H1 /* sc-sel */ } {
    max-width: 800px;
    margin: 0 auto 1em;
    ${bp('ts')`
      max-width: 500px;
    `}

    &::before {
      ${bp('ts', 'min-width', +1)`
        left: 35%;
        width: 30%;
      `}
    }
  }

  ${P /* sc-sel */ } {
    max-width: 800px;
    margin: 30px auto;
    ${bp('ts')`
      max-width: 500px;
    `}
  }

  .pure-g {
    max-width: 800px;
    margin: 0 auto;

    ${bp('ts')`
      max-width: 560px;
    `}

    ${bp('md')`
      position: relative;
      left: -30px;
      max-width: none;
      width: calc(100% + 60px);
    `}
  }
`
