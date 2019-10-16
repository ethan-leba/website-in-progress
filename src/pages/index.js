import React from "react"
import { graphql } from "gatsby"
import "../styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Pointer from "../resources/Pointer.svg"
import TranscriboidIMG from "../resources/transcriboidimage.png"
import SimulatedConsole from "../components/SimulatedConsole"

import ContentBar from "../components/ContentBar"
import HeaderBar from "../components/HeaderBar"
import ProjectBar from "../components/ProjectBar"
import Console from "../components/Console"

//TODO: Put text in some sort of file?
export default ({ data }) => (
  <>
    <HeaderBar />
    <SimulatedConsole
      fullText={
        "Hi, my name’s Ethan.\nI’m a sophomore at Northeastern University, studying Computer Science.\nI live in New York City when I’m not studying in Boston.\nI’m currently a Teaching Assistant for a Java course called Object Oriented Design.\n\nYou can contact me at ethanleba5@gmail.com."
      }
      speed={30}
      enterspeed={500}
      variance={20}
      prefixText={"Ethans-MacBook-Pro: ethanleba$ "}
      render={data => <Console text={data.text + "█"} />}
    />
    <img className="d-block mx-auto mb-5" src={Pointer} />
    <ContentBar headertext={"Projects"} />
    <br />
    {data.allProjectsJson.edges.map(project => (
      <ProjectBar
        title={project.node.title}
        timeCreated={project.node.dateCreated}
        techStack={project.node.languagesUsed}
        description={project.node.description}
        gatsbyImageFluid={project.node.image.childImageSharp.fluid}
      />
    ))}

    {/* <ContentBar
      headertext={"Proficiences"}
      subtext={["Languages & Frameworks", "Systems & Software"]}
    /> */}
  </>
)

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          dateCreated
          languagesUsed
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
