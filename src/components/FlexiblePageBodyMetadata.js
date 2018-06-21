import React from 'react'
import { css } from 'emotion'
import { transparentize } from 'polished'
import t from '../theme'

const styles = {
  container: css`
    margin: 0 auto ${t.s(3)};
    max-width: ${t.ms.m};
    padding: ${t.s(0)};
  `,
  author: css`
    display: flex;
    margin-bottom: ${t.s(3)};
  `,
  authorAvatar: css`
    width: ${t.s(4)};
    height: ${t.s(4)};
    border-radius: 100%;
    margin-right: ${t.s(0)};
  `,
  authorInfo: css`
    color: ${t.c.tertiary};
    font-size: ${t.f(-1)};
    line-height: ${t.lh.wide};
  `,
  authorInfoName: css`
    color: ${t.c.primary};
    font-size: ${t.f(0)};
    margin: 0;
  `,
  label: css`
    background-color: ${t.c.yellow};
    border-radius: ${t.s(-4)};
    color: ${transparentize(0.4, t.c.primary)};
    display: inline-block;
    font-size: ${t.f(0)};
    font-weight: 500;
    line-height: 1;
    margin-bottom: ${t.s(0)};
    padding: ${t.s(-3, -2)};
  `,
}

const FlexiblePageBodyMetadata = ({ slice, page }) => (
  <section className={styles.container}>
    <div className={styles.author}>
      <img
        src="https://www.gravatar.com/avatar/52f4cd57f86f9769ca7a9025a4e59d64"
        className={styles.authorAvatar}
        alt="Angelo Ashmore"
      />
      <div className={styles.authorInfo}>
        <p className={styles.authorInfoName}>Angelo Ashmore</p>
        <p className="ma0">
          Developer at Wall-to-Wall Studios. Full stack with a focus in
          frontend. Loves learning cutting edge technology.
        </p>
        <p className="ma0">{page.first_publication_date}</p>
      </div>
    </div>
    <span className={styles.label}>
      DevOps
    </span>
    <h1 className="fw6 ma0 mb3 f3 f2-ns">{slice.primary.displayTitle.text}</h1>
    {slice.primary.subtitle && (
      <p className="ma0 mb3 f4 f3-ns mid-gray">{slice.primary.subtitle.text}</p>
    )}
  </section>
)

export default FlexiblePageBodyMetadata

export const fragment = graphql`
  fragment FlexiblePageBodyMetadata on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      first_publication_date(formatString: "MMMM D")
      data {
        body {
          ... on PrismicFlexiblePageBodyMetadata {
            id
            primary {
              displayTitle: display_title {
                text
              }
              subtitle {
                text
              }
            }
          }
        }
      }
    }
  }
`
