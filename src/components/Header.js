import React from 'react'
import { StaticQuery } from 'gatsby'
import Link from 'gatsby-link'

const Header = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <header className="flex justify-center center pa3 pb0">
        <Link className="color-inherit no-underline underline-hover" to="/">
          <h1 className="ma0 f3 fw6 code">{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
    )}
  />
)

export default Header
