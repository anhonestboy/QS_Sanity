// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  siteMetadata: {
    title: `Mary & Maurizio Photography`,
    titleTemplate: `%s · Mary & Maurizio Photography`,
    description:
    `Mary & Maurizio - Lifestyle photography portfolio.`,
    url: `https://www.www.maryandmaurizio.com`, // No trailing slash allowed!
    image: `/images/AlexandraHome.jpg`, // Path to your image you placed in the 'static' folder
    twitterUsername: `@maryandmaurizio`,
    instagram: `https://www.instagram.com/maryandmaurizio`,
    behance: `https://www.behance.net/maryandmaurizio`,
    author: {
      name: `Maurizio Palumbo`,
      summary: `who lives and works in Naples.`,
    },
    description: `Mary & Maurizio photography portfolio`,
    siteUrl: `https://www.maryandmaurizio.com/`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-no-index`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      },
    },
  ],
};
