import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputMessage from '../InputMessage'
import Wrapper from './components/Wrapper'
import Radio from './components/Radio'

class InputRadio extends Component {
  static propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    validation: PropTypes.func,
    onChange: PropTypes.func
  }

  static defaultProps = {
    label: '',
    name: '',
    value: '',
    checked: null,
    validation: null,
    onChange: () => null
  }

  constructor (props) {
    super(props)

    this.state = {
      label: this.props.label,
      failure: null,
      success: null
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.checked === prevProps.checked) {
      return false
    }
    this.validator()
  }

  isValid = () => {
    if (!this.props.validation) {
      return true
    }

    const result = this.props.validation(this.props.checked)
    return (result === true)
  }

  validator = () => {
    if (!this.props.validation) {
      return false
    }

    const result = this.props.validation(this.props.checked)
    this.setState({
      failure: result === true ? null : result,
      success: result === true ? true : null
    })

    return result
  }

  onChange = (e) => {
    this.props.onChange({
      value: e.target.value
    })
  }

  onBlur = (e) => {
    this.validator()
  }

  getInput = () => {
    return this.ref
  }

  render () {
    return (
      <Wrapper success={this.state.success}>
        <div>
          <Radio>
            <input
              ref={ref => (this.ref = ref)}
              type='radio'
              value={this.props.value}
              name={this.props.name}
              checked={this.props.checked}
              onChange={this.onChange}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
            />
            <span>
              { this.props.label }
              { this.state.label && this.props.validation && (
                <em>{ this.state.success ? '✔' : '*' } </em>
              )}
            </span>
          </Radio>
          { this.state.failure && (
            <InputMessage>{ this.state.failure }</InputMessage>
          )}
        </div>
      </Wrapper>
    )
  }
}

export default InputRadio
