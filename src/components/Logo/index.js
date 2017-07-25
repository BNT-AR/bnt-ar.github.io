import React from 'react'
import styled from 'styled-components'

const Logo = (props) => (
  <div className={props.className}>
    Brave New
    <span>Technology</span>
  </div>
)

export default styled(Logo)`
  display: inline-block;
  color: #fff;
  font: 700 24px/1 'Merriweather', serif;
  text-align: center;
  letter-spacing: 1px;
  span {
    display: block;
    font-size: 22px;
  }
`
