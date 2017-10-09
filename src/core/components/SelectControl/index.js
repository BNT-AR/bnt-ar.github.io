import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from '../Select'
import Label from '../Label'
import InputMessage from '../InputMessage'
import { Wrapper } from './../InputControl'

class SelectControl extends Component {
  static propTypes = {
    labeled: PropTypes.bool,
    tooltip: PropTypes.element,
    label: PropTypes.string,
    value: PropTypes.string,
    pattern: PropTypes.string,
    disabled: PropTypes.bool,
    validation: PropTypes.func,
    options: PropTypes.array,
    onChange: PropTypes.func
  }

  static defaultProps = {
    labeled: false,
    tooltip: null,
    label: '',
    value: '',
    pattern: null,
    disabled: null,
    validation: null,
    options: [],
    onChange: () => null
  }

  constructor (props) {
    super(props)

    this.id = '_' + Math.random().toString(36).substr(2, 9)
    this.state = {
      labeled: this.props.value.toString().length ? true : this.props.labeled,
      failure: null,
      success: null,
      classNames: ''
    }
  }

  componentWillMount () {
    if (!this.props.value) {
      return false
    }

    this.validator()
  }

  componentWillUpdate (nextProps) {
    if (this.props.value === nextProps.value) {
      return false
    }

    this.setState({
      labeled: nextProps.value.toString().length ? true : nextProps.labeled
    })
    this.validator(nextProps.value)
  }

  isValid = () => {
    if (!this.props.validation) {
      return true
    }

    const result = this.props.validation(this.props.value)
    return (result === true)
  }

  validator = (value) => {
    if (!this.props.validation) {
      return false
    }

    const result = this.props.validation(value || this.props.value)
    this.setState({
      failure: result === true ? null : result,
      success: result === true ? true : null
    })

    return result
  }

  onChange = (e) => {
    const re = this.props.pattern ? new RegExp(this.props.pattern) : null
    if (re && e.target.value.length > 0 && !re.test(e.target.value)) {
      return false
    }

    this.validator()
    this.props.onChange({
      value: e.target.value
    })
  }

  handleBlur = (value) => {
    const length = value.length
    const noValidation = !this.props.validation

    if (noValidation) {
      this.setState({
        success: noValidation && length
      })
    }

    this.setState({
      labeled: !!length
    })
  }

  onBlur = (e) => {
    this.handleBlur(e.target.value.toString())
  }

  onFocus = (e) => {
    this.setState({
      labeled: true
    })
  }

  onMouseEnter = (e) => {
    this.onFocus()
  }

  onMouseLeave = (e) => {
    this.handleBlur(this.ref.value.toString())
  }

  getInput = () => {
    return this.ref
  }

  render () {
    return (
      <Wrapper
        focus={this.state.labeled}
        failure={this.state.failure}
        success={this.state.success}
        tooltip={this.props.tooltip}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div>
          <Label htmlFor={this.id}>
            { this.props.label }
            { this.props.label && this.props.validation && (
              <span>{ this.state.success ? '✔' : '*' } </span>
            )}
            { this.props.tooltip }
          </Label>
          <Select
            id={this.id}
            innerRef={ref => (this.ref = ref)}
            value={this.props.value}
            onChange={this.onChange}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            disabled={this.props.disabled}
          >
            { this.props.options.map((option, i) => (
              <option
                key={i}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </Select>
          { this.state.failure && (
            <InputMessage>{ this.state.failure }</InputMessage>
          )}
        </div>
      </Wrapper>
    )
  }
}

export default SelectControl
