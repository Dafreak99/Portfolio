import React from "react"
import { Link } from "gatsby"

import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const IndexPage = () => {
  React.useEffect(() => {
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
  })

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default IndexPage
