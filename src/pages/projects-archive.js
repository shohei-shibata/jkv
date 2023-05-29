import React from "react"
import { Link, graphql } from "gatsby"
import SectionTitle from "../components/section-title"
import ProjectsSection from "../components/projects"

const ProjectsPage = ({data}) => {
  console.log("Data", data.allMarkdownRemark.nodes)
  const projects = data.allMarkdownRemark.nodes
  return (
    <>
      <div className="content-wrapper-default-width page-content-wrapper">
        <SectionTitle>Projects</SectionTitle>
        <p>Here are some of our recent projects. Click on a project to read more.</p>
        <ProjectsSection projects={projects}/>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default ProjectsPage

export const pageQuery = graphql`
  query GetAllProjects {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "Projects"}}}) {
      nodes {
        html
        frontmatter {
          title
          imageAltText
          category
          slug
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