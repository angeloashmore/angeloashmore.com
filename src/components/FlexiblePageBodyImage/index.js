import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyImage = ({ imageSizes, caption, width }) => (
  <div styleName="container">
    <MaxWidth size={width}>
      <Img styleName="image" sizes={imageSizes} />
    </MaxWidth>
    {caption && (
      <div styleName="caption">
        <MaxWidth size={width === 'full' ? 'large' : width}>
          <div dangerouslySetInnerHTML={{ __html: caption }} />
        </MaxWidth>
      </div>
    )}
  </div>
)

export default FlexiblePageBodyImage

FlexiblePageBodyImage.propTypes = {
  caption: PropTypes.string,
  width: PropTypes.oneOf(['medium', 'large', 'full']),
}

export const fragment = graphql`
  fragment FlexiblePageBodyImage on PrismicFlexiblePage {
    data {
      body {
        ... on PrismicFlexiblePageBodyImage {
          id
          primary {
            image {
              localFile {
                childImageSharp {
                  sizes(maxWidth: 1920, quality: 75) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
            caption {
              html
            }
            width
          }
        }
      }
    }
  }
`
