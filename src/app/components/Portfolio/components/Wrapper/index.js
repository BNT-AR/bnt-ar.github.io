import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  position: relative;
  min-height: 100vh;
  padding: 50px;
  background: #fff;

  ${bp('md')`
    padding: 30px;
  `}

  .pure-g {
    max-width: 990px;
    margin: 0 auto;

    .pure-u-1 img {
      width: 100%;
    }

    ${bp('ts')`
      max-width: none;
      width: calc(100% + 30px);
      position: relative;
      left: -15px;
    `}

    > div {
      box-sizing: border-box;
      padding: 15px;
      text-align: left;
      ${bp('ts')`
        padding: 0 15px;
      `}
    }
  }
`
