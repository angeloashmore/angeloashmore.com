import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from 'emotion'
import t from '../theme'
import Header from './Header'

import 'modern-normalize'
import 'typeface-libre-baskerville'
import 'typeface-libre-franklin'
import 'typeface-space-mono'
import '../syntax.css'

injectGlobal`
  html {
    ${t.mq.m} {
      font-size: 17px;
    }
  }

  body {
    overflow-x: hidden;
  }
`

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
          <Background />
          <StyledHeader />
          <Content>
            {children}
          </Content>
        </Container>
      </>
    )}
  />
)

export default Layout

const Container = styled.div`
  -webkit-font-smoothing: antialiased;
  background-color: ${t.c.bg};
  color: ${t.c.primary};
  font-family: ${t.ff.sans};
  position: relative;
`

const Background = styled.div`
  background-color: ${t.c.tertiary};
  height: 90vh;
  min-height: 35rem;
  left: -25vw;
  position: absolute;
  right: -25vw;
  top: -25vh;
  transform: rotate(-7.5deg);
`

const StyledHeader = styled(Header)`
  position: relative;
  z-index: 1;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`
