import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../components/section-title"

const AboutPage = () => {
  return (
    <>
      <div className="content-wrapper-default-width page-content-wrapper">
        <SectionTitle>About JKV</SectionTitle>
        <p>Content...</p>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default AboutPage