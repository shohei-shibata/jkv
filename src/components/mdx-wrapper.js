import React from "react"
import SectionTitle from "../components/section-title"

const MdxWrapper = ({children, title}) => {
  return (
    <div className="content-wrapper-default-width page-content-wrapper">
      <SectionTitle>{title}</SectionTitle>
      <div className="text-section-narrow-width">
        {children}
      </div>
    </div>
  )
}

export default MdxWrapper
