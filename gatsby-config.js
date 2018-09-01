module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // указывать нужно конкретное так как нужен name - то есть для проплеерс потом задам новое
        path: `./src/data/devices.json`,
        name: "devices"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/blog`,
        name: "posts"
      }
    }
  ]
};
