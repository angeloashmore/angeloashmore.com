import React from 'react'
import Img from 'gatsby-image'
import MaxWidth from './MaxWidth'

const FlexiblePageBodyImage = ({ slice }) => (
  <section styleName="container">
    <MaxWidth size={slice.primary.width}>
      <Img
        styleName="image"
        fluid={slice.primary.image.localFile.childImageSharp.fluid}
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
  fragment FlexiblePageBodyImage on RootQueryType {
    prismicFlexiblePage(id: { eq: $id }) {
      data {
        body {
          ... on PrismicFlexiblePageBodyImage {
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 75) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
  }
`
