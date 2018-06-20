import React from 'react'

const FlexiblePageBodyText = ({ slice }) => (
  <section className="center mw7 ph3 mb4 mb5-ns">
    <div
      className="lh-copy f4-ns"
      dangerouslySetInnerHTML={{ __html: slice.primary.text.html }}
    />
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
