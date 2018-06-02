import React from 'react'
import PropTypes from 'prop-types'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyMetadata = ({
  displayTitle,
  publicationDate,
  subtitle,
}) => (
  <div styleName="container">
    <MaxWidth size="medium">
      <h1 styleName="display-title">{displayTitle}</h1>
      {subtitle && <p styleName="subtitle">{subtitle}</p>}
      <span styleName="published-date">{publicationDate}</span>
    </MaxWidth>
  </div>
)

FlexiblePageBodyMetadata.propTypes = {
  displayTitle: PropTypes.string.isRequired,
  publicationDate: PropTypes.string,
  subtitle: PropTypes.string,
}

export default FlexiblePageBodyMetadata

export const fragment = graphql`
  fragment FlexiblePageBodyMetadata on PrismicFlexiblePage {
    publicationDate: first_publication_date(formatString: "MMMM D")
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
