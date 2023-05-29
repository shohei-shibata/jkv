/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `JKV Engineering LLC`,
    siteUrl: `https://www.yourdomain.tld`
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/mdx-wrapper.js`),
        },
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
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "fabrication",
        "path": "./src/fabrication/"
      },
      __key: "fabrication"
    }, 
  ]
};