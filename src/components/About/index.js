import React from "react"
import AOS from "aos"

import pin from "../../images/icons8-pin-50.png"
import "./about.css"
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const About = () => {
  return (
    <div className="about section-padding section">
      <div className="container">
        <div className="section-heading">
          <h3>About Me</h3>
          <p>About Me</p>
        </div>
        <div className="about__content grid">
          <div className="about__left span-6">
            <div
              className="about__row"
              data-aos="fade-right"
              data-aos-mirror="true"
            >
              <h3 className="about__mark mb-1">
                <img src={pin} alt="" />
                Summary:
              </h3>
              <p className="about__paragraph">
                Self-taught web development since 2018. My main programming
                language is <span className="highlight-purple">Javascript</span>
              </p>
              <p className="about__paragraph">
                I am on my journey to become a fullstack JS developer. Love to
                learn and explore new things
              </p>
            </div>
            {/* end about row */}
            <div
              className="about__row"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-mirror="true"
            >
              <h3 className="about__mark mb-1">
                <img src={pin} alt="" />
                Information:
              </h3>
              <p className="about__paragraph">
                <strong>Fullname:</strong> Tran Chau Hai
              </p>
              <p className="about__paragraph">
                <strong>DOB:</strong> 5/10/1999
              </p>
              <p className="about__paragraph">
                <strong>Phone:</strong> 0703034308
              </p>
              <p className="about__paragraph">
                <strong>Email:</strong> haitran99.dev@gmail.com
              </p>
            </div>
            {/* end about row */}
            <div
              className="about__row"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-mirror="true"
            >
              <h3 className="about__mark mb-1">
                <img src={pin} alt="" />
                Objective:
              </h3>
              <p className="about__paragraph">
                I want to become an all-rounded website developer. Eager to
                learn and explore new technology
              </p>
            </div>
            {/* end about row */}
          </div>
          <div className="about__right span-6"></div>
        </div>
      </div>
    </div>
  )
}

export default About
