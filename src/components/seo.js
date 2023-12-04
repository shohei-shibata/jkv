import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Seo = ({ title, description, image, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, defaultImage, siteUrl, twitterUsername } = useSiteMetadata()
  const seo = {
    title: title ? `${defaultTitle} | ${title}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }
  return (
    <>

      <!-- Primary Meta Tags -->
      <title>Meta Tags — Preview, Edit and Generate</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seo.url} />
      <meta property="twitter:title" content={seo.title} />
      <meta property="twitter:description" content={seo.description} />
      <meta property="twitter:image" content={seo.image} />

      {children}
      
    </>
  )
}

export default Seo