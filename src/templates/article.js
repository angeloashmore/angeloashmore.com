import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ArticleContent from '../components/ArticleContent'
import ArticleMetadata from '../components/ArticleMetadata'
import { css } from 'emotion'
import t from '../theme'

const styles = {
  article: css`
    margin: 0 auto;
    max-width: ${t.ms.m};
    padding: 0 ${t.s(0)};
  `,
}

const ArticleTemplate = ({ data }) => {
  const article = data.markdownRemark

  return (
    <>
      <Helmet title={article.frontmatter.title} />
      <Layout>
        <div className={styles.article}>
          <ArticleMetadata
            title={article.frontmatter.title}
            subtitle={article.frontmatter.subtitle}
            date={article.frontmatter.date}
            timeToRead={article.timeToRead}
          />
          <ArticleContent html={article.html} />
        </div>
      </Layout>
    </>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    ...ArticleMetadata
    ...ArticleContent
  }
`
