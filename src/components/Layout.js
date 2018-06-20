import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
import Header from './Header'

import '../index.css'
import 'tachyons'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          titleTemplate={`%s – ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="sans-serif">
          <Header />
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
