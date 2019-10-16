import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

class ProjectBar extends React.Component {
  render() {
    return (
      <div className="container" style={{ height: "50%" }}>
        <div className="my-auto row">
          <div className="col-7 p-2">
            <div className="row">
              <div className="col-auto">
                <h1>{this.props.title}</h1>
              </div>
              <div className="col">
                <p className="text-muted text-small">Created</p>
                <p>{this.props.timeCreated}</p>
              </div>
              <div className="col">
                <p className="text-muted text-right">Tech Stack</p>
                <p className="text-right">{this.props.techStack.join(", ")}</p>
              </div>
            </div>
            <p>{this.props.description}</p>
          </div>
          <div className="col p-1">
            {/* <img src={this.props.imageURL} className="img-fluid" /> */}
            <Img fluid={this.props.gatsbyImageFluid} />
          </div>
        </div>
      </div>
    )
  }
}

ProjectBar.propTypes = {
  title: PropTypes.string.isRequired,
  timeCreated: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  gatsbyImageFluid: PropTypes.any.isRequired,
}

export default ProjectBar
