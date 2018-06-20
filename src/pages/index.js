import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

const IndexPage = ({ data }) => {
  const pages = data.allPrismicFlexiblePage.edges.map(edge => edge.node)

  return (
    <Layout>
      <main className="center mw7 ph3">
        <ul>
          {pages.map(page => (
            <li>
              <Link to={`/${page.uid}`} className="no-underline underline-hover color-inherit">
                <h2 className="dib">{page.data.title.text}</h2>
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
    allPrismicFlexiblePage {
      edges {
        node {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  }
`
