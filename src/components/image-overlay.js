import React from "react"
import * as imageOverlayCss from "./image-overlay.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageOverlay = ({data}) => {
  const image = getImage(data.image)
  return (
    <div className={imageOverlayCss.imageWrapper}>
      <GatsbyImage 
        image={image} 
        alt={data.imageAltText}
        className={imageOverlayCss.image}
      />
      <div className={imageOverlayCss.overlay}>
        <h1>{data.title}</h1>
      </div>
    </div>
  )
}

export default ImageOverlay