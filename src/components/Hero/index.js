import React from "react"
import { Link } from "gatsby"
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
              Hello 👋,
            </h2>
            <h2 data-aos="fade-right" data-aos-delay="400">
              I'm <span className="highlight">Hai</span>
            </h2>
            <p data-aos="fade-right" data-aos-delay="450">
              A <span className="emphasize">self-taught</span> Website Developer
            </p>
            <button className="btn" data-aos="fade-right" data-aos-delay="500">
              {/* <Link to="/cv"></Link> */}
              View Resume
            </button>
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
