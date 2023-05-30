import React from "react"
import * as projectsCss from "./projects-list.module.css"
import ImageOverlay from "./image-overlay"
import { Link } from "gatsby"
import { useProjectsData } from "../hooks/use-projects-data"

const ProjectsList = () => {
  const projects = useProjectsData()
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className={projectsCss.galleryWrapper}>
          {projects.map((project, index) => (
            <Link to={`/projects/${project.frontmatter.slug}`}>
              <ImageOverlay key={`project-${index+1}`} 
                data={project.frontmatter} 
                image={project.frontmatter.image} 
                altText={project.frontmatter.imageAltText} 
                text={project.frontmatter.title}/>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default ProjectsList