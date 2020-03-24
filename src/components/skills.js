import React, { useState } from "react"
import check from "../images/icons8-checkmark (1).svg"

const skills = () => {
  const data = [
    {
      "Front End": [
        "HTML, CSS, JS",
        "Bootstrap",
        "ReactJS",
        "VueJS",
        "Redux",
        "BEM",
      ],
    },
    {
      "Back End": ["NodeJS", "ExpressJs", "MongoDB", "Basic Authentication"],
    },
    {
      Others: ["Git, AdobeXD", "Figma", "Hero Web Hosting"],
    },
  ]

  return (
    <div className="skills section-padding">
      <div className="container">
        <h3 className="section-heading">Skills</h3>
        <div className="skills__content grid">
          {data.map((each, i) => (
            <div key={i} className="card">
              <h3 className="card__heading">{Object.keys(each)}</h3>
              {each[Object.keys(each)].map(abc => (
                <p key={abc} className="card__row">
                  <span>
                    <img src={check} alt="check" />
                  </span>
                  {abc}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default skills
