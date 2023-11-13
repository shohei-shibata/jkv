import React from "react"
import SectionTitle from "../components/section-title"
import { Section } from "./section"

const MdxWrapper = ({children, title}) => {
  return (
    <div className="content-wrapper-default-width page-content-wrapper">
      <Section title={title}>
        <div className="text-section-narrow-width">
          {children}
        </div>
      </Section>
    </div>
  )
}

export default MdxWrapper
