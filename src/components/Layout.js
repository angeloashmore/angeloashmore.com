import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import t from '../theme'
import Header from './Header'

import 'modern-normalize'
import 'typeface-roboto'
import 'typeface-roboto-mono'
import 'typeface-libre-baskerville'
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
  -webkit-font-smoothing: antialiased;
  color: ${t.c.primary};
  font-family: ${t.ff.sans};
`
