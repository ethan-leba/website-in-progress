import React from "react"
import ConsoleButtons from "../resources/ConsoleButtons.svg"
import PropTypes from "prop-types"

// A visual component mimicking a console
class Console extends React.Component {
    render() {
        return (
            <div className="w-75 mx-auto my-5 px-2 rounded" style={{ height: '65%', backgroundColor: "#2B2F3C" }}>
                <img src={ConsoleButtons} style={{ width: '4%' }} />
                <p className="menlo small" style={{ whiteSpace: "pre-line", color: "#ACC2F4" }}>{this.props.text}</p>
            </div>
        )
    }
}

Console.propTypes = {
    text: PropTypes.string.isRequired
}

export default Console