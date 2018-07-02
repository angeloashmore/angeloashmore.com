import React from 'react'
import styled from 'react-emotion'
import { Link, StaticQuery, graphql } from 'gatsby'
import t from '../theme'

const Header = props => (
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
      <Container {...props}>
        <Content>
          <NameLink to="/">
            <Name>{data.site.siteMetadata.title}</Name>
          </NameLink>
          <Nav>
            <NavItems>
              <NavItem><NavItemLink to="/">Articles</NavItemLink></NavItem>
            </NavItems>
          </Nav>
        </Content>
      </Container>
    )}
  />
)

export default Header

const Container = styled.header`
  color: ${t.c.secondary};
`

const Content = styled.div`
  align-items: baseline;
  display: flex;
  margin: 0 auto;
  max-width: ${t.ms.m};
  padding: ${t.s(2, 0, '0')};

  ${t.mq.m} {
    padding-top: ${t.s(3)};
  }
`

const NameLink = styled(Link)`
  color: ${t.c.primary};
  text-decoration: none;
`

const Name = styled.h1`
  font-family: ${t.ff.mono};
  font-size: ${t.f(2)};
  font-weight: 600;
  margin: 0;
`

const Nav = styled.nav`
  font-size: ${t.f(0)};
`

const NavItems = styled.ul`
  margin: 0;
  padding: 0;
`

const NavItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-left: ${t.s(0)};

  ${t.mq.m} {
    margin-left: ${t.s(1)};
  }
`

const NavItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: color ${t.t};

  &:hover {
    color: ${t.c.primary};
  }
`
