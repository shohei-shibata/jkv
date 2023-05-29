import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as teamStyle from "./team.module.css"

const TeamList = () => {
  const data = useStaticQuery(graphql`
    query getTeamList {
      allMarkdownRemark {
        nodes {
          html
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
            name
            position
            category
          }
        }
      }
    }
  `)
  const team = data.allMarkdownRemark.nodes.filter(
    node => node.frontmatter.category === "Team"
  ).sort(
    (a,b) => a.frontmatter.order>b.frontmatter.order
  )
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