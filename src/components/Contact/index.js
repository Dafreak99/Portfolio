import React from "react"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"

import "./contact.css"

const Contact = () => {
  const data = [
    { text: "Can Tho, VN", title: "Address", icon: <MdLocationOn /> },
    { text: "newttran.dev@gmail.com", title: "Email", icon: <MdEmail /> },
    { text: "newttran", title: "Linkedin", icon: <AiFillLinkedin /> },
  ]

  return (
    <div className="contact section-padding section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h3>Contact Me</h3>
          <p>Contact Me</p>
        </div>
        <div className="contact__content">
          {data.map(({ title, text, icon }, i) => (
            <div
              className="contact__box"
              data-aos="fade-up"
              data-aos-mirror="false"
              data-aos-delay={300 * i}
            >
              {icon}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
