import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Picture from './components/Picture'
import Description from './components/Description'
import LinkedInLogo from '../../assets/linkedin.svg'

const Member = ({className, linkedIn, image, name, title, description}) => (
  <a className={className} href={linkedIn} target='_blank'>
    <Picture image={image} />
    <Description>
      <span>{ name }</span>
      <strong>{ title }</strong>
      <em>{ description }</em>
    </Description>
  </a>
)

Member.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  linkedIn: PropTypes.string,
  description: PropTypes.string
}

export default styled(Member)`
  position: relative;
  display: block;
  color: #000;
  text-decoration: none;

  &::before {
    content: ' ';
    position: absolute;
    z-index: 3;
    top: 8px;
    right: 8px;
    width: 16px;
    height: 16px;
    background: #fff url(${LinkedInLogo}) no-repeat 50% 50% / cover;
    border-radius: 2px;
    opacity: 0.5;
    transform: scale(0);
    transition: transform 300ms ease;
  }

  &:hover,
  &:focus {
    &::before {
      transform: scale(1);
    }
  }
`
