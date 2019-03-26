module.exports = {
  siteMetadata: {
    title: `To Be A Dev`,
    author: `Devin Metivier`,
    description: `Personal Blog by Devin Metivier.`,
    siteUrl: `https://tobea.dev`,
    social: {
      twitter: `@devjmetivier`,
    },
  },
  pathPrefix: `/`,
  plugins: [
    'gatsby-mdx',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // TODO: Make this better - browser future-proofing is poor
            resolve: 'gatsby-remark-code-buttons',
            options: {
              // Optional button container class name.
              className: `clip-copy-container`,
              // Optional button class name.
              buttonClassName: `clip-copy-button`,
              // Optional icon class name.
              iconClassName: `clip-copy-icon`,
              // Optional `svg` icon. Place any svg markup in here.
              // icon: `customIcon`,
              // Optional button text.
              // text: `Copy To Clipboard`,
              // Optional tooltip text.
              // tooltip: `customTooltip`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-70693457-4`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `To Be A Dev`,
        short_name: `2BA-dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-dark-mode',
  ],
};
