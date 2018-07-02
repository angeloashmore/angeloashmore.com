import React from 'react'
import { graphql } from 'gatsby'
import HTMLContent from './HTMLContent'

const ArticleContent = ({ html, ...props }) => (
  <HTMLContent html={html} {...props} />
)

export default ArticleContent

export const fragment = graphql`
  fragment ArticleContent on RootQueryType {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`
