import React from "react"
import SectionTitle from "./section-title"
import * as projectsCss from "./projects.module.css"
import ImageOverlay from "./image-overlay"

const ProjectsSection = ({projects}) => {
  console.log("projects", projects)
  return (
    <>
      <div className="content-wrapper-default-width">
        <SectionTitle>Recent Projects</SectionTitle>
        <div className={projectsCss.galleryWrapper}>
          {projects.map((project, index) => (
            <ImageOverlay key={`project-${index+1}`} data={project.frontmatter}/>
          ))}
        </div>
      </div>
    </>
  )
}
export default ProjectsSection