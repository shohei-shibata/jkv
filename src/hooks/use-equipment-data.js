import { graphql, useStaticQuery } from "gatsby"

export const useEquipmentData = () => {
  const data = useStaticQuery(graphql`
    query getEquipmentData {
      allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "Equipment"}}}
        sort: {frontmatter: {order: ASC}}
      ) {
        nodes {
          html
          frontmatter {
            image {
              childImageSharp {
                id
                gatsbyImageData(width: 550)
              }
            }
            imageAltText
            slug
            name
            model
          }
        }
      }
    }
  `)

  console.log("Equipment Data", data.allMarkdownRemark.nodes)

  return data.allMarkdownRemark.nodes
}