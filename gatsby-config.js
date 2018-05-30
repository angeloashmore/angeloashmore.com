module.exports = {
  siteMetadata: {
    title: 'Angelo Ashmore',
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
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
  ],
}
