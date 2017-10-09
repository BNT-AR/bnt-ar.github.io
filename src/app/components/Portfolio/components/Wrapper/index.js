import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

export default styled.div`
  position: relative;
  min-height: 100vh;
  padding: 50px 0;
  background: #fff;

  ${bp('ts')`
    max-width: 500px;
    margin: 60px auto;
    padding: 0 30px;
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
    }
  }
`
