import React from 'react'
import PropTypes from 'prop-types'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyMetadata = ({ displayTitle }) => (
  <div styleName="container">
    <MaxWidth size="medium">
      <h1 styleName="display-title">{displayTitle}</h1>
      <span styleName="published-date">June 1</span>
    </MaxWidth>
  </div>
)

FlexiblePageBodyMetadata.propTypes = {
  displayTitle: PropTypes.string.isRequired,
}

export default FlexiblePageBodyMetadata

export const fragment = graphql`
  fragment FlexiblePageBodyMetadata on PrismicFlexiblePage {
    data {
      body {
        ... on PrismicFlexiblePageBodyMetadata {
          id
          primary {
            displayTitle: display_title {
              text
            }
          }
        }
      }
    }
  }
`
