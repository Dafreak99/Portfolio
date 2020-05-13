import React from "react"
import "./scrolltop.css"
import up from "../../images/up.png"

export default function ScrollTop() {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        document.querySelector(".scroll-top").classList.add("active")
      } else {
        document.querySelector(".scroll-top").classList.remove("active")
      }
    })
  }, [])
  return (
    <div
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img src={up} alt="up" className="scroll-top__icon" />
    </div>
  )
}
