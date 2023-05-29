import React from "react"
import * as projectsCss from "./projects.module.css"
import ImageOverlay from "./image-overlay"
import { Link, graphql, useStaticQuery } from "gatsby"

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    query getProjects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                id
                gatsbyImageData(width: 370)
              }
            }
            imageAltText
            order
            slug
            title
            category
          }
        }
      }
    }
  `)
  const projects = data.allMarkdownRemark.nodes.filter(node => node.frontmatter.category === "Projects")
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className={projectsCss.galleryWrapper}>
          {projects.map((project, index) => (
            <Link to={`/projects/${project.frontmatter.slug}`}>
              <ImageOverlay key={`project-${index+1}`} data={project.frontmatter}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default ProjectsSection