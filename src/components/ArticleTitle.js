import React from 'react'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import t from '../theme'

const ArticleTitle = ({ title, subtitle, ...props }) => (
  <Container {...props}>
    <Title>
      <TitleHighlight />
      <TitleText>{title}</TitleText>
    </Title>
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
  display: inline-block;
  font-size: ${t.f(4)};
  font-weight: 700;
  line-height: ${t.lh.title};
  margin: 0;
  position: relative;

  ${t.mq.m} {
    font-size: ${t.f(5)};
  }
`

const TitleText = styled.span`
  position: relative;
  z-index: 1;
`

const TitleHighlight = styled.div`
  background: white;
  bottom: -10%;
  left: -2%;
  position: absolute;
  right: -2%;
  top: -10%;
  transform: rotate(-7.5deg) translateX(-5%);
`

// const TitleHighlight = styled.div`
//   background: yellow;
//   bottom: 5%;
//   left: -2%;
//   position: absolute;
//   right: -2%;
//   top: 60%;
//   transform: translate(-0%, 0%);
// `

const Subtitle = styled.h3`
  color: ${t.c.secondary};
  font-size: ${t.f(1)};
  font-weight: 500;
  line-height: ${t.lh.title};
  margin: ${t.s(-5, '0', '0')};
  position: relative;
  z-index: 1;

  ${t.mq.m} {
    font-size: ${t.f(2)};
  }
`
