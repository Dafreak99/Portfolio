import React from "react"
import { useEffect } from "react"
import setUpFilter from "../../utils/setupFilter"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProjectDetail from "../ProjectDetail"
import { useState } from "react"

const Showcase = () => {
  useEffect(() => {
    setUpFilter()
    document.addEventListener("aos:in:project", ({ detail }) => {
      setTimeout(() => {
        detail.removeAttribute("data-aos")
        detail.removeAttribute("data-aos-delay")
        detail.removeAttribute("data-aos-id")
      }, 350)
    })
  })

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              filterTag
              description
              demo
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              stack {
                childImageSharp {
                  fluid(maxWidth: 40) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const [showModal, toggleShowModal] = useState(false)
  const [detail, setDetail] = useState(null)

  const onClick = each => {
    toggleShowModal(true)
    setDetail(each.node.frontmatter)
  }

  return (
    <>
      <div className="showcase" data-aos="fade-up" data-aos-once="true">
        {data.allMarkdownRemark.edges.map((each, i) => (
          <div
            key={i}
            className={`showcase__project ${each.node.frontmatter.filterTag}`}
            data-aos-id="project"
            onClick={() => onClick(each)}
          >
            {/* render image from markdown */}
            <Img
              fluid={each.node.frontmatter.thumbnail[0].childImageSharp.fluid}
            />
            <p className="showcase__title">{each.node.frontmatter.title}</p>
          </div>
        ))}
      </div>

      <ProjectDetail
        showModal={showModal}
        detail={detail}
        toggleShowModal={toggleShowModal}
      />
    </>
  )
}

export default Showcase
