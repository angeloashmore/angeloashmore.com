import React from 'react'
import MaxWidth from './MaxWidth'

const FlexiblePageBodyText = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size="medium">
      <div
        styleName="text"
        dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}
      />
    </MaxWidth>
  </section>
)

export default FlexiblePageBodyText

export const fragment = graphql`
  fragment FlexiblePageBodyText on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicFlexiblePageBodyText {
            id
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
