import React from 'react'
import styled from 'react-emotion'
import { StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import t from '../theme'

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
      <Container>
        <NameLink to="/">
          <Name>{data.site.siteMetadata.title}</Name>
        </NameLink>
      </Container>
    )}
  />
)

export default Header

const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: ${t.s(1, 0, '0')};
  margin-bottom: ${t.s(1)};

  ${t.mq.m} {
    padding-bottom: ${t.s(2)};
    padding-top: ${t.s(2)};
  }
`

const NameLink = styled(Link)`
  color: inherit;
`

const Name = styled.h1`
  font-family: ${t.ff.serif};
  font-size: ${t.f(2)};
  font-weight: 600;
  margin: 0;
`
