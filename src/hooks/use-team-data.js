import { graphql, useStaticQuery } from "gatsby"

export const useTeamData = () => {
  const data = useStaticQuery(graphql`
    query getTeamData {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "Team"}}}
        sort: {frontmatter: {order: ASC}}
      ) {
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
            slug
            name
            position
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark.nodes
}