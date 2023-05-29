import React from "react"
import SectionTitle from "./section-title"
import * as aboutCss from "./about.module.css"
import ImageOverlay from "./image-overlay"
import { Link } from "gatsby"

const AboutSection = ({services}) => {
  return (
  <>
    <div className="content-wrapper-default-width">
      <div className={aboutCss.galleryWrapper}>
        {services.map((item, index) => (
          <Link to="/about">
            <ImageOverlay key={`service-item-${index+1}`} data={item.frontmatter}/>
          </Link>
        ))}
      </div>
      <div className="center-content btn-wrapper">
        <Link to="/about" className="btn btn-yellow">Read More</Link>
      </div>
    </div>
  </>
)}

export default AboutSection