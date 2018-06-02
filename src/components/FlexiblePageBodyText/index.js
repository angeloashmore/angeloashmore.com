import React from 'react'
import MaxWidth from '../MaxWidth'
import './index.module.css'

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
  fragment FlexiblePageBodyText on PrismicFlexiblePage {
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
`
