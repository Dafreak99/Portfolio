import React from "react"
import Filter from "./Filter"
import Showcase from "./showcase"

function projects() {
  return (
    <div className="projects section-padding">
      <h3 className="section-heading">Projects</h3>
      <div className="container">
        <Filter />
        <Showcase />
      </div>
    </div>
  )
}

export default projects
