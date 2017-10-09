import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FadeIn from '../FadeIn'
import Input from '../Input'
import Label from '../Label'
import InputMessage from '../InputMessage'
import InputWarning from '../InputWarning'
import Wrapper from './components/Wrapper'

class InputControl extends Component {
  static propTypes = {
    labeled: PropTypes.bool,
    tooltip: PropTypes.element,
    label: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string,
    pattern: PropTypes.string,
    inputPattern: PropTypes.string,
    validation: PropTypes.func,
    caveat: PropTypes.func,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    onPaste: PropTypes.func,
    onBlur: PropTypes.func
  }

  static defaultProps = {
    labeled: false,
    tooltip: null,
    label: '',
    value: '',
    type: 'text',
    pattern: null,
    inputPattern: null,
    validation: null,
    caveat: null,
    readOnly: false,
    onChange: () => null,
    onPaste: () => null,
    onBlur: () => null
  }

  constructor (props) {
    super(props)
    this.id = '_' + Math.random().toString(36).substr(2, 9)
    this.state = {
      labeled: this.props.value.toString().length ? true : this.props.labeled,
      failure: null,
      success: null,
      warning: null,
      classNames: ''
    }
  }

  componentWillMount () {
    if (!this.props.value) {
      return false
    }

    this.validator()
    this.warn()
  }

  componentWillUpdate (nextProps) {
    if (this.props.value === nextProps.value) {
      return false
    }

    this.setState({
      labeled: nextProps.value.toString().length ? true : nextProps.labeled
    })
    this.validator(nextProps.value)
    this.warn(nextProps.value)
  }

  isValid = () => {
    if (!this.props.validation) {
      return true
    }

    const result = this.props.validation(this.props.value)
    return (result === true)
  }

  validator = () => {
    if (!this.props.validation) {
      return false
    }

    const result = this.props.validation(this.props.value)
    this.setState({
      failure: result === true ? null : result,
      success: result === true ? true : null
    })

    return (result === true)
  }

  warn = (value) => {
    if (!this.props.caveat) {
      return false
    }

    const result = this.props.caveat(value || this.props.value)
    this.setState({
      warning: result === true ? null : result
    })

    return (result === true)
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

  onBlur = (e) => {
    const length = e.target.value.toString().length
    const noValidation = !this.props.validation

    this.setState({
      labeled: !!length
    })

    if (noValidation) {
      this.setState({
        success: noValidation && length
      })
    }

    this.props.onBlur({
      value: e.target.value
    })
  }

  onFocus = (e) => {
    this.setState({
      labeled: true
    })
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
      >
        <div>
          <Label htmlFor={this.id}>
            { !this.state.failure && (<FadeIn>{this.props.label}</FadeIn>) }
            { this.props.tooltip }
          </Label>
          <Input
            id={this.id}
            innerRef={ref => (this.ref = ref)}
            type={this.props.type}
            value={this.props.value}
            onChange={this.onChange}
            onPaste={this.props.onPaste}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            pattern={this.props.inputPattern}
            readOnly={this.props.readOnly}
          />
          { this.state.failure && (
            <FadeIn>
              <InputMessage>{ this.state.failure }</InputMessage>
            </FadeIn>
          )}
          { !this.state.failure && this.state.warning && (
            <FadeIn>
              <InputWarning>{ this.state.warning }</InputWarning>
            </FadeIn>
          )}
        </div>
      </Wrapper>
    )
  }
}

export default InputControl
export { Wrapper }
