import React, { useEffect } from "react"
import AOS from "aos"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Navbar from "../components/Navbar"
import illu from "../images/hero-section.svg"
import pin from "../images/icons8-pin-50.png"
import "../styles/media.css"
import ReactFullpage from "@fullpage/react-fullpage"
import "aos/dist/aos.css"
import Footer from "../components/Footer"
import ScrollTop from "../components/ScrollTop"

const IndexPage = () => {
  React.useEffect(() => {
    // Init animation
    AOS.init()

    document.title = "My portfolio"
    document.querySelector("html").setAttribute("lang", "en")
    let meta = document.createElement("meta")
    meta.setAttribute("name", "Description")
    meta.setAttribute("content", "This is my description")
    document.querySelector("head").appendChild(meta)

    window.addEventListener("scroll", () => {
      let nav = document.querySelector(".hero-section__navigation")
      let content = document.querySelector(".hero-section__content")
      if (window.pageYOffset > 200) {
        nav.classList.add("active")
        content.classList.add("active")
      } else {
        nav.classList.remove("active")
        content.classList.remove("active")
      }
    })
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default IndexPage
