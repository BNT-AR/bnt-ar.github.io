import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../../../../../core'
import Wrapper from './components/Wrapper'

export default class SplashScreen extends Component {
  static propTypes = {
    visible: PropTypes.bool
  }

  static defaultProps = {
    visible: true
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: true,
      hideTransition: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.visible !== nextProps.visible && nextProps.visible === false) {
      this.setState({hideTransition: true})
      setTimeout(() => {
        this.setState({visible: false})
      }, 600)
    }
  }

  render () {
    if (!this.state.visible) {
      return null
    }

    return (
      <Wrapper hideTransition={this.state.hideTransition}>
        <div className='splash-screen'>
          <div className='splash-screen__logo'>
            <img
              alt=''
              src={'data:image/svg+xml;base64,ICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTYuMTEgMjMuODUnPiAgICAgIDxwYXRoIGZpbGw9JyNmZmYnIGQ9J00uNjEgNy42MWEuNzEuNzEgMCAwIDAgLjcxLS43NFYxLjMyYzAtLjU4LS4wNi0uNy0uODMtLjg4Vi4wNWgzLjE5YzIuMyAwIDMuMTkuOCAzLjE5IDEuNzUgMCAxLjI4LTEuNTggMi0xLjc2IDIgLjg0LjE4IDIuMjIuNjYgMi4yMiAyUzYgOC4wNSAzLjkxIDguMDVILjYxem0zLjE4LS4yOGExLjQzIDEuNDMgMCAwIDAgMS40NS0xLjM0YzAtLjMyLjEyLTEuNjktMS43Mi0xLjY5aC0uMTFsLS4xNy4xNnYyLjIxYTMuNzUgMy43NSAwIDAgMS0uMDYuNjZ6bS4yOC0zLjc1Yy4xMyAwIC43Ni0uMzIuNzYtMS40NSAwLS43OC0uMjQtMS4zNS0xLjE5LTEuMzVoLS4yM2wtLjE3LjE2djIuNjR6TTcuODggNy42NGMuNDEtLjA2LjU5LS4zNS41OS0uNzhWNC4wNWMwLS40OCAwLS43OC0uMzYtLjc4aC0uMzl2LS4zOWExNC4xMSAxNC4xMSAwIDAgMCAyLjY0LS42NCA2IDYgMCAwIDAtLjE4IDEuNDNjLjE3LS4yNS43OS0xLjI5IDEuNzUtMS4yOWEuNzYuNzYgMCAwIDEgLjguODIuODcuODcgMCAwIDEtLjg5Ljg4Yy0uNDQgMC0uNTMtLjI2LS44NC0uMjZhMS42MyAxLjYzIDAgMCAwLS43Mi4yNnYyLjc4YTMuNTMgMy41MyAwIDAgMS0uMDYuNjVsMSAuMTF2LjRsLTMuMzQuMDN6TTE1LjQ3IDQuNzlsLjQyLS4wNmMwLTEgMC0xLjctLjUyLTEuN1MxNC4zIDQuMzggMTQuMyA0LjM4aC0uNjVsLS4zLTEuMTRhNC42IDQuNiAwIDAgMSAyLjczLS44M2MxLjMzIDAgMS42NS40OSAxLjY1IDEuNzF2Mi42N2MwIC4zNS4wNi41Ni4yNi41NmEuODYuODYgMCAwIDAgLjM4LS4xM2wuMjIuMzZhMi4yNSAyLjI1IDAgMCAxLTEuNTUuNjFjLS43MSAwLTEuMTMtLjMtMS4xMy0uNzh2LS4xM2EyLjEyIDIuMTIgMCAwIDEtMS41Ni45MSAxLjM5IDEuMzkgMCAwIDEtMS41LTEuNDJjLjAyLTEuMjIgMS40MS0xLjggMi42Mi0xLjk4em0tLjE4IDIuMzFhMS4yMSAxLjIxIDAgMCAwIC41OS0uMTlWNS4zNWwtLjMuMDZhLjkyLjkyIDAgMCAwLS44NSAxYzAgLjQ4LjI3LjY5LjU2LjY5ek0xOS4wOCAzLjY1YTEuMTYgMS4xNiAwIDAgMC0uNjYtLjd2LS40aDIuNTlhMS4zMiAxLjMyIDAgMCAwIDAgMS4xbC43NyAxLjg1YTcgNyAwIDAgMSAuMjMuNzFsMS4wNi0yLjQxYy4xOS0uNDMgMC0uNzEtLjctLjg1di0uNGgxLjg3bC4wNi4xOWEyIDIgMCAwIDAtLjM2LjY1bC0yLjExIDQuNzktMS0uMTZ6TTI3LjI5IDIuNDJhMiAyIDAgMCAxIDIuMTggMi4yMiA4Ljc5IDguNzkgMCAwIDEtLjkyLjI4bC0yLjI3LjM1LS4xLjE2QTEuNyAxLjcgMCAwIDAgMjggNi45NWEyLjQxIDIuNDEgMCAwIDAgMS4zNC0uNDJsLjE2LjQxYTIuNTcgMi41NyAwIDAgMS0yLjIyIDEuMjYgMi43MiAyLjcyIDAgMCAxLTIuODItMi43OSAyLjkgMi45IDAgMCAxIDIuODMtMi45OXptLTEuMTYgMi4yMWwxLjYzLS4ycy0uMDEtMS4zOC0uNzYtMS4zOGMtLjUxIDAtLjg2LjczLS44NyAxLjU4ek0zMi44MiA3LjYxYy41LS4wNi44LS4zMS44LS43NHYtNWExLjI2IDEuMjYgMCAwIDAtLjktMS40Vi4wNWgyLjA3YTMgMyAwIDAgMCAuNDkuNjJsNC4xIDQuMDhjLjE2LjE2LjM2LjM3LjUuNTVWMS40MWMwLS41MyAwLS44My0xLS45MlYuMDVoMi40NWwuMDYuMjZhMS4xNiAxLjE2IDAgMCAwLS43NyAxLjJ2Ni42SDQwbC01LjA3LTUuMTRjLS4xNy0uMTgtLjM4LS40Mi0uNTMtLjZ2NC41YTMuNTMgMy41MyAwIDAgMS0uMDYuNjVsMS4wOC4wN3YuNDNsLTIuNi4wM3pNNDQuNjUgMi40MmEyIDIgMCAwIDEgMi4xOCAyLjIyIDguNzkgOC43OSAwIDAgMS0uOTIuMjhsLTIuMjcuMzUtLjEuMTZhMS43IDEuNyAwIDAgMCAxLjc5IDEuNTIgMi40MSAyLjQxIDAgMCAwIDEuMzQtLjQybC4xNi40MWEyLjU3IDIuNTcgMCAwIDEtMi4yMiAxLjI2IDIuNzIgMi43MiAwIDAgMS0yLjgyLTIuNzkgMi45IDIuOSAwIDAgMSAyLjg2LTIuOTl6bS0xLjE3IDIuMjFsMS42My0uMnMtLjAxLTEuMzgtLjc1LTEuMzhjLS41MiAwLS44Ny43My0uODggMS41OHpNNDcuNjUgMy42NWExLjA3IDEuMDcgMCAwIDAtLjY1LS43di0uNGgyLjUyYTEuNDMgMS40MyAwIDAgMCAwIDEuMWwuNyAxLjg3YTYuMTEgNi4xMSAwIDAgMSAuMjMuOGwuNjctMS40NmExIDEgMCAwIDAgMC0uODVsLS4xNi0uMzdhMS4xOSAxLjE5IDAgMCAwLS42Mi0uN3YtLjRoMi40OGExLjQzIDEuNDMgMCAwIDAgMCAxLjFsLjcgMS44NmE2LjEyIDYuMTIgMCAwIDEgLjIyLjc3bDEuMTYtMi40NWMuMjUtLjU0LS4xNC0uNzMtLjY2LS44NnYtLjRoMS44MWwuMDYuMTlhMi4yNSAyLjI1IDAgMCAwLS4zNS42NGwtMi4xOSA0LjgtLjg3LS4xNC0xLjA5LTIuNzEtMS4zMSAyLjg0LS45LS4xM3pNMiAyMC44NGEuNzEuNzEgMCAwIDAgLjctLjcxdi01LjU2aC0uOGMtLjY3IDAtMSAuMjEtMS40NiAxLjMxSDBsLjM0LTJhMy41OSAzLjU5IDAgMCAwIC43NC4wN2g1LjQ1YTQuNiA0LjYgMCAwIDAgLjc5LS4wN2wtLjM0IDJoLS40NmMwLTEuMS0uNC0xLjMxLTEuMi0xLjMxaC0uNjlsLS4xNC4xNHY1LjQxYTMuMjMgMy4yMyAwIDAgMS0uMDYuNTlsMS4xLjF2LjRMMiAyMS4yOXpNOS4yNyAxNi4wNWExLjg4IDEuODggMCAwIDEgMiAyIDguMDcgOC4wNyAwIDAgMS0uODUuMjVsLTIuMDguMzItLjA5LjE0YTEuNTYgMS41NiAwIDAgMCAxLjY1IDEuNDggMi4yIDIuMiAwIDAgMCAxLjIzLS4zOGwuMTQuMzdhMi4zNSAyLjM1IDAgMCAxLTIgMS4xNSAyLjQ5IDIuNDkgMCAwIDEtMi41OS0yLjU2IDIuNjYgMi42NiAwIDAgMSAyLjU5LTIuNzd6bS0xLjA3IDJsMS41LS4xOXMwLTEuMjUtLjY5LTEuMjVjLS40Ny4wNy0uNzkuNzMtLjggMS41MXpNMTQuNTIgMTYuMDVjLjY2IDAgMS43OS4yIDEuNzkuOWEuNjEuNjEgMCAwIDEtLjYxLjYzYy0uNjcgMC0uNTktMS0xLjM5LTFzLTEgLjc5LTEgMS42OWMwIDEuMTQuNTUgMS45MSAxLjU4IDEuOTFhMyAzIDAgMCAwIDEuMzItLjM0bC4xMy4zN2EyLjUyIDIuNTIgMCAwIDEtMi4xNyAxLjExIDIuMzkgMi4zOSAwIDAgMS0yLjQyLTIuNDkgMi43NyAyLjc3IDAgMCAxIDIuNzctMi43OHpNMTYuNzQgMjAuODhhLjYyLjYyIDAgMCAwIC41NS0uNzJ2LTUuNWMwLS40NCAwLS43Mi0uMzMtLjcyaC0uMzN2LS4zOGExNC40OCAxNC40OCAwIDAgMCAyLjQ0LS41OSA1IDUgMCAwIDAtLjA3IDEuMjZ2Mi45M2EyLjM1IDIuMzUgMCAwIDEgMS44My0xYy43NiAwIDEuMzQuNDIgMS4zNCAxLjQ5djIuNmEyLjg1IDIuODUgMCAwIDEtLjA2LjU3bC43OS4xMnYuMzZsLTIuOS0uMDF2LS40MWMuMzMtLjA2LjQyLS4zMi40Mi0uNzJ2LTIuMDVjMC0uNzMtLjExLS44OC0uNTQtLjg4YTEuNjQgMS42NCAwIDAgMC0uODguMjF2Mi43M2EzLjIzIDMuMjMgMCAwIDEtLjA2LjU5bC41OC4xdi4zNmwtMi43NC4wN3pNMjMuMjMgMjAuODhjLjM3LS4wNi41NC0uMzIuNTQtLjcyVjE3LjZjMC0uNDQgMC0uNzItLjMzLS43MmgtLjM1di0uMzhhMTUuMTEgMTUuMTEgMCAwIDAgMi40My0uNTcgMy45MSAzLjkxIDAgMCAwLS4xOCAxLjE2IDIuNDYgMi40NiAwIDAgMSAxLjg4LTFjLjc2IDAgMS4zNC40MiAxLjM0IDEuNDl2Mi42YTMgMyAwIDAgMS0uMDYuNThsLjc5LjExdi4zNmwtMi44Mi4wN3YtLjQxYy4zMS0uMDYuNDItLjMyLjQyLS43MnYtMi4wNmMwLS43NS0uMTQtLjg4LS41Ni0uODhhMi4xNCAyLjE0IDAgMCAwLS44Ni4ydjIuNzRhMyAzIDAgMCAxLS4wNi41OGwuNTguMTF2LjM2bC0yLjczLjA3ek0zMi41MiAxNi4wNWEyLjQ5IDIuNDkgMCAwIDEgMi43OCAyLjUgMi43OCAyLjc4IDAgMCAxLTIuOSAyLjg0IDIuNTMgMi41MyAwIDAgMS0yLjc1LTIuNTUgMi42OCAyLjY4IDAgMCAxIDIuODctMi43OXptLjA3IDQuNzVjLjc3IDAgLjg5LTEuMTIuODktMS44IDAtMS0uMjItMi40LTEuMDgtMi40LS42NCAwLS45NC44OS0uOTQgMS44OXMuMzMgMi4zNCAxLjEyIDIuMzR6TTM1Ljc0IDIwLjg4YS42Mi42MiAwIDAgMCAuNTUtLjcydi01LjVjMC0uNDQgMC0uNzItLjMzLS43MmgtLjMzdi0uMzhhMTQuNDggMTQuNDggMCAwIDAgMi40NC0uNTkgNSA1IDAgMCAwLS4wNyAxLjI2djUuOTNhMy4yMyAzLjIzIDAgMCAxLS4wNi41OWwuNzkuMXYuMzZsLTIuOTUuMDd6TTQxLjkzIDE2LjA1YTIuNDkgMi40OSAwIDAgMSAyLjc4IDIuNDYgMi43OCAyLjc4IDAgMCAxLTIuOSAyLjg0IDIuNTMgMi41MyAwIDAgMS0yLjc1LTIuNTUgMi42OCAyLjY4IDAgMCAxIDIuODctMi43NXptLjA3IDQuNzhjLjc3IDAgLjg5LTEuMTIuODktMS44IDAtMS0uMjItMi40LTEuMDgtMi40LS42NCAwLS45NC44OS0uOTQgMS44OXMuMzQgMi4zMSAxLjEzIDIuMzF6TTQ2Ljc1IDE5LjQzYTEuNjggMS42OCAwIDAgMS0xLjUyLTEuNmMwLTEuMTQgMS4xMy0xLjc1IDIuMzQtMS43NS43MyAwIDEgLjIyIDEuNjcuMjJoLjUzYTIuMzcgMi4zNyAwIDAgMCAuNzMtLjE0bC0uMTMuOTVoLS43NGEuOTQuOTQgMCAwIDEgLjMyLjc4YzAgMS4wNy0xLjEzIDEuNjUtMi4zOCAxLjY1YTMuODggMy44OCAwIDAgMS0uNTIgMCAuNzguNzggMCAwIDAtLjEuMzJjMCAuNjkgMy40MS4yMSAzLjQxIDIgMCAxLjIxLTEuMzQgMi4wOS0zIDIuMDktMSAwLTIuMy0uNDctMi4zLTEuMjggMC0uNTguNjktLjkgMS4zMi0xLjEzLS41OC0uMTktMS0uNDQtMS0uOS4wMy0uNzYuOTQtMS4wNyAxLjM3LTEuMjF6bTAgMi4xMmExLjI5IDEuMjkgMCAwIDAtLjI4Ljc3YzAgLjYyLjQ1IDEgMS4xOCAxIC41MyAwIDEuMzEtLjE1IDEuMzEtLjggMC0uNDgtLjU5LS41Ny0xLjYyLS43OXptMS41NS0zLjY1YzAtLjYyLS4yLTEuMjgtLjc3LTEuMjhzLS42OS41NS0uNjkgMS4xOC4xOSAxLjE4Ljc0IDEuMTguNzMtLjUuNzMtMS4wOHonIC8+ICAgICAgPHBhdGggZmlsbD0nI2ZmZicgZD0nTTUyLjg4IDIxLjU4Yy0uMDktLjIyLS4yMy0uNi0uMzgtLjk1TDUxIDE3LjIxYTEgMSAwIDAgMC0uNi0uNjR2LS4zNmgyLjM1YTEuMzQgMS4zNCAwIDAgMCAwIDFsLjczIDEuODRhNS41MiA1LjUyIDAgMCAxIC4yMS42NGwxLTIuMjljLjE4LS40MS0uMi0uNjgtLjYtLjc5di0uMzZoMS42NmwuMDYuMThhMi43MiAyLjcyIDAgMCAwLS4zMi41OGwtMS41MyAzLjYzYy0uNDYgMS4wOC0xLjI5IDMuMjYtMi43IDMuMjZhLjYxLjYxIDAgMCAxLS42Ny0uNjJjMC0uMy4yLS42My44NC0uNjNhMS40NiAxLjQ2IDAgMCAwIDEuNDUtMS4wN3onIC8+ICAgIDwvc3ZnPg=='}
            />
          </div>
          <Loader />
        </div>
      </Wrapper>
    )
  }
}
