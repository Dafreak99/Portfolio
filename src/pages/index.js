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

const IndexPage = () => {
  React.useEffect(() => {
    // Init animation
    AOS.init()
    window.scroll(0, 0)
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

    let currentIndex = 0

    window.addEventListener("wheel", function(event) {
      let sections = document.querySelectorAll(".section")

      if (event.deltaY < 0) {
        --currentIndex

        if (currentIndex >= 0) {
          let rect = sections[currentIndex].getBoundingClientRect()

          console.log(sections[currentIndex])
          let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop

          window.scrollTo({
            top: rect.top + scrollTop,
            behavior: "smooth",
          })
        }
      } else if (event.deltaY > 0) {
        console.log(currentIndex)
        ++currentIndex

        if (currentIndex <= sections.length - 1) {
          let rect = sections[currentIndex].getBoundingClientRect()
          let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop

          window.scrollTo({
            top: rect.top + scrollTop,
            behavior: "smooth",
          })
        }
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
