import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <main className="center mw7 ph3">
        <ul>
          {articles.map(article => (
            <li key={article.id}>
              <Link
                to={`/${article.frontmatter.slug}`}
                className="no-underline underline-hover color-inherit"
              >
                <h2 className="dib">{article.frontmatter.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
