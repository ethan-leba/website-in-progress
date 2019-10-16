import React from "react"
import PropTypes from "prop-types"

// Separator between sections
class ContentBar extends React.Component {
  hasSubtext = () => {
    return this.props.subtext.length > 0
  }

  render() {
    return (
      <div className="container-fluid">
        <div
          className={`row ${this.hasSubtext() ? "py-2" : "py-4"}`}
          style={{ backgroundColor: "#BA3B3B" }}
        >
          <h4 className="text-white w-100 text-center">
            {this.props.headertext}
          </h4>
        </div>
        {this.hasSubtext() && (
          <div
            className="row py-1 justify-content-around"
            style={{ backgroundColor: "#953232" }}
          >
            {this.props.subtext.map(value => {
              return <p className="text-white d-flex">{value}</p>
            })}
          </div>
        )}
      </div>
    )
  }
}

ContentBar.propTypes = {
  headertext: PropTypes.string,
  subtext: PropTypes.arrayOf(PropTypes.string),
}

ContentBar.defaultProps = {
  subtext: [],
}

export default ContentBar
