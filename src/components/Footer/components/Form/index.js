import React, { Component } from 'react'
import Wrapper from './../Form/components/Wrapper'
import axios from 'axios'

class Form extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      thankyouVisible: false
    };
  }

  handleName = (e) => {
    this.setState({name: e.target.value});
  }

  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }

  handleMessage = (e) => {
    this.setState({message: e.target.value});
  }

  submit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL + '/contact',
      data: {
        name: this.state.name,
        email: this.state.email,
        textarea: this.state.message
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
      console.log('Error fetching and parsing data', error);
    });
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
          <input type="text" placeholder="Your Name" defaultValue={this.state.name} onChange={this.handleName} />
          <input type="email" placeholder="E-mail" defaultValue={this.state.email} onChange={this.handleEmail} />
          <textarea placeholder="Message" defaultValue={this.state.message} onChange={this.handleMessage} />
          <button type="submit">Send</button>
        </form> 
      </Wrapper>
    )
  }
}

export default Form
