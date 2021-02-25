import React from "react"

import pin from "../../images/icons8-pin-50.png"
import about from "../../images/about.svg"
import "./about.css"

const About = () => {
  return (
    <div className="about section-padding section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <h3>About Me</h3>
          <p>About Me</p>
        </div>
        <div className="about__content grid">
          <div className="about__left span-6">
            <img src={about} alt="" />
          </div>
          <div className="about__right span-6">
            <div
              className="about__row"
              data-aos="fade-left"
              data-aos-mirror="true"
            >
              <h3 className="about__mark mb-1">
                <img src={pin} alt="" />
                My story:
              </h3>

              <p className="about__paragraph">
                {" "}
                I'm an Information Technology student with a focus on Web
                Development, especially Front-End Development. Seek for an
                opportunity so gain first career experience. I'm hardworking,
                diligent, and dedicated—all qualities I put forward in
                everything I do. I really enjoy exploring stuff and dive into
                state-of-the-art web technologies
              </p>
            </div>
            {/* end about row */}

            <div
              className="about__row"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-mirror="true"
            >
              <h3 className="about__mark mb-1">
                <img src={pin} alt="" />
                Education:
              </h3>
              <p className="about__paragraph">
                <strong>Can Tho University</strong>{" "}
                <p class="about__paragraph">
                  <span>Aug 2017- Dec 2021: </span> Information Technology High
                  Quality Curriculum
                </p>
              </p>
            </div>
            {/* end about row */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
