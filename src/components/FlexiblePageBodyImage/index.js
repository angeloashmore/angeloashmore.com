import React from 'react'
import Img from 'gatsby-image'

const FlexiblePageBodyImage = ({ imageSizes }) => <Img sizes={imageSizes} />

export default FlexiblePageBodyImage

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
          }
        }
      }
    }
  }
`
