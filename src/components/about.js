import React from "react"
import SectionTitle from "./section-title"
import * as aboutCss from "./about.module.css"
import ImageOverlay from "./image-overlay"

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
    </div>
  </>
)}

export default AboutSection