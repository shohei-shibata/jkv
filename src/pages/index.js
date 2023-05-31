import * as React from "react"
import { Link } from "gatsby"
import Slogan from "../components/slogan"
import ServicesList from "../components/services-list"
import { SectionDark, SectionRegular, SectionYellow } from "../components/section-wrapper"
import ContactForm from "../components/contact-form"
import SectionTitle from "../components/section-title"
import Portrait from "../components/portrait"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { useTeamData } from "../hooks/use-team-data"
import ProjectsList from "../components/projects-list"
import GoogleMap from "../components/google-map"

const IndexPage = () => {
  const team = useTeamData()
  return (
    <>
      <Slogan/>
      <SectionRegular sectionId="about">
        <SectionTitle>What We Do</SectionTitle>
        <ServicesList/>
      </SectionRegular>
      <SectionDark sectionId="projects">
        <SectionTitle>Recent Projects</SectionTitle>
        <ProjectsList/>
      </SectionDark>
      <SectionYellow sectionId="section-cta-contact">
        <div className="content-wrapper-default-width">
          <h1 className="cta-text">Talk to us about your next project</h1>
          <div className="center-content btn-wrapper">
            <Link to="/contact" className="btn centered">
              Contact Us
            </Link>
          </div>
        </div>
      </SectionYellow>
      <SectionRegular sectionId="our-team">
        <div className="content-wrapper-default-width">
          <SectionTitle>Our Team</SectionTitle>
          <div className="team-portraits-wrapper">
            {team.map((person, index) => (
              <Portrait key={`portrait-${index+1}`} data={person.frontmatter}/>
            ))}
          </div>
        </div>
      </SectionRegular>
      <SectionDark sectionId="contact-us">
        <div className="content-wrapper-default-width">
          <SectionTitle>How to Reach Us</SectionTitle>
          <div className="contact-row-1-container">
            <div className="contact-address">
              <h3>JKV ENGINEERING LLC</h3>
              <h3>789 U.S. 50</h3>
              <h3>Milford, OH 45150</h3>
            </div>
            <GoogleMap/>
          </div>
          <h2>Contact Form</h2>
          <ContactForm/>
        </div>
      </SectionDark>
    </>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home"/>