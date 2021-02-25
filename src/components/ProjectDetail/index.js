import React from "react"
import Slider from "react-slick"

import Img from "gatsby-image"
import Link from "../../images/link.svg"
import Source from "../../images/folder.svg"

const ProjectDetail = ({ detail, showModal, toggleShowModal }) => {
  const getClass = () => {
    // Add class depends on toggle showModal
    return showModal
      ? "project-detail-wrapper active"
      : "project-detail-wrapper"
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const onClick = e => {
    if (
      e.target.className === "project-detail-wrapper" ||
      e.target.className === "project-detail-wrapper active"
    )
      toggleShowModal(false)
  }

  return (
    <div className={getClass()} onClick={onClick}>
      {detail && (
        <div className="project-detail">
          <div
            className="project-detail__close"
            onClick={() => toggleShowModal(false)}
          >
            &#x003A7;
          </div>
          <div className="project-detail__image">
            <Slider {...settings}>
              {detail.thumbnail.map((each, i) => (
                <img
                  srcSet={each.childImageSharp.fluid.srcSet}
                  sizes={each.childImageSharp.fluid.sizes}
                  alt=""
                />
              ))}
            </Slider>
          </div>
          <div className="project-detail__info">
            <h3 className="project-detail__title">{detail.title}</h3>
            <ul className="project-detail__description">
              {detail.description.map((desp, i) => (
                <li key={i}>
                  <span>●</span> {desp}
                </li>
              ))}
            </ul>
            <p>Technologies used: </p>
            <ul className="project-detail__technologies">
              {detail.stack.map((each, i) => (
                <li key={i}>
                  <Img fluid={each.childImageSharp.fluid} />
                </li>
              ))}
            </ul>

            <a href="#" className="btn btn--source">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>Source</span>
                <img
                  src={Source}
                  height="32px"
                  width="32px"
                  style={{ marginLeft: "20px" }}
                ></img>
              </div>
            </a>
            <a href={detail.demo} target="_blank" className="btn btn--demo">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>View Demo</span>
                <img
                  src={Link}
                  height="32px"
                  width="32px"
                  style={{ marginLeft: "20px" }}
                ></img>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
