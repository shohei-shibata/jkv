import React from "react"
import SectionTitle from "../components/section-title"
import { Link, StaticImage } from "gatsby"

const MdxWrapper = ({children, title}) => {
  return (
    <div className="content-wrapper-default-width page-content-wrapper">
      <SectionTitle>{title}</SectionTitle>
      <div className="text-section-narrow-width">
        {children}
      </div>
      <div className="btn-multiple-wrapper">
        <Link to="/" className="btn btn-yellow">Back to Home</Link>
      </div>
    </div>
  )
}

export default MdxWrapper
