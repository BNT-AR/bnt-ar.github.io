import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { bp } from '../../../../../core/styled/helpers'

const Logo = ({className, title}) => (
  <div className={className}>
    <div />
    <span>{ title }</span>
  </div>
)

Logo.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default styled(Logo)`
  margin: 30px 0;

  > div {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: url(${props => props.image}) no-repeat 50% 50% / contain;

    ${bp('ts')`
      width: 70px;
      height: 70px;
    `}
  }

  span {
    display: block;
    color: #999;
    font-size: 14px;
    text-align: center;
    margin: 10px 0 0;
  }
`
