import React from "react"
import { Link } from "gatsby"
import SectionTitle from "../components/section-title"

const TeamPage = () => {
  return (
    <>
      <div className="content-wrapper-default-width page-content-wrapper">
        <SectionTitle>Our Team</SectionTitle>
        <p>Content...</p>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default TeamPage