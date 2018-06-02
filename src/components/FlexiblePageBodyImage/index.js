import React from 'react'
import Img from 'gatsby-image'
import MaxWidth from '../MaxWidth'
import './index.module.css'

const FlexiblePageBodyImage = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size={slice.primary.width}>
      <Img
        styleName="image"
        sizes={slice.primary.image.localFile.childImageSharp.sizes}
      />
      {slice.primary.caption && (
        <div styleName="caption">
          <MaxWidth size="large">
            <div
              dangerouslySetInnerHTML={{ __html: slice.primary.caption.html }}
            />
          </MaxWidth>
        </div>
      )}
    </MaxWidth>
  </section>
)

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
