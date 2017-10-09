import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Icon = ({className, image, title, titleColor}) => (
  <div className={className}>
    <img src={image} alt='' />
    { title && <span style={{'color': titleColor}}>{ title }</span> }
  </div>
)

Icon.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string
}

export default styled(Icon)`
  height: 35px;
  margin: 30px 0;

  img {
    display: inline-block;
    vertical-align: middle;
    height: 35px;
  }

  span {
    display: inline-block;
    vertical-align: middle;
    color: #666;
    line-height: 35px;
    margin: 0 0 0 8px;
  }
`
