import React from "react"
import { BsCodeSlash, BsBoundingBox, BsGrid3X3Gap } from "react-icons/bs"

import "./whatido.css"

const About = () => {
  const data = [
    {
      h3: "UI Design",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur, re Minima, doloribus? Voluptate velit in dignissimos",
      icon: <BsBoundingBox />,
      postfix: "green",
    },
    {
      h3: "Web Development",
      p:
        "orem ipsum dolor sit amet consectetur adipisicing elit Consequuntur, re Minima, doloribus? Voluptate velit in dignissimos",
      icon: <BsCodeSlash />,
      postfix: "blue",
    },
    {
      h3: "App Development",
      p:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Consequuntur, re Minima, doloribus? Voluptate velit in dignissimos",
      icon: <BsGrid3X3Gap />,
      postfix: "purple",
    },
  ]

  return (
    <div className="whatido section-padding section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h3>What I Do</h3>
          <p>What I Do</p>
        </div>
        <div className="whatido__content">
          {data.map(({ h3, p, icon, postfix }, i) => (
            <div
              className="whatido__box"
              data-aos="fade-up"
              data-aos-delay={300 * i}
            >
              <div className={`whatido__icon ${postfix}`}>{icon}</div>
              <h3>{h3}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
