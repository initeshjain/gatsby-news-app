/**
 * Configure your Gatsby site with this file.
/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Googgle.in News App`,
    description: `Keep in touch with latest headlines...`,
    author: `@newsapp`,
    siteUrl: `http://localhost:8000`,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // The name of the plugin
      resolve: 'gatsby-source-mongodb',
      options: {
        // Name of the database and collection where are books reside
        dbName: 'NewsApp',
        collection: 'news',
        server: {
          address: process.env.MONGODB_HOST,
          port: process.env.MONGODB_PORT
        },
        auth: {
          user: process.env.MONGODB_USER,
          password: process.env.MONGODB_PASSWORD
        },
        extraParams: {
          replicaSet: 'Main-shard-0',
          ssl: true,
          authSource: 'admin',
          retryWrites: true
        }
      }
    },
  ],
}
