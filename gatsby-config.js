const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

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
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
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
