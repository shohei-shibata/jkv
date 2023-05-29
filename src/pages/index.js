import * as React from "react"
import { Link, graphql } from "gatsby"
import Slogan from "../components/slogan"
import AboutSection from "../components/about"
import ProjectsSection from "../components/projects"
import { SectionDark, SectionRegular, SectionYellow } from "../components/section-wrapper"
import ContactForm from "../components/contact-form"
import SectionTitle from "../components/section-title"
import Portrait from "../components/portrait"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  const services = data.allMarkdownRemark.nodes.filter(item => item.frontmatter.category === "Services")
  const projects = data.allMarkdownRemark.nodes.filter(item => item.frontmatter.category === "Projects")
  const team = data.allMarkdownRemark.nodes.filter(item => item.frontmatter.category === "Team")
    .sort((a, b) => b.frontmatter.order<a.frontmatter.order)
  const fabrication = data.allMarkdownRemark.nodes.filter(item => item.frontmatter.category === "Fabrication")
  return (
    <>
      <Slogan/>
      <SectionRegular sectionId="about">
        <SectionTitle>What We Do</SectionTitle>
        <AboutSection services={services}/>
      </SectionRegular>
      <SectionDark sectionId="projects">
        <SectionTitle>Recent Projects</SectionTitle>
        <ProjectsSection projects={projects}/>
      </SectionDark>
      <SectionYellow sectionId="section-cta-contact">
        <div className="content-wrapper-default-width">
          <h1 className="cta-text">Talk to us about your next project</h1>
          <div className="center-content btn-wrapper">
            <Link href="/contact" className="btn centered">
              Contact Us
            </Link>
          </div>
        </div>
      </SectionYellow>
      <SectionDark sectionId="prototyping">
        <div className="content-wrapper-default-width">
          <SectionTitle>Fabrication Capabilities</SectionTitle>
          <div className="text-section-narrow-width">
            <div className="center-content">
              <StaticImage src="../fabrication/fabrication-top-image.jpg"/>
            </div>
            <h3>Let us turn your great idea into reality.</h3>
            <p>From simple metal fabrication to building an entire proof-of-concept vehicle, we can build it for you right here in our shop. </p>
          </div>
          <div className="center-content btn-wrapper">
            <Link to="/about#fabrication" className="btn">Learn More</Link>
          </div>
        </div>
      </SectionDark>
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
          <SectionTitle>Contact Us</SectionTitle>
          <div className="contact-row-1-container">
            <div className="contact-address">
              <h3>JKV ENGINEERING LLC</h3>
              <h3>789 U.S. 50</h3>
              <h3>Milford, OH 45150</h3>
            </div>
            <ContactForm/>
          </div>
          <div className="google-map-container">
            <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1300.5705507545151!2d-84.26534586277937!3d39.16799655108178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840550de1e47f93%3A0xfefb543e9f31f3a5!2sJKV%20Engineering!5e0!3m2!1sen!2sus!4v1673966115245!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </SectionDark>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>


export const pageQuery = graphql`
  query GetAllServices {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          name
          position
          order
          slug
          imageAltText
          image {
            childImageSharp {
              gatsbyImageData(width: 370)
            }
          }
        }
      }
    }
  }
`
