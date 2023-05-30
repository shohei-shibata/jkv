/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `JKV ENGINEERING`,
    description: `Engineering contractor in Milford Ohio, specializing in systems engineering design and rapid prototype solutions.`,
    twitterUsername: `@JkvEngineering`,
    image: `/images/logo.png`,
    siteUrl: `https://jkvengineering.com`,
  },
  plugins: [
    /*"gatsby-plugin-google-gtag", */
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-transformer-remark", 
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    `gatsby-plugin-mdx`, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "services",
      "path": "./src/services/"
    },
    __key: "services"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": "./src/projects/"
      },
      __key: "projects"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "team",
        "path": "./src/team/"
      },
      __key: "team"
    },
  ]
};