import React from "react"
import Img from "gatsby-image"

const ProjectDetail = ({ detail, showModal, toggleShowModal }) => {
  const getClass = () => {
    // Add class depends on toggle showModal
    return showModal
      ? "project-detail-wrapper active"
      : "project-detail-wrapper"
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
        <div class="project-detail">
          <div
            className="project-detail__close"
            onClick={() => toggleShowModal(false)}
          >
            &#x003A7;
          </div>
          <div className="project-detail__image">
            <img
              srcset={detail.thumbnail.childImageSharp.fluid.srcSet}
              sizes={detail.thumbnail.childImageSharp.fluid.sizes}
              alt=""
            />
          </div>
          <div className="project-detail__info">
            <h3 className="project-detail__title">{detail.title}</h3>
            <ul className="project-detail__description">
              {detail.description.map(desp => (
                <li>
                  <span>●</span> {desp}
                </li>
              ))}
            </ul>
            <p>Technologies used: </p>
            <ul className="project-detail__technologies">
              {detail.stack.map(each => (
                <li>
                  <Img fluid={each.childImageSharp.fluid} />
                </li>
              ))}
            </ul>

            <a href="#" className="btn source">
              Source
            </a>
            <a href={detail.demo} target="_blank" className="btn demo">
              View Demo
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
