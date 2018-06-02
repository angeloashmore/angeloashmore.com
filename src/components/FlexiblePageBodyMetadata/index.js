import React from 'react'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyMetadata = ({ slice, page }) => (
  <section styleName="container">
    <MaxWidth size="medium">
      <h1 styleName="display-title">{slice.primary.displayTitle.text}</h1>
      {slice.primary.subtitle && (
        <p styleName="subtitle">{slice.primary.subtitle.text}</p>
      )}
      <span styleName="published-date">
        {page.publicationDate}
        {page.publicationDateYear !== new Date().getFullYear().toString() &&
          `, ${page.publicationDateYear}`}
      </span>
    </MaxWidth>
  </section>
)

export default FlexiblePageBodyMetadata

export const fragment = graphql`
  fragment FlexiblePageBodyMetadata on PrismicFlexiblePage {
    publicationDate: first_publication_date(formatString: "MMMM D")
    publicationDateYear: first_publication_date(formatString: "YYYY")
    data {
      body {
        ... on PrismicFlexiblePageBodyMetadata {
          id
          primary {
            displayTitle: display_title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`
