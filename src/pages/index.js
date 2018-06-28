import React from 'react'
import styled from 'react-emotion'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import t from '../theme'

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <Container>
        <Articles>
          {articles.map(article => (
            <Article key={article.id}>
              <ArticleLink to={`/${article.frontmatter.slug}`}>
                <ArticleTitle>{article.frontmatter.title}</ArticleTitle>
                {article.frontmatter.subtitle && (
                  <ArticleSubtitle>
                    {article.frontmatter.subtitle}
                  </ArticleSubtitle>
                )}
              </ArticleLink>
            </Article>
          ))}
        </Articles>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(articles)/.*.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            subtitle
          }
        }
      }
    }
  }
`

const Container = styled.main`
  margin: 0 auto;
  max-width: ${t.ms.m};
  padding: 0 ${t.s(0)};
`

const Articles = styled.ul`
  margin: 0;
  padding: 0;
`

const Article = styled.li`
  list-style: none;
  margin-bottom: ${t.s(0)};
  text-align: center;

  ${t.mq.m} {
    margin-bottom: ${t.s(2)};
  }
`

const ArticleTitle = styled.h2`
  font-size: ${t.f(4)};
  font-weight: 600;
  line-height: ${t.lh.title};
  margin: 0;

  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`

const ArticleSubtitle = styled.h3`
  color: ${t.c.secondary};
  font-size: ${t.f(1)};
  font-weight: normal;
  line-height: ${t.lh.title};
  margin: ${t.s(-5, '0', '0')};

  ${t.mq.m} {
    font-size: ${t.f(2)};
  }
`

const ArticleLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    ${ArticleTitle} {
      text-decoration: underline;
    }
  }
`

