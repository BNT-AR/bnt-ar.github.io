import React, { Component } from 'react'
import Wrapper from './../Form/components/Wrapper'
import axios from 'axios'
import autosize from 'autosize'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showForm: false,
      errorName: false,
      errorEmail: false,
      errorMessage: false,
      submitting: false
    }
  }

  componentDidMount () {
    var ta = document.querySelector('#messageArea')
    autosize(ta)
  }

  //
  nameChange = (e) => {
    this.setState({name: e.target.value})
    if (!e.target.value) {
      this.setState({errorName: true})
    } else {
      this.setState({errorName: false})
    }
  }

  emailChange = (e) => {
    this.setState({email: e.target.value})
    if (!e.target.value) {
      this.setState({errorEmail: true})
    } else {
      this.setState({errorEmail: false})
    }
  }

  messageChange = (e) => {
    this.setState({message: e.target.value})
    if (!e.target.value) {
      this.setState({errorMessage: true})
    } else {
      this.setState({errorMessage: false})
    }
  }

  submit = (e) => {
    e.preventDefault()

    // changes the content of the button from 'Submit' to 'Sending'
    this.setState({submitting: true})

    //  email validation
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)

    //  empty fields validations
    if (!this.state.name) {
      this.setState({errorName: true})
    } else {
      this.setState({errorName: false})
    }
    if (!this.state.email || !validEmail) {
      this.setState({errorEmail: true})
    } else {
      this.setState({errorEmail: false})
    }
    if (!this.state.message) {
      this.setState({errorMessage: true})
    } else {
      this.setState({errorMessage: false})
    }

    if (!this.state.name || !this.state.email || !this.state.message || !validEmail) {
      this.setState({submitting: false})
      return false
    }

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios({ method: 'post', url: process.env.REACT_APP_API_URL + '/contact', data })
      .then(response => {
        this.setState({
          showForm: true,
          success: true,
          submitting: false
        })
      })
      .catch(() => {
        this.setState({
          success: false,
          showForm: false,
          submitting: false
        })
      })
  }

  render () {
    return (
      <Wrapper>
        {this.state.showForm ? (
          <div className={'showMessage fadeInClass'}>
            <p>
              {(this.state.success) ? 'Thank you for your message.\n We will get in touch with you soon.' : 'There has been an error. Please try again in a couple of minutes.'
              }
            </p>
          </div>
        ) : (
          <form onSubmit={this.submit} noValidate>
            <input
              type='text'
              placeholder='Your name'
              defaultValue={this.state.name}
              onChange={this.nameChange}
              className={(this.state.errorName ? 'errorIcon' : '')} />
            <input
              type='email'
              placeholder='example@email.com'
              defaultValue={this.state.email}
              onChange={this.emailChange}
              className={(this.state.errorEmail ? 'errorIcon' : '')} />
            <textarea
              id={'messageArea'}
              placeholder='Drop us a line'
              defaultValue={this.state.message}
              onChange={this.messageChange}
              className={(this.state.errorMessage ? 'errorIcon' : '')} />
            <button type='submit'>
              {this.state.submitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        )}
      </Wrapper>
    )
  }
}

export default Form
