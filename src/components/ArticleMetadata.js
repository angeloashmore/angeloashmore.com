import React from 'react'
import styled from 'react-emotion'
import t from '../theme'

const ArticleMetadata = ({ title, subtitle, date, timeToRead }) => (
  <Container>
    <Author>
      <AuthorPhoto src="https://www.gravatar.com/avatar/52f4cd57f86f9769ca7a9025a4e59d64" />
      <AuthorMetadata>
        <AuthorMetadataName>Angelo Ashmore</AuthorMetadataName>
        <AuthorMetadataDescription>
          Developer at Wall-to-Wall Studios
        </AuthorMetadataDescription>
        <AuthorMetadataArticleDate>{date}</AuthorMetadataArticleDate>
        <AuthorMetadataArticleTimeToRead>
          {timeToRead} min read
        </AuthorMetadataArticleTimeToRead>
      </AuthorMetadata>
    </Author>
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
        date(formatString: "MMM DD 'YY")
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

const Author = styled.div`
  align-items: center;
  color: ${t.c.tertiary};
  display: flex;
  font-size: ${t.f(-1)};
  margin-bottom: ${t.s(1)};

  ${t.mq.m} {
    margin-bottom: ${t.s(3)};
  }
`

const AuthorPhoto = styled.img`
  border-radius: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  height: ${t.s(3)};
  margin-right: ${t.s(-1)};
  overflow: hidden;
  width: ${t.s(3)};

  ${t.mq.m} {
    height: ${t.s(4)};
    margin-right: ${t.s(0)};
    width: ${t.s(4)};
  }
`

const AuthorMetadata = styled.div`
  flex-grow: 1;
`

const AuthorMetadataName = styled.p`
  color: ${t.c.primary};
  font-size: ${t.f(-1)};
`

const AuthorMetadataDescription = styled.p`
  font-size: ${t.f(-1)};
  line-height: ${t.lh.medium};
  margin: ${t.s(-5)} 0;
`

const AuthorMetadataArticleDate = styled.span`
  &::after {
    content: '\u2219';
    margin: 0 ${t.s(-4)};
    display: inline-block;
  }
`

const AuthorMetadataArticleTimeToRead = styled.span``

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
