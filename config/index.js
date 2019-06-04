module.exports = {
  pathPrefix: `/`, // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  siteTitle: `To Be A Dev`, // Navigation and Site Title
  siteTitleAlt: `To Be A Dev - Development Blog`, // Alternative Site title for SEO
  siteTitleManifest: `ToBeADev`,
  siteUrl: `https://tobea.dev`, // Domain of your site. No trailing slash!
  siteLanguage: `en`, // Language Tag on <html> element
  siteHeadline: `Writing and publishing web development content`, // Headline for schema.org JSONLD
  siteBanner: '/d.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'static/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: `Minimal Blog with a focus on JavaScript. Powered by MDX.`, // Your site description
  author: `Devin Metivier`, // Author for schemaORGJSONLD
  siteLogo: 'static/logo.png', // Image for schemaORGJSONLD
  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: `@devjmetivier`, // Twitter Username - Optional
  ogSiteName: `tobeadev`, // Facebook Site Name - Optional
  ogLanguage: `en_US`, // Facebook Language
  googleAnalyticsID: 'UA-70693457-4',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: `#B6433B`,
  backgroundColor: `#333A43`,
  socials: {
    twitter: { name: 'Twitter', link: 'https://twitter.com/devjmetivier' },
    github: { name: 'Github', link: 'https://github.com/dmetivier/tobea-dev/' },
    repo: {
      name: 'Repo',
      link: 'https://github.com/dmetivier/tobea-dev/issues',
    },
  },
};
