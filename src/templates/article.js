import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { graphql } from 'gatsby'
import ArticleAuthor from '../components/ArticleAuthor'
import ArticleContent from '../components/ArticleContent'
import ArticleTitle from '../components/ArticleTitle'
import Layout from '../components/Layout'
import t from '../theme'

const ArticleTemplate = ({ data }) => {
  const article = data.markdownRemark

  return (
    <>
      <Helmet title={article.frontmatter.title} />
      <Layout>
        <Container>
          <StyledArticleAuthor
            articleDate={article.frontmatter.date}
            articleTimeToRead={article.timeToRead}
            avatarFluid={data.avatar.childImageSharp.fluid}
            description={data.site.siteMetadata.authorDescription}
            name={data.site.siteMetadata.authorName}
          />
          <StyledArticleTitle
            title={article.frontmatter.title}
            subtitle={article.frontmatter.subtitle}
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
    }
    ...ArticleAuthor
    ...ArticleTitle
    ...ArticleContent
  }
`

const Container = styled.article`
  margin: 0 auto;
  max-width: ${t.ms.m};
  padding: 0 ${t.s(0)};
`

const StyledArticleAuthor = styled(ArticleAuthor)`
  margin: ${t.s(2, '0')};

  ${t.mq.m} {
    margin: ${t.s(3, '0')};
  }
`

const StyledArticleTitle = styled(ArticleTitle)`
  margin-bottom: ${t.s(0)};

  ${t.mq.m} {
    margin-bottom: ${t.s(1)};
  }
`
