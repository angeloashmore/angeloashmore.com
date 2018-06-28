import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import t from '../theme'

const ArticleTitle = ({ title, subtitle, ...props }) => (
  <Container {...props}>
    <Title>{title}</Title>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
  </Container>
)

ArticleTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default ArticleTitle

export const fragment = graphql`
  fragment ArticleTitle on RootQueryType {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

const Container = styled.div``

const Title = styled.h2`
  font-size: ${t.f(4)};
  font-weight: 600;
  line-height: ${t.lh.title};
  margin: 0;

  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`

const Subtitle = styled.h3`
  color: ${t.c.secondary};
  font-size: ${t.f(1)};
  font-weight: normal;
  line-height: ${t.lh.title};
  margin: ${t.s(-5, '0', '0')};

  ${t.mq.m} {
    font-size: ${t.f(2)};
  }
`
