module.exports = {
  siteMetadata: {
    author: "Foo",
    title: `Agency Name`,
    description: `Agency Name (EAC) Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenean et sapien a leo auctor scelerisque quis nec magna. Sed dictum ante a risus vehicula facilisis.`,
    navigation: [
      {
        items: [{ text: "Home", link: "/" }],
      },
      {
        items: [{ text: "Blog", link: "/blog" }],
      },
      {
        items: [{ text: "Document", link: "/document" }],
      },
      {
        items: [
          { text: "Document with sidenav", link: "/document-with-sidenav" },
        ],
      },
      {
        title: "Document submenu",
        items: [
          { text: "Navigation link", link: "/" },
          { text: "Navigation link", link: "/" },
          { text: "Navigation link", link: "/" },
        ],
      },
    ],
    secondaryLinks: [
      { text: "Secondary link", link: "/" },
      { text: "Another secondary link", link: "/" },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/md-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
