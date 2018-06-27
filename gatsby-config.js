const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'a11e',
    description: 'A collection of things',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: path.resolve(__dirname, 'src', 'content', 'articles'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'],
      },
    },
    'gatsby-transformer-sharp',
  ],
}
