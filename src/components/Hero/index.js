import React from "react"
import illustration from "../../images/undraw_coding_6mjf.svg"
import Navbar from "../Navbar"
import "./hero.css"

const Hero = () => {
  return (
    <header className="hero-section">
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
              View Portfolio
            </button>
          </div>
          <div className="hero-section__illustration span-6 center">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
