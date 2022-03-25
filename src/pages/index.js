import React, { useEffect } from "react"
import AOS from "aos"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

import "../styles/media.css"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "../components/Footer"
import ScrollTop from "../components/ScrollTop"
import { fixedNav } from "../utils/fixedNav"
import { SEO } from "../utils/SEO"
import Contact from "../components/Contact"

const IndexPage = () => {
  useEffect(() => {
    // Init animation
    AOS.init()
    window.scroll(0, 0)

    SEO()
    fixedNav()
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default IndexPage
