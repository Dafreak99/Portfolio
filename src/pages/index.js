import React, { useEffect } from "react"
import AOS from "aos"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

import "../styles/media.css"
import "aos/dist/aos.css"
import Footer from "../components/Footer"
import ScrollTop from "../components/ScrollTop"
import { sectionTransition } from "../utils/sectionTransition"
import { fixedNav } from "../utils/fixedNav"
import { SEO } from "../utils/SEO"

const IndexPage = () => {
  useEffect(() => {
    // Init animation
    AOS.init()
    window.scroll(0, 0)

    SEO()
    fixedNav()
    sectionTransition()
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
