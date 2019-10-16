import React from "react"

// The header of the website
class HeaderBar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row py-4" style={{ backgroundColor: "#BA3B3B" }}>
          <div className="col">
            <h4 className="text-white text-center">Ethan Leba</h4>
          </div>
        </div>
        <div
          className="row py-1 text-center"
          style={{ backgroundColor: "#953232", color: "white" }}
        >
          <p className="col">Proficiencies</p>
          <p className="col">Projects</p>
          <p className="col">Education & Experiences</p>
        </div>
      </div>
    )
  }
}

export default HeaderBar
