import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import t from '../theme'

const ArticleAuthor = ({
  articleDate,
  articleTimeToRead,
  avatar,
  ...props
}) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            authorName
            authorDescription
          }
        }
        avatar: file(sourceInstanceName: { eq: "images" }, base: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <Container {...props}>
        <Avatar fluid={data.avatar.childImageSharp.fluid} alt={data.site.siteMetadata.authorName} />
        <Details>
          <DetailsName>{data.site.siteMetadata.authorName}</DetailsName>
          <DetailsDescription>{data.site.siteMetadata.authorDescription}</DetailsDescription>
          <DetailsArticleDate>{articleDate}</DetailsArticleDate>
          <DetailsArticleTimeToRead>
            {articleTimeToRead} min read
          </DetailsArticleTimeToRead>
        </Details>
      </Container>
    )}
  />
)

ArticleAuthor.propTypes = {
  articleDate: PropTypes.string.isRequired,
  articleTimeToRead: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default ArticleAuthor

export const fragment = graphql`
  fragment ArticleAuthor on RootQueryType {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMM DD 'YY")
      }
      timeToRead
    }
  }
`

const Container = styled.div`
  align-items: center;
  color: ${t.c.secondary};
  display: flex;
  font-size: ${t.f(-1)};
`

const Avatar = styled(Img)`
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

const Details = styled.div`
  flex-grow: 1;
`

const DetailsName = styled.p`
  color: ${t.c.primary};
  font-size: ${t.f(-1)};
  font-weight: 600;
  margin: 0;
`

const DetailsDescription = styled.p`
  font-size: ${t.f(-1)};
  line-height: ${t.lh.copy};
  margin: ${t.s(-5, '0')};
`

const DetailsArticleDate = styled.span`
  &::after {
    content: '\u2219';
    display: inline-block;
    margin: ${t.s('0', -4)};
  }
`

const DetailsArticleTimeToRead = styled.span``
