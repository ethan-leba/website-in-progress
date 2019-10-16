import React from "react"
import PropTypes from "prop-types"

// Simulates a person typing in a console
class SimulatedConsole extends React.Component {
  state = {
    idx: 0,
  }

  componentDidMount() {
    this.tick()
  }

  tick = () => {
    setTimeout(() => {
      this.setState({
        idx: this.state.idx + 1,
      })
      this.tick()
    }, this.props.fullText.charAt(this.state.idx - 1) == '\n' ? this.props.enterspeed + this.getVariance() : this.props.speed + this.getVariance())
  }

  getVariance = () => {
    return Math.floor(Math.random() * this.props.variance)
  }

  renderText = () => {
    const str = this.props.fullText.substring(0, this.state.idx)
    return str
      .split("\n")
      .map(line => this.props.prefixText + line)
      .join("\n")
  }

  render() {
    return this.props.render({
      text: this.renderText(),
    })
  }
}

SimulatedConsole.propTypes = {
  speed: PropTypes.number.isRequired,
  enterspeed: PropTypes.number.isRequired,
  variance: PropTypes.number.isRequired,
  prefixText: PropTypes.string.isRequired,
  fullText: PropTypes.string.isRequired,
}

export default SimulatedConsole
