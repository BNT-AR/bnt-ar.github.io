import React, { Component } from 'react'
import H1 from '../../../components/H1'
import H2 from '../../../components/H2'
import P from '../../../components/P'

import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 50px 10vw;
  background-color: #fff;
  
  ${H2 /* sc-sel */} {
    margin: 1em 0;
  }

  ${P /* sc-sel */} {
    margin: 0 0 0.5em;
  }
`

const ColorBar = styled.div`
  height: 125px;
`

const Form = styled.form`
  input,
  textarea,
  button {
    font-family: 'calluna-sans', 'Helvetica Neue', Arial, sans-serif;
    font-size: 14px;
    display: block;
    box-shadow: 0 0 2px black;
  }

  input,
  textarea {
    width: 100%;
    display: block;
    box-sizing: border-box;
    border: 0;
    padding: 5px 10px;
    margin-bottom: 20px;
    background-color: #fff;
    font-size: 18px;
    line-height: 1.5;
    transition: border-color 400ms ease-in-out;
  }

  textarea {
    resize: none;
  }

  button {
    width: 100%;
    display: block;
    border: 2px solid #196e8e;
    padding: 8px 15px;
    text-align: center;
    background-color: #196e8e;
    color: #fff;
    font-size: 18px;
    line-height: 1.5;
    cursor: pointer;
    transition: all 400ms ease-in-out;

    &:hover,
    &:active,
    &:focus {
      background-color: #166482;
      border: 2px solid #166482;
      color: #fff;
      outline: unset;
    }
  }
`

class Jobs1 extends Component {
  render () {
    return (
      <div>
        <ColorBar />
        <Wrapper className='pure-g'>
          <div className='pure-u-1'>
            <H1>Fullstack Engineer - Laravel</H1>
          </div>
          <div className='pure-u-1-2'>
            <H2>You</H2>
            <P>Have wide experience in Laravel.</P>
            <P>Have experience in Vue or React.</P>
            <P>Write and maintain Docker images, containers, etc.</P>
            <P>Are able to work in either UTC-3 or UTC-5 timezones.</P>
            <P>Love to build beautiful and clean code.</P>
            <P>Fluent in English, written and spoken.</P>

            <H2>We</H2>
            <P>Love Laravel, React, and AWS.</P>
            <P>Use GitHub, CircleCI, and Trello.</P>
            <P>Are an Agile-based team of highly skilled developers.</P>

            <H2>Roles</H2>
            <P>Laravel to write APIs, Commands, Jobs, etc.</P>
            <P>Design and implement technical solutions.</P>
            <P>Are an Agile-based team of highly skilled developers.</P>
          </div>
          <div className='pure-u-1-2'>
            <Form>
              <H2>Work with us.</H2>
              <input type='text' placeholder='Name' />
              <input type='email' placeholder='Email' />
              <textarea rows={5} placeholder='Cover Letter' />
              <button type='submit'>Submit</button>
            </Form>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default Jobs1
