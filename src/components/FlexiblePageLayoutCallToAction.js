import React from 'react'

const FlexiblePageLayoutCallToAction = ({ slice }) => (
  <div>
    <dl>
      <dt>text</dt>
      <dd dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
      <dt>action_text</dt>
      <dd>{slice.primary.action_text}</dd>
      <dt>action_link</dt>
      <dd>{slice.primary.action_link.url}</dd>
    </dl>
  </div>
)

export default FlexiblePageLayoutCallToAction

export const fragment = graphql`
  fragment FlexiblePageLayoutCallToAction on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        layout {
          ... on PrismicFlexiblePageLayoutCallToAction {
            id
            primary {
              text {
                html
              }
              action_text
              action_link {
                url
              }
            }
          }
        }
      }
    }
  }
`
