import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
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
            avatar="https://www.gravatar.com/avatar/52f4cd57f86f9769ca7a9025a4e59d64"
            description="Develop at Wall-to-Wall Studios"
            name="Angelo Ashmore"
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
  margin-bottom: ${t.s(1)};

  ${t.mq.m} {
    margin-bottom: ${t.s(3)};
  }
`

const StyledArticleTitle = styled(ArticleTitle)`
  margin-bottom: ${t.s(0)};

  ${t.mq.m} {
    margin-bottom: ${t.s(1)};
  }
`
