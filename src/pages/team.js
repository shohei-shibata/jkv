import React from "react"
import { Link, graphql } from "gatsby"
import SectionTitle from "../components/section-title"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as teamStyle from "./team.module.css"

const TeamPage = ({data}) => {
  const team = data.allMarkdownRemark.nodes.sort((a,b)=>a.frontmatter.order>b.frontmatter.order)
  console.log("Team", team)
  return (
    <>
      <div className="content-wrapper-default-width page-content-wrapper">
        <SectionTitle>Our Team</SectionTitle>
        <div className={teamStyle.teamGalleryWrapper}>
          {team.map(person => (
            <div className={teamStyle.teamMemberWrapper} id={`${person.frontmatter.slug}`}>
              <div className={`center-content ${teamStyle.teamMemberCenteredContent}`}>
                <GatsbyImage image={getImage(person.frontmatter.image)}/>
                <h1>{person.frontmatter.name}</h1>
                <h3>{person.frontmatter.position}</h3>
              </div>
              <div dangerouslySetInnerHTML={{__html: person.html}}/>
            </div>
          ))}

        </div>
        <div className="btn-multiple-wrapper">
          <Link to="/" className="btn btn-yellow">Back to Home</Link>
        </div>
      </div>
    </>
  )
}

export default TeamPage

export const pageQuery = graphql`
  query GetAllProjects {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: "Team"}}}) {
      nodes {
        html
        frontmatter {
          position
          imageAltText
          category
          slug
          order
          name
          image {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`