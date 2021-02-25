import React from "react"
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { AiFillGithub } from "react-icons/ai"
import { ImLinkedin } from "react-icons/im"

import Navbar from "../Navbar"
import illu from "../../images/hero-section.svg"
import "./hero.css"

const Hero = () => {
  return (
    <header className="hero-section section">
      <Navbar />
      <div className="hero-section__content ">
        <div className="container grid">
          <div className="hero-section__text span-6 center">
            <h2 data-aos="fade-right" data-aos-delay="350">
              Hello 👋, I'm
            </h2>
            <h2 data-aos="fade-right" data-aos-delay="400">
              TRAN C. HAI
            </h2>
            <p data-aos="fade-right" data-aos-delay="450">
              A <span className="emphasize">self-taught</span> Website Developer
            </p>
            <ul class="info">
              <li class="info__list" data-aos="fade-right" data-aos-delay="500">
                <MdEmail />
                <a href="mailto:" class="info__link">
                  haitran99.dev@gmail.com
                </a>
              </li>
              <li class="info__list" data-aos="fade-right" data-aos-delay="550">
                <MdPhone />
                <a href="callto:" class="info__link">
                  0703034308
                </a>
              </li>
              <li class="info__list" data-aos="fade-right" data-aos-delay="600">
                <MdLocationOn />
                <a href="#" class="info__link">
                  Can Tho, VN
                </a>
              </li>
            </ul>

            <ul class="social-media">
              <li
                className="social-media__list"
                data-aos="fade-up"
                data-aos-delay="650"
              >
                <a href="" class="social-media__link">
                  <FaFacebookF />
                </a>
              </li>
              <li
                className="social-media__list"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href="" class="social-media__link">
                  <AiFillGithub />
                </a>
              </li>
              <li
                className="social-media__list"
                data-aos="fade-up"
                data-aos-delay="750"
              >
                <a href="" class="social-media__link">
                  <ImLinkedin />
                </a>
              </li>
            </ul>

            {/* <div >
              
              <button className="btn btn--cv">
                <Link to="/cv"></Link>
                View Resume
              </button>
            </div> */}
          </div>
          <div className="hero-section__illustration span-6 center">
            <img src={illu} alt="illustration" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero

// TODO: Project Detail: Make it becomes  a slider instead of just one thumbnail image
