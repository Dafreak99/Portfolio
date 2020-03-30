import React from "react"
import Filter from "../Filter"
import Showcase from "../Showcase"
import "./projects.css"

function Projects() {
  return (
    <div className="projects section-padding">
      <div className="section-heading">
        <h3>Projects</h3>
        <p>Projects</p>
      </div>
      <div className="container">
        <Filter />
        <Showcase />
      </div>
    </div>
  )
}

export default Projects
