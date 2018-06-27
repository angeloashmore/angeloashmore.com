import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery } from 'gatsby'
import t from '../theme'
import Header from './Header'

import 'app-reset'
import 'typeface-roboto'
import 'typeface-space-mono'
import '../index.css'
import '../syntax.css'

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
        <Container>
          <Header />
          {children}
        </Container>
      </>
    )}
  />
)

export default Layout

const Container = styled.div`
  color: ${t.c.primary};
  font-family: ${t.ff.primary};
  line-height: ${t.lh.base};
`
