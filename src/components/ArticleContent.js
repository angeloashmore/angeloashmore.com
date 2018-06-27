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
  line-height: ${t.lh.wide};

  ${t.mq.m} {
    p {
      font-size: ${t.f(1)};
    }
  }

  code {
    font-family: ${t.ff.secondary};
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
    line-height: ${t.lh.base};
    margin: ${t.s(2)} 0;
    padding: ${t.s(0)};

    code {
      border-radius: 0;
      padding: 0;
    }

    ${t.mq.m} {
      margin-bottom: ${t.s(4)};
      margin-top: ${t.s(4)};
      padding: ${t.s(1)};
    }
  }

  p {
    margin-bottom: ${t.s(0)};

    ${t.mq.m} {
      margin-bottom: ${t.s(1)};
    }
  }
`
