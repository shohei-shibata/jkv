import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as teamStyle from "./team-list.module.css"
import { useTeamData } from "../hooks/use-team-data"

const TeamList = () => {
  const team = useTeamData()
  return (
    <>
      <div className="content-wrapper-default-width">
        <div className="gallery-wrapper">
          {team.map(person => (
            <div className={teamStyle.teamMemberWrapper} id={`${person.frontmatter.slug}`}>
              <div className={teamStyle.teamMemberPhoto}>
                <GatsbyImage image={getImage(person.frontmatter.image)}/>
                <h2>{person.frontmatter.name}</h2>
                <h3 style={{textAlign: "center"}}>{person.frontmatter.position}</h3>
              </div>
              <div className={teamStyle.teamMemberText} dangerouslySetInnerHTML={{__html: person.html}}/>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default TeamList