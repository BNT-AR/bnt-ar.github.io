import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../../../core'
import Wrapper from './components/Wrapper'

function Verifying (props) {
  return (
    <Wrapper transition={props.transition}>
      <div>
        <Loader />
      </div>
    </Wrapper>
  )
}

Verifying.propTypes = {
  transition: PropTypes.bool
}

export default Verifying
