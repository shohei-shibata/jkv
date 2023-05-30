import React from "react"
import * as imageOverlayCss from "./image-overlay.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageOverlay = ({image, altText, text}) => {
  return (
    <div className={imageOverlayCss.imageWrapper}>
      <GatsbyImage 
        image={getImage(image)} 
        alt={altText}
        className={imageOverlayCss.image}
      />
      <div className={imageOverlayCss.overlay}>
        <h1>{text}</h1>
      </div>
    </div>
  )
}

export default ImageOverlay