import React from "react"
import SectionTitle from "./section-title"
import * as aboutCss from "./about.module.css"
import ImageOverlay from "./image-overlay"
import { Link } from "gatsby"

const AboutSection = ({services}) => {
  return (
  <>
    <div className="content-wrapper-default-width">
      <SectionTitle>What We Do</SectionTitle>
      <div className={aboutCss.galleryWrapper}>
        {services.map((item, index) => (
          <ImageOverlay key={`service-item-${index+1}`} data={item.frontmatter}/>
        ))}
      </div>
      <div className="center-content btn-wrapper">
        <Link to="/about" className="btn btn-yellow">...And More!</Link>
      </div>
    </div>
  </>
)}

export default AboutSection