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
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  // result.data.allPrismicFlexiblePage.edges.forEach(({ node }) => {
  //   if (node.uid.startsWith('_')) return

  //   createPage({
  //     path: node.uid,
  //     component: path.resolve('./src/templates/FlexiblePage.js'),
  //     context: {
  //       id: node.id,
  //     },
  //   })
  // })

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve('./src/templates/article.js'),
      context: {
        id: node.id,
      },
    })
  })

  return
}
