import styled from 'styled-components'
import {bp} from '../../../../styled/helpers'

export default styled.div`
  ${props => props.width && `
    width: ${props.width};
  `}

  position: relative;
  padding: 40px 10px;
  border-radius: 2px;
  background: #fff;

  ${props => props.hasActions && `
    padding-bottom: 75px;
  `}

  ${bp('ts')`
    ${props => props.hasActions && props.primaryButtonVisible && props.secondaryButtonVisible && `
      padding-bottom: 135px;
    `}
  `}

  ${props => props.width && `
    @media(max-width: ${props.width}) {
      width: calc(100% - 30px);
      max-width: ${props.width};
    }
  `}
`
