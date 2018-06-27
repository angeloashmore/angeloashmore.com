import React from 'react'
import styled from 'react-emotion'
import t from '../theme'

const ArticleMetadata = ({ title, subtitle, date, timeToRead }) => (
  <Container>
    <Metadata>
      <MetadataDate>{date}</MetadataDate>
      <MetadataTimeToRead>{timeToRead} min</MetadataTimeToRead>
    </Metadata>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Container>
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

const Container = styled.div`
  margin-bottom: ${t.s(0)};

  ${t.mq.m} {
    margin-bottom: ${t.s(1)};
  }
`

const Title = styled.h2`
  font-size: ${t.f(4)};
  font-weight: 600;

  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`

const Subtitle = styled.h3`
  color: ${t.c.tertiary};
  font-size: ${t.f(1)};

  ${t.mq.m} {
    font-size: ${t.f(2)};
  }
`

const Metadata = styled.div`
  color: ${t.c.tertiary};
  font-size: ${t.f(-1)};
  margin-top: ${t.s(-3)};

  ${t.mq.m} {
    margin-top: ${t.s(0)};
  }
`

const MetadataDate = styled.span`
  &::after {
    content: '\u2219';
    margin: 0 ${t.s(-3)};
    display: inline-block;
  }
`

const MetadataTimeToRead = styled.span``
