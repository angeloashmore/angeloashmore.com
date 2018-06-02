import React from 'react'
import PropTypes from 'prop-types'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyText = ({ text }) => (
  <div styleName="container">
    <MaxWidth size="medium">
      <div styleName="text" dangerouslySetInnerHTML={{ __html: text }} />
    </MaxWidth>
  </div>
)

FlexiblePageBodyText.propTypes = {
  text: PropTypes.string.isRequired,
}

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
