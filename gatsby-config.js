const config = require(`./config`);

const pathPrefix = config.pathPrefix === `/` ? `` : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `nofollow noopener noreferrer`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 90,
              withWebp: true,
              linkImagesToOriginal: false,
            },
          },
          // TODO: Replace with "mdx-component-autolink-headers"
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitleAlt,
        short_name: config.siteTitleManifest,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `standalone`,
        icon: config.favicon,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-use-dark-mode',
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        matchStartOfPath: ['post'],
        color: '#B6433B',
      },
    },
  ],
};
