import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as teamStyle from "./team-list.module.css"
import { useTeamData } from "../hooks/use-team-data"

const TeamList = () => {
  const team = useTeamData()
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className={teamStyle.galleryWrapper}>
          {team.map(person => (
            <div className={teamStyle.teamMemberWrapper} id={`${person.frontmatter.slug}`}>
              <div className={`center-content ${teamStyle.teamMemberCenteredContent}`}>
                <GatsbyImage image={getImage(person.frontmatter.image)}/>
                <h2>{person.frontmatter.name}</h2>
                <h3 style={{textAlign: "center"}}>{person.frontmatter.position}</h3>
              </div>
              <div dangerouslySetInnerHTML={{__html: person.html}}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default TeamList