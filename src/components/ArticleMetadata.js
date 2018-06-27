import React from 'react'
import { css } from 'emotion'
import t from '../theme'

const styles = {
  container: css`
    margin-bottom: ${t.s(0)};

    ${t.mq.m} {
      margin-bottom: ${t.s(1)};
    }
  `,
  title: css`
    font-size: ${t.f(4)};
    font-weight: 600;

    ${t.mq.m} {
      font-size: ${t.f(5)};
    }
  `,
  subtitle: css`
    color: ${t.c.tertiary};
    font-size: ${t.f(1)};

    ${t.mq.m} {
      font-size: ${t.f(2)};
    }
  `,
  metadata: css`
    color: ${t.c.tertiary};
    font-size: ${t.f(-1)};
    margin-top: ${t.s(-3)};

    ${t.mq.m} {
      margin-top: ${t.s(0)};
    }
  `,
  metadataDate: css`
    &::after {
      content: '\u2219';
      margin: 0 ${t.s(-3)};
      display: inline-block;
    }
  `,
  metadataTimeToRead: css``,
}

const ArticleMetadata = ({ title, subtitle, date, timeToRead }) => (
  <div className={styles.container}>
    <p className={styles.metadata}>
      <span className={styles.metadataDate}>{date}</span>
      <span className={styles.metadataTimeToRead}>{timeToRead} min</span>
    </p>
    <h2 className={styles.title}>{title}</h2>
    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
  </div>
)

export default ArticleMetadata

export const fragment = graphql`
  fragment ArticleMetadata on RootQueryType {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        date(formatString: "MMM DD, YYYY")
      }
      timeToRead
    }
  }
`
