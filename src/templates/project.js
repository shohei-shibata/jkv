import React from "react"
import SectionTitle from "../components/section-title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as projectStyle from "./project.module.css"
import { Link } from "gatsby"
import Seo from "../components/seo"

export const Head = ({pageContext}) => <Seo title={pageContext.title}/>

const ProjectPageTemplate = ({pageContext}) => {
  const { title, content, image, imageAltText } = pageContext
  return (
    <>
      <div className={`center-content ${projectStyle.featuredImage}`}>
        <GatsbyImage image={getImage(image)} alt={imageAltText}/>
      </div>
      <div className={`content-wrapper-default-width ${projectStyle.mainContentWrapper}`}>
        <SectionTitle>{title}</SectionTitle>
        <div dangerouslySetInnerHTML={{__html: content}} className="text-section-narrow-width"/>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
          <Link to="/projects" className="btn btn-yellow">View Other Projects</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectPageTemplate