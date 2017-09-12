import React, { Component } from 'react'
import Wrapper from './../Form/components/Wrapper'
import axios from 'axios'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      thankyouVisible: false,
      errorName: false,
      errorEmail: false,
      errorMessage: false
    }
  }

  handleName = (e) => {
    this.setState({name: e.target.value})
    console.log(e.target.value)
    if(!e.target.value) {
      this.setState({ errorName: true })
    }
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value})
    if(!e.target.value) {
      this.setState({ errorEmail: true })
    }
  }

  handleMessage = (e) => {
    this.setState({message: e.target.value})
    if(!e.target.value) {
      this.setState({ errorMessage: true })
    }
  }

  submit = (e) => {
    e.preventDefault()

    if(!this.state.name){
      this.setState({ errorName: true })
    }else{
      this.setState({ errorName: false })
    }
    if(!this.state.email){
      this.setState({ errorEmail: true })
    }else{
      this.setState({ errorEmail: false })
    }
    if(!this.state.message){
      this.setState({ errorMessage: true })
    }else{
      this.setState({ errorMessage: false })
    }

    if(!this.state.name || !this.state.email || !this.state.message){
      return false;
    }

    axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL + '/contact',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    .then(response => {
      this.setState({
        thankyouVisible: true
      })

      setTimeout(() => {
        this.setState({
          thankyouVisible: false
        })
      }, 5000)
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    })
  }

  render () {
    return (
      <Wrapper>
        <form onSubmit={this.submit}>
          <div className={'showThankYou ' + (this.state.thankyouVisible ? 'fadeInClass' : '')}>
            <div>
              <p>Thank you for your message.</p>
              <p>We will get in touch with you soon.</p>
            </div>
          </div>
          <input type='text' placeholder='Your Name' defaultValue={this.state.name} onChange={this.handleName} className={(this.state.errorName ? 'errorIcon' : '')} required />
          <input type='email' placeholder='E-mail' defaultValue={this.state.email} onChange={this.handleEmail} className={(this.state.errorEmail ? 'errorIcon' : '')} required />
          <textarea placeholder='Message' defaultValue={this.state.message} onChange={this.handleMessage} className={(this.state.errorMessage ? 'errorIcon' : '')} required />
          <button type='submit'>Send</button>
        </form>
      </Wrapper>
    )
  }
}

export default Form
