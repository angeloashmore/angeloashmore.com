import React from 'react'
import styled from 'react-emotion'
import t from '../theme'

const ArticleContent = ({ html, ...props }) => (
  <Container dangerouslySetInnerHTML={{ __html: html }} {...props} />
)

export default ArticleContent

export const fragment = graphql`
  fragment ArticleContent on RootQueryType {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`

const Container = styled.div`
  font-family: ${t.ff.serif};
  font-size: ${t.f(-0.5)};
  line-height: ${t.lh.copy};

  ${t.mq.m} {
    font-size: ${t.f(0.5)};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${t.ff.sans};
    font-weight: 600;
    line-height: ${t.lh.title};
    margin-bottom: ${t.s(-2)};
    margin-top: ${t.s(1)};

    ${t.mq.m} {
      margin-top: ${t.s(2)};
    }

    code {
      font-size: 0.85em;
    }
  }

  h1 {
    font-size: ${t.f(3)};
  }

  h2 {
    font-size: ${t.f(1)};
  }

  h3 {
    font-size: ${t.f(-1)};
  }

  a {
    color: inherit;
  }

  code {
    border-radius: ${t.r(-10)};
    font-family: ${t.ff.mono};
    font-size: 0.9em;
    padding: ${t.s('0', -3)};
  }

  pre {
    -webkit-overflow-scrolling: touch;
    border-radius: ${t.r(-5)};
    line-height: ${t.lh.code};
    margin: ${t.s(2, '0')};
    padding: ${t.s(0)};

    ${t.mq.m} {
      padding: ${t.s(1)};
    }

    code {
      border-radius: 0;
      font-size: ${t.f(-2)};
      padding: 0;

      ${t.mq.m} {
        font-size: ${t.f(-1)};
      }
    }
  }

  p,
  ul,
  ol,
  blockquote {
    margin: ${t.s('0', '0', 0)};
  }

  .gatsby-resp-image-link {
    margin: ${t.s(2, '0')};
  }
`
