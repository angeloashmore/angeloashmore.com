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
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              showCaptions: true,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-emoji',
          'gatsby-remark-a11y-emoji',
          'gatsby-remark-widows',
        ],
      },
    },
    'gatsby-transformer-sharp',
  ],
}
