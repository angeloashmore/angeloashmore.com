import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery } from 'gatsby'
import { css } from 'emotion'
import Header from './Header'
import t from '../theme'

import 'app-reset'
import 'typeface-roboto'
import 'typeface-space-mono'
import '../index.css'
import '../syntax.css'

const styles = {
  container: css`
    color: ${t.c.primary};
    font-family: ${t.ff.primary};
    line-height: ${t.lh.base};
  `,
}

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
        <div className={styles.container}>
          <Header />
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
