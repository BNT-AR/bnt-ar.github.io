import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Actions from './components/Actions'
import Close from './components/Close'
import Container from './components/Container'
import Wrapper from './components/Wrapper'
import Content from './components/Content'
import PrimaryButton from '../PrimaryButton'
import SecondaryButton from '../SecondaryButton'

class Modal extends Component {
  static propTypes = {
    show: PropTypes.bool,
    children: PropTypes.element,
    width: PropTypes.string,
    height: PropTypes.string,
    maxHeight: PropTypes.string,
    closeVisible: PropTypes.bool,
    onCloseClick: PropTypes.func,
    onOutsideClick: PropTypes.func,
    actions: PropTypes.shape({
      visible: PropTypes.string,
      primaryButton: PropTypes.shape({
        visible: PropTypes.bool,
        props: PropTypes.object,
        children: PropTypes.string
      }),
      secondaryButton: PropTypes.shape({
        visible: PropTypes.bool,
        props: PropTypes.object,
        children: PropTypes.string
      })
    })
  }

  static defaultProps = {
    show: false,
    children: null,
    width: null,
    height: null,
    maxHeight: null,
    closeVisible: true,
    onCloseClick: () => null,
    onOutsideClick: () => null,
    actions: {
      visible: false,
      primaryButton: {
        visible: false,
        props: {},
        children: 'Continue'
      },
      secondaryButton: {
        visible: false,
        props: {},
        children: 'Cancel'
      }
    }
  }

  render () {
    return (
      <Wrapper
        show={this.props.show}
        onClick={this.props.onOutsideClick}
      >
        <Content
          width={this.props.width}
          onClick={(e) => e.stopPropagation()}
          hasActions={this.props.actions.visible}
          primaryButtonVisible={this.props.actions.primaryButton.visible}
          secondaryButtonVisible={this.props.actions.secondaryButton.visible}
        >
          {this.props.closeVisible && (
            <Close onClick={this.props.onCloseClick} tabIndex='0'>
              <svg xmlns='http://www.w3.org/2000/svg' width='477.866' height='477.866' viewBox='273.066 273.066 477.866 477.866'>
                <path d='M535.893 512l209.92-209.92c6.827-6.827 6.827-17.067 0-23.893-6.826-6.826-17.065-6.827-23.893 0L512 488.107l-209.92-209.92c-6.827-6.827-17.067-6.827-23.893 0-6.827 6.826-6.827 17.066 0 23.893L488.107 512l-209.92 209.92c-6.827 6.827-6.827 17.067 0 23.893 3.413 3.414 8.533 5.12 11.946 5.12s8.534-1.706 11.947-5.12L512 535.893l209.92 209.92c3.413 3.414 8.533 5.12 11.947 5.12s8.533-1.706 11.945-5.12c6.827-6.825 6.827-17.065 0-23.893L535.892 512z' />
              </svg>
            </Close>
          )}
          <Container
            height={this.props.height}
            maxHeight={this.props.maxHeight}
            hasActions={this.props.actions.visible}
            primaryButtonVisible={this.props.actions.primaryButton.visible}
            secondaryButtonVisible={this.props.actions.secondaryButton.visible}
          >
            { this.props.children }
          </Container>
          { this.props.actions.visible && (
            <Actions>
              { this.props.actions.primaryButton.visible && this.props.actions.secondaryButton.visible && (
                <div className={'pure-g'}>
                  <div className={'pure-u-1-2 pure-u-ts-1'}>
                    <PrimaryButton type={'button'} {...this.props.actions.primaryButton.props}>
                      {this.props.actions.primaryButton.children}
                    </PrimaryButton>
                  </div>
                  <div className={'pure-u-1-2 pure-u-ts-1'}>
                    <SecondaryButton type={'button'} {...this.props.actions.secondaryButton.props}>
                      {this.props.actions.secondaryButton.children}
                    </SecondaryButton>
                  </div>
                </div>
              )}

              { this.props.actions.primaryButton.visible && !this.props.actions.secondaryButton.visible && (
                <div className={'pure-g'}>
                  <div className={'pure-u-1'}>
                    <PrimaryButton type={'button'} {...this.props.actions.primaryButton.props}>
                      {this.props.actions.primaryButton.children}
                    </PrimaryButton>
                  </div>
                </div>
              )}

              { !this.props.actions.primaryButton.visible && this.props.actions.secondaryButton.visible && (
                <div className={'pure-g'}>
                  <div className={'pure-u-1'}>
                    <SecondaryButton type={'button'} {...this.props.actions.secondaryButton.props}>
                      {this.props.actions.secondaryButton.children}
                    </SecondaryButton>
                  </div>
                </div>
              )}
            </Actions>
          )}
        </Content>
      </Wrapper>
    )
  }
}

export default Modal
