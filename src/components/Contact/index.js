import React from "react"
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md"
import ContactImg from "../../images/contact.jpeg"

import "./contact.css"

const Contact = () => {
  const data = [
    { text: "Can Tho, VN", title: "Address", icon: <MdLocationOn /> },
    { text: "haitran99.dev@gmail.com", title: "Email", icon: <MdEmail /> },
    { text: "0703034308", title: "Phone", icon: <MdPhone /> },
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
              data-aos-delay={300 * i}
            >
              {icon}
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="contact__form">
          <div className="contact__form--left">
            <form action="">
              <div className="form-control">
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="form-control">
                <input type="text" name="email" placeholder="Your Email" />
              </div>
              <div className="form-control">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="form-control">
                <button class="contact__btn">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact__form--right">
            <img src={ContactImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
