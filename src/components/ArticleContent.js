import React from 'react'
import styled from 'react-emotion'
import t from '../theme'

const ArticleContent = ({ html }) => (
  <Container dangerouslySetInnerHTML={{ __html: html }} />
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
  line-height: ${t.lh.wide};

  h1,
  h2,
  h3 {
    font-family: ${t.ff.sans};
  }

  h1 {
    font-size: ${t.f(3)};
    font-weight: 600;
    margin-bottom: ${t.s(-3)};
    margin-top: ${t.s(1)};

    ${t.mq.m} {
      margin-top: ${t.s(2)};
    }

    code {
      font-size: ${t.f(2)};
    }
  }

  h2 {
    font-size: ${t.f(1)};
    font-weight: 600;
    margin-bottom: ${t.s(-3)};
    margin-top: ${t.s(1)};

    ${t.mq.m} {
      margin-top: ${t.s(2)};
    }

    code {
      font-size: ${t.f(2)};
    }
  }

  h3 {
    font-size: ${t.f(-1)};
    font-weight: 600;
    margin-bottom: ${t.s(-3)};
    margin-top: ${t.s(1)};

    ${t.mq.m} {
      margin-top: ${t.s(2)};
    }

    code {
      font-size: ${t.f(2)};
    }
  }

  a {
    text-decoration: underline;
  }

  code {
    font-family: ${t.ff.mono};
    font-size: ${t.f(-1)};
    padding: 0 ${t.s(-3)};
    border-radius: ${t.r(-10)};

    ${t.mq.m} {
      font-size: ${t.f(0)};
    }
  }

  pre {
    -webkit-overflow-scrolling: touch;
    border-radius: ${t.r(-5)};
    line-height: ${t.lh.medium};
    margin: ${t.s(2)} 0;
    padding: ${t.s(0)};

    ${t.mq.m} {
      padding: ${t.s(1)};
    }

    code {
      border-radius: 0;
      font-size: ${t.f(-3)};
      padding: 0;

      ${t.mq.m} {
        font-size: ${t.f(-2)};
      }
    }
  }

  p {
    font-family: ${t.ff.serif};
    margin-bottom: ${t.s(0)};
    font-size: ${t.f(-0.5)};
    line-height: 1.8;

    ${t.mq.m} {
      font-size: ${t.f(0.5)};
    }
  }
`
