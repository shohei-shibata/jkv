import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          defaultImage
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}