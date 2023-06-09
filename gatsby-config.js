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
    {
      resolve: "gatsby-transformer-remark", 
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              showCaptions: true,
              withWebp: true,
            },
          },
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              showCaptions: true,
              withWebp: true,
            },
          }
        ]
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
        "path": "./src/pages/",
        "ignore": [`**/_*`]
      },
      __key: "pages"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "services",
      "path": "./src/services/",
      "ignore": [`**/_*`]
    },
    __key: "services"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": "./src/projects/",
        "ignore": [`**/_*`]
      },
      __key: "projects"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "team",
        "path": "./src/team/",
        "ignore": [`**/_*`]
      },
      __key: "team"
    },
  ]
};