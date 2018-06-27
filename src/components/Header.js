import React from 'react'
import { StaticQuery } from 'gatsby'
import Link from 'gatsby-link'
import { css } from 'emotion'
import t from '../theme'

const styles = {
  container: css`
    display: flex;
    justify-content: center;
    padding: ${t.s(1)} ${t.s(0)} 0;
    margin-bottom: ${t.s(1)};

    ${t.mq.m} {
      margin-bottom: ${t.s(4)};
    }
  `,
  link: css`
    &:hover {
      text-decoration: underline;
    }
  `,
  name: css`
    font-family: ${t.ff.secondary};
    font-size: ${t.f(2)};
    font-weight: 600;
  `,
}

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
      <header className={styles.container}>
        <Link className={styles.link} to="/">
          <h1 className={styles.name}>{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
    )}
  />
)

export default Header
