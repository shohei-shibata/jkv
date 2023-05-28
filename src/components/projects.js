import React from "react"
import SectionTitle from "./section-title"
import * as projectsCss from "./projects.module.css"
import ImageOverlay from "./image-overlay"
import { Link } from "gatsby"

const ProjectsSection = ({projects}) => {
  console.log("projects", projects)
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