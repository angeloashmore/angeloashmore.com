const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  siteMetadata: {
    title: 'Angelo Ashmore',
    description: 'A collection of things',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-css-modules',
      options: {
        filetypes: {
          '.css': {
            plugins: ['postcss-cssnext'],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-sharp',
  ],
}
