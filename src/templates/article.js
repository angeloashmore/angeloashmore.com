import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import ArticleContent from '../components/ArticleContent'
import ArticleMetadata from '../components/ArticleMetadata'
import Layout from '../components/Layout'
import t from '../theme'

const ArticleTemplate = ({ data }) => {
  const article = data.markdownRemark

  return (
    <>
      <Helmet title={article.frontmatter.title} />
      <Layout>
        <Container>
          <ArticleMetadata
            title={article.frontmatter.title}
            subtitle={article.frontmatter.subtitle}
            date={article.frontmatter.date}
            timeToRead={article.timeToRead}
          />
          <ArticleContent html={article.html} />
        </Container>
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

const Container = styled.article`
  margin: 0 auto;
  max-width: ${t.ms.m};
  padding: 0 ${t.s(0)};
`
