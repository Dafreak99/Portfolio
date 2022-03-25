import React from "react"
import fb from "../../images/fb.png"
import instagram from "../../images/instagram.png"
import linkedin from "../../images/linkedin.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="section">
      <div className="footer__social-media">
        <div className="footer__circle">
          <img src={fb} alt="fb" />
        </div>
        <div className="footer__circle">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="footer__circle">
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
      <div className="footer__text">
        <p>
          This website was made with love and dedication ⌨️{" "}
          <span>Since 2020</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
