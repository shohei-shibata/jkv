import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as portraitCss from "./portrait.module.css"

const Portrait = ({data}) => {
  const image = getImage(data.image)
  return (
    <div className={portraitCss.teamMemberContainer}>
      <Link href={`/team/${data.slug}`}>
        <GatsbyImage image={image} alt={data.imageAlt} className={portraitCss.image}/>
      </Link>
      <h3>{data.name}</h3>
      <p className={portraitCss.position}>{data.position}</p>
    </div>
  )
}

export default Portrait