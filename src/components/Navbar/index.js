import React, { useEffect } from "react"
import logo from "../../images/3d-design.svg"
import { BsMoon } from "react-icons/bs"
import { IoMdSunny } from "react-icons/io"

const Navbar = () => {
  useEffect(() => {
    let links = document.querySelectorAll(".hero-section__link")
    const switcher = document.querySelector(".switcher")
    const toggle = document.querySelector(".toggle")
    const noAnimation = document.querySelectorAll(".no-animation")

    switcher.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme")
      if (!theme) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme")
      }
      switcher.classList.toggle("active")
    })

    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault()
        let sectionTarget = e.target.getAttribute("data")
        let rootFont = window
          .getComputedStyle(document.body)
          .getPropertyValue("font-size")
          .replace("px", "")

        window.scrollTo({
          behavior: "smooth",
          // 80px from navbar
          // font size change by screensize don't use static value
          top: offset(sectionTarget) - +rootFont * 8,
        })

        // After clicked close the menu
        toggleMenu()
        toggle.classList.remove("active")
      })
    })
    // Add toggle amination

    toggle.addEventListener("click", () => {
      toggle.classList.toggle("active")
      clearAnimation()
    })

    const clearAnimation = () => {
      noAnimation.forEach(each => each.classList.remove("no-animation"))
    }
  })

  const offset = className => {
    let target = document.querySelector(className)
    let rect = target.getBoundingClientRect()
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop

    return rect.top + scrollTop
  }

  const toggleMenu = () => {
    let menu = document.querySelector(".hero-section__menu")
    menu.classList.toggle("active")
  }

  return (
    <nav className="hero-section__navigation">
      <div className="container">
        <div className="hero-section__logo">
          <img src={logo} alt="logo" data=".hero-section" />
        </div>
        <ul className="hero-section__menu">
          <li
            className="hero-section__list"
            data-aos="fade-left"
            data-aos-delay="50"
          >
            <a href="#" className="hero-section__link" data=".about">
              About
            </a>
          </li>
          <li
            className="hero-section__list"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <a href="#" className="hero-section__link" data=".skills">
              Skills
            </a>
          </li>
          <li
            className="hero-section__list"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <a href="#" className="hero-section__link" data=".projects">
              Projects
            </a>
          </li>
          <li
            className="hero-section__list"
            data-aos="fade-left"
            data-aos-delay="350"
          >
            <a href="#" className="hero-section__link" data=".contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="switcher__wrapper">
          <BsMoon style={{ marginRight: "1rem" }} />
          <div className="switcher"></div>
          <IoMdSunny style={{ marginLeft: "1rem" }} />
        </div>
        <div className="toggle" onClick={toggleMenu}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
