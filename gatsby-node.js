/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPrismicFlexiblePage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  result.data.allPrismicFlexiblePage.edges.forEach(({ node }) => {
    createPage({
      path: node.uid,
      component: path.resolve('./src/templates/FlexiblePage/index.js'),
      context: {
        id: node.id,
      },
    })
  })

  return
}
